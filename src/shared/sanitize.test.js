import { describe, expect, it } from 'vitest';
import { sanitize } from './sanitize';

const render = (html) => {
  const container = document.createElement('div');
  container.innerHTML = sanitize(html);
  return container;
};

describe('sanitize', () => {
  it('removes scripts, inline handlers and javascript: URLs', () => {
    const html = sanitize(
      '<p onclick="steal()">Hi</p><script>alert(1)</script><img src="x.png" onerror="alert(2)"><a href="javascript:alert(3)">x</a>',
    );
    expect(html).not.toMatch(/script|onclick|onerror|javascript:/i);
  });

  it('drops <style> tags that could restyle the whole site', () => {
    expect(sanitize('<style>body{display:none}</style><p>ok</p>')).toBe('<p>ok</p>');
  });

  it('keeps allowed embeds and lazy-loads them', () => {
    const iframe = render('<iframe src="https://tally.so/r/mV7Nql"></iframe>').querySelector(
      'iframe',
    );
    expect(iframe.getAttribute('src')).toBe('https://tally.so/r/mV7Nql');
    expect(iframe.getAttribute('loading')).toBe('lazy');
  });

  it('neutralises iframes from unknown hosts', () => {
    const iframe = render('<iframe src="https://evil.example/phish"></iframe>').querySelector(
      'iframe',
    );
    expect(iframe.hasAttribute('src')).toBe(false);
    expect(iframe.hasAttribute('hidden')).toBe(true);
  });

  it('keeps PayPal buy buttons working', () => {
    const form = render(
      '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">' +
        '<input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="ABC">' +
        '<select name="os0"><option value="M">M</option></select><input type="submit" value="Buy"></form>',
    ).querySelector('form');

    expect(form.getAttribute('action')).toBe('https://www.paypal.com/cgi-bin/webscr');
    expect(form.getAttribute('target')).toBe('paypal');
    expect(form.querySelector('[name="hosted_button_id"]').value).toBe('ABC');
    expect(form.querySelector('[name="os0"]')).not.toBeNull();
    expect(form.querySelector('[type="submit"]').disabled).toBe(false);
  });

  it('blocks forms posting anywhere else', () => {
    const form = render(
      '<form action="https://evil.example/collect" method="post"><input name="email"><button>Go</button></form>',
    ).querySelector('form');

    expect(form.hasAttribute('action')).toBe(false);
    expect(form.querySelector('button').disabled).toBe(true);
    expect(form.querySelector('input').disabled).toBe(true);
  });

  it('serves CMS images resized, lazy and over https', () => {
    const [cms, legacy] = render(
      '<img src="/storage/uploads/2023/06/09/ticket.png"><img src="http://www.asvelasca.it/images/old.jpg">',
    ).querySelectorAll('img');

    expect(cms.getAttribute('src')).toMatch(/^https:\/\/cms\.example\.test\/api\/cockpit\/image\?/);
    expect(cms.getAttribute('srcset')).toContain('480w');
    expect(cms.getAttribute('loading')).toBe('lazy');
    expect(legacy.getAttribute('src')).toBe('https://www.asvelasca.it/images/old.jpg');
  });

  it('protects new tabs against reverse tabnabbing', () => {
    const link = render('<a href="https://example.com" target="_blank">x</a>').querySelector('a');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('makes videos playable inline and muted', () => {
    const video = render(
      '<video autoplay loop><source src="http://www.asvelasca.it/v.mp4"></video>',
    ).querySelector('video');
    expect(video.hasAttribute('playsinline')).toBe(true);
    expect(video.hasAttribute('muted')).toBe(true);
    expect(video.querySelector('source').getAttribute('src')).toBe(
      'https://www.asvelasca.it/v.mp4',
    );
  });

  it('removes empty spacer paragraphs', () => {
    expect(sanitize('<p>a</p><p>&nbsp;</p><p> </p><p>b</p>')).toBe('<p>a</p><p>b</p>');
  });

  it('removes blank blocks pasted from other apps, keeping media', () => {
    const html =
      '<div class="x">a</div><div class="x" dir="auto">&nbsp;</div>' +
      '<div><div class="y"><br></div></div><p style="text-align:left">&nbsp;<br></p>' +
      '<p><img src="https://example.com/a.jpg" alt=""></p><div>b</div>';
    const output = sanitize(html);
    expect(output).not.toContain('&nbsp;');
    expect(output).not.toContain('<br>');
    expect(output.match(/<(p|div)\b/g)).toHaveLength(3);
    expect(output).toContain('<img');
  });
});
