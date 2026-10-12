import { isRouteErrorResponse, useRouteError } from 'react-router';
import { localePath, useLocale, useTranslate } from '../../shared/i18n';
import AppLink from '../AppLink/AppLink';
import Errors from './Errors';

/**
 * Route error boundary: CMS down, network loss, outdated chunk after a deploy…
 */
const RouteError = () => {
  const error = useRouteError();
  const locale = useLocale();
  const t = useTranslate();

  const status = isRouteErrorResponse(error) ? error.status : error?.status;
  if (import.meta.env.DEV) console.error(error);

  return (
    <Errors code={status ?? 'Error'} message={status === 404 ? t('notFound') : error?.message}>
      <button type="button" className="Button" onClick={() => window.location.reload()}>
        {t('retry')}
      </button>
      <AppLink className="Button Button_red" to={localePath(locale, 'home')}>
        {t('backHome')}
      </AppLink>
    </Errors>
  );
};

export default RouteError;
