import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

export const cx = (...names) => names.filter(Boolean).join(' ');

export const pad = (value, length = 2) => String(value).padStart(length, '0');

export const FOUNDED = 2015;

// Seasons start in July: October 2026 is season 2026/27, the club's 12th.
export function currentSeason(date = new Date()) {
  const start = date.getMonth() >= 6 ? date.getFullYear() : date.getFullYear() - 1;
  return { start, label: `${start}/${pad((start + 1) % 100)}`, count: start - FOUNDED + 1 };
}

// "Joël Andrianomearisoa 2021 / 22" -> { artist: 'Joël Andrianomearisoa', season: '2021/22' }
export function splitKitTitle(title = '') {
  const match = title.match(/^(.*?)\s*(\d{4})\s*\/\s*(\d{2})\s*$/);
  if (!match) return { artist: title, season: '' };
  return { artist: match[1], season: `${match[2]}/${match[3]}` };
}

// true once the element has been seen: used to start CSS animations at the right moment.
export function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    if (isInView || !ref.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isInView, threshold]);

  return [ref, isInView];
}

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

export const usePrefersReducedMotion = () =>
  useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia?.(REDUCED_MOTION);
      query?.addEventListener('change', onChange);
      return () => query?.removeEventListener('change', onChange);
    },
    () => Boolean(window.matchMedia?.(REDUCED_MOTION).matches),
  );

// `undefined` leaves the title to a child component (e.g. the product page inside the shop).
export function useDocumentTitle(title) {
  useEffect(() => {
    if (title === undefined) return;
    // Menu labels are lowercase (the CSS sets them in capitals): capitalise for the tab.
    const label = title && title.charAt(0).toLocaleUpperCase() + title.slice(1);
    document.title = label
      ? `${label} · A.S. Velasca`
      : 'A.S. Velasca · La terza squadra di Milano';
  }, [title]);
}
