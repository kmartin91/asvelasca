import { useMemo } from 'react';
import { useNavigate } from 'react-router';
import { sanitize } from '../../shared/sanitize';
import { cx } from '../../shared/utils';

import './RichContent.scss';

const SITE_HOSTS = ['www.asvelasca.it', 'asvelasca.it', window.location.host];
const APP_PATH = /^\/(it|en|fr|cn)(\/|$)/;

/**
 * CMS HTML, sanitized. Links to the site itself navigate without a full reload.
 */
const RichContent = ({ html, className }) => {
  const navigate = useNavigate();
  const content = useMemo(() => sanitize(html), [html]);

  const handleClick = (event) => {
    const link = event.target.closest('a[href]');
    if (!link || link.target || event.defaultPrevented || event.metaKey || event.ctrlKey) return;

    const url = new URL(link.href, window.location.href);
    if (SITE_HOSTS.includes(url.host) && APP_PATH.test(url.pathname)) {
      event.preventDefault();
      navigate(`${url.pathname}${url.search}${url.hash}`, { viewTransition: true });
    }
  };

  // Delegated listener: only intercepts clicks on links (already keyboard-accessible).
  return (
    <div
      className={cx('RichContent', className)}
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichContent;
