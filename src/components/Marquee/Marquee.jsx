import { cx } from '../../shared/utils';

import './Marquee.scss';

/**
 * Endless tape of slogans (decorative, CSS-only loop).
 */
const Marquee = ({ items, isReversed, className }) => (
  <div className={cx('Marquee', isReversed && 'Marquee_reversed', className)} aria-hidden="true">
    <div className="Marquee__track">
      {[0, 1].map((copy) => (
        <div className="Marquee__group" key={copy}>
          {items.map((item) => (
            <span className="Marquee__item" key={item}>
              {item}
              <svg className="Marquee__star" viewBox="0 0 24 24">
                <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
              </svg>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
