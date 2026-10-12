import { cx } from '../../shared/utils';

import './Social.scss';

const NETWORKS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/asvelasca/',
    icon: 'M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 4.7a5.1 5.1 0 100 10.2 5.1 5.1 0 000-10.2zm0 8.4a3.3 3.3 0 110-6.6 3.3 3.3 0 010 6.6zm5.3-9.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ASVelasca',
    icon: 'M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0022 12z',
  },
  {
    name: 'X',
    href: 'https://x.com/asvelasca',
    icon: 'M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z',
  },
];

/**
 * Social networks (inline SVG: no extra requests).
 */
const Social = ({ className }) => (
  <ul className={cx('Social', className)}>
    {NETWORKS.map(({ name, href, icon }) => (
      <li key={name}>
        <a
          className="Social__link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`A.S. Velasca, ${name}`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={icon} />
          </svg>
        </a>
      </li>
    ))}
  </ul>
);

export default Social;
