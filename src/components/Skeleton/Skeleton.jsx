import { cx } from '../../shared/utils';

import './Skeleton.scss';

/**
 * Shimmering placeholder while CMS content loads.
 */
const Skeleton = ({ variant = 'text' }) => (
  <div className={cx('Skeleton', `Skeleton_${variant}`)} aria-busy="true" aria-live="polite">
    {Array.from({ length: variant === 'grid' ? 6 : 7 }, (_, index) => (
      <span key={index} className="Skeleton__item" style={{ '--i': index }} />
    ))}
  </div>
);

export default Skeleton;
