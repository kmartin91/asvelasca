import { describe, expect, it } from 'vitest';
import { absoluteUrl, localeRoutes, sitemapXml } from './seo';

describe('seo', () => {
  it('builds canonical URLs on the bare domain, without trailing slash', () => {
    expect(absoluteUrl('/')).toBe('https://asvelasca.it/');
    expect(absoluteUrl('/it/squadra/')).toBe('https://asvelasca.it/it/squadra');
  });

  it('lists each locale with its own wording and keeps the confirmation page out', () => {
    expect(localeRoutes('it')).toEqual(
      expect.arrayContaining(['home', 'shop', 'progetto', 'squadra']),
    );
    expect(localeRoutes('fr')).toEqual(expect.arrayContaining(['projet', 'equipe', 'artistes']));
    expect(localeRoutes('en')).not.toContain('confirmation');
    expect(new Set(localeRoutes('en')).size).toBe(localeRoutes('en').length);
  });

  it('writes a sitemap with the home page and every locale', () => {
    const xml = sitemapXml('2026-10-13');
    expect(xml).toContain('<loc>https://asvelasca.it/</loc>');
    expect(xml).toContain('<loc>https://asvelasca.it/fr/equipe</loc>');
    expect(xml).toContain('<loc>https://asvelasca.it/cn/home</loc>');
    expect(xml).not.toContain('confirmation');
  });
});
