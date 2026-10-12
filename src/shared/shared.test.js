import { describe, expect, it } from 'vitest';
import { cmsAsset, cmsImage, cmsSrcSet } from './cms';
import { switchLocale } from './i18n';
import { currentSeason, splitKitTitle } from './utils';

describe('switchLocale', () => {
  it('translates the page route', () => {
    expect(switchLocale('/fr/equipe', 'fr', 'it')).toBe('/it/squadra');
    expect(switchLocale('/it/progetto', 'it', 'en')).toBe('/en/project');
  });

  it('keeps routes that are not in the menu', () => {
    expect(switchLocale('/en/shop/3', 'en', 'fr')).toBe('/fr/shop/3');
    expect(switchLocale('/en/allstar', 'en', 'it')).toBe('/it/allstar');
  });

  it('handles URLs without a locale prefix', () => {
    expect(switchLocale('/', 'en', 'cn')).toBe('/cn/home');
    expect(switchLocale('/squadra', 'en', 'it')).toBe('/it/squadra');
  });
});

describe('cms images', () => {
  it('resizes CMS photos through the image API', () => {
    const url = new URL(cmsImage('/storage/uploads/2024/01/12/home.jpg', 1280));
    expect(url.origin + url.pathname).toBe('https://cms.example.test/api/cockpit/image');
    expect(Object.fromEntries(url.searchParams)).toMatchObject({
      src: '/storage/uploads/2024/01/12/home.jpg',
      w: '1280',
      m: 'bestFit',
      o: '1',
    });
  });

  it('accepts absolute CMS URLs', () => {
    expect(cmsImage('https://cms.example.test/storage/uploads/a.png', 800)).toContain(
      'src=%2Fstorage%2Fuploads%2Fa.png',
    );
  });

  it('leaves other hosts and non-photos alone', () => {
    expect(cmsImage('https://elsewhere.example/a.jpg', 800)).toBe(
      'https://elsewhere.example/a.jpg',
    );
    expect(cmsImage('/storage/anim.gif', 800)).toBe('https://cms.example.test/storage/anim.gif');
    expect(cmsSrcSet('/storage/anim.gif', [400])).toBeUndefined();
  });

  it('builds https asset URLs', () => {
    expect(cmsAsset('http://www.asvelasca.it/v.mp4')).toBe('https://www.asvelasca.it/v.mp4');
    expect(cmsAsset('/velasca/storage/x.jpg')).toBe(
      'https://cms.example.test/velasca/storage/x.jpg',
    );
  });
});

describe('utils', () => {
  it('computes the current season (starts in July)', () => {
    expect(currentSeason(new Date(2026, 9, 12))).toEqual({
      start: 2026,
      label: '2026/27',
      count: 12,
    });
    expect(currentSeason(new Date(2026, 2, 1))).toEqual({
      start: 2025,
      label: '2025/26',
      count: 11,
    });
  });

  it('splits kit titles into artist and season', () => {
    expect(splitKitTitle('Joël Andrianomearisoa 2021 / 22')).toEqual({
      artist: 'Joël Andrianomearisoa',
      season: '2021/22',
    });
    expect(splitKitTitle('Untitled')).toEqual({ artist: 'Untitled', season: '' });
  });
});
