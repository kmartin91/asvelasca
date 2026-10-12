import DOMPurify from 'dompurify';
import { cmsAsset, cmsImage, cmsSrcSet, toCmsPath } from './cms';
import { FORM_ACTIONS, IFRAME_ORIGINS } from './security';

const CONTENT_SIZES = '(min-width: 1360px) 1180px, 92vw';
const URL_ATTRIBUTES = ['src', 'href', 'action', 'poster'];

// CMS uploads are referenced as "/storage/…" or "/velasca/storage/…" (relative to the CMS host).
const isCmsUpload = (value) => /^\/(velasca\/)?storage\//.test(value);

const originOf = (value) => {
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
};

const purifier = DOMPurify();

purifier.addHook('afterSanitizeAttributes', (node) => {
  for (const name of URL_ATTRIBUTES) {
    const value = node.getAttribute(name);
    if (!value) continue;
    if (/^http:\/\//i.test(value)) node.setAttribute(name, value.replace(/^http:/i, 'https:'));
    else if (name !== 'href' && isCmsUpload(value)) node.setAttribute(name, cmsAsset(value));
  }

  switch (node.tagName) {
    case 'IMG': {
      const src = node.getAttribute('src');
      const srcset = src && toCmsPath(src) ? cmsSrcSet(src, [480, 880, 1400, 2000]) : undefined;
      if (srcset) {
        node.setAttribute('src', cmsImage(src, 1400));
        node.setAttribute('srcset', srcset);
        node.setAttribute('sizes', CONTENT_SIZES);
      }
      node.setAttribute('loading', 'lazy');
      node.setAttribute('decoding', 'async');
      break;
    }
    case 'VIDEO':
      // Autoplaying videos must be muted to play on mobile.
      node.setAttribute('playsinline', '');
      node.setAttribute('muted', '');
      node.setAttribute('preload', 'metadata');
      break;
    case 'AUDIO':
      node.setAttribute('preload', 'none');
      break;
    case 'IFRAME': {
      if (!IFRAME_ORIGINS.includes(originOf(node.getAttribute('src')))) {
        node.removeAttribute('src');
        node.setAttribute('hidden', '');
        break;
      }
      node.setAttribute('loading', 'lazy');
      node.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      node.setAttribute('allow', 'autoplay; encrypted-media; fullscreen; picture-in-picture');
      break;
    }
    case 'FORM':
      if (!FORM_ACTIONS.includes(node.getAttribute('action'))) {
        node.removeAttribute('action');
        node.setAttribute('data-blocked', '');
      }
      break;
    case 'BUTTON':
    case 'INPUT':
      // Forms are processed before their children: a blocked form gets inert controls.
      if (node.closest('form[data-blocked]')) node.setAttribute('disabled', '');
      break;
    case 'A':
      if (node.getAttribute('target') === '_blank') node.setAttribute('rel', 'noopener noreferrer');
      break;
    default:
  }

  // Only links and forms may open a named window (PayPal uses target="paypal").
  if (node.hasAttribute('target') && !['A', 'FORM'].includes(node.tagName)) {
    node.removeAttribute('target');
  }
});

const CONFIG = {
  ADD_TAGS: ['iframe'],
  ADD_ATTR: ['target', 'allow', 'allowfullscreen', 'frameborder', 'scrolling'],
  // A <style> tag from the CMS could restyle the whole site.
  FORBID_TAGS: ['style', 'link', 'meta', 'base', 'object', 'embed'],
};

// Editors stacked "<p>&nbsp;</p>" (or, pasted from Messenger, "<div class=…>&nbsp;</div>")
// as spacers: the new typography handles spacing, so blank blocks are dropped.
const MEDIA = 'img, picture, video, iframe, svg, hr, form';
const isBlank = (element) =>
  // trim() also strips non-breaking spaces.
  !element.querySelector(MEDIA) && !element.textContent.trim();

export function sanitize(html) {
  if (!html) return '';
  const fragment = purifier.sanitize(html, { ...CONFIG, RETURN_DOM_FRAGMENT: true });
  fragment.querySelectorAll('p, div').forEach((element) => {
    if (isBlank(element)) element.remove();
  });
  const container = document.createElement('div');
  container.append(fragment);
  return container.innerHTML;
}
