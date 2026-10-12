import { cx } from '../../shared/utils';

const Arrow = ({ className }) => (
  <svg
    className={cx('Arrow', className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export default Arrow;
