import { cx } from '../../shared/utils';

import './Errors.scss';

/**
 * "Offside!" error screen, with the linesman's flag up.
 */
const Errors = ({ code, message, children, className }) => (
  <section className={cx('Errors', className)}>
    <svg className="Errors__flag" viewBox="0 0 120 160" aria-hidden="true">
      <path className="Errors__pole" d="M20 10v150" />
      <g className="Errors__cloth">
        <path d="M22 12h80v56H22z" />
        <path
          className="Errors__check"
          d="M22 12h20v14H22zM62 12h20v14H62zM42 26h20v14H42zM82 26h20v14H82zM22 40h20v14H22zM62 40h20v14H62zM42 54h20v14H42zM82 54h20v14H82z"
        />
      </g>
    </svg>
    {code && <p className="Errors__code">{code}</p>}
    <h1 className="Errors__title" data-text="Offside">
      Offside
    </h1>
    {message && <p className="Errors__message">{message}</p>}
    {children && <div className="Errors__actions">{children}</div>}
  </section>
);

export default Errors;
