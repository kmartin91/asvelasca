import { useEffect } from 'react';
import { localePath, useLocale, useTranslate } from '../../shared/i18n';
import { setNoIndex } from '../../shared/seo';
import { useDocumentTitle } from '../../shared/utils';
import AppLink from '../AppLink/AppLink';
import Errors from './Errors';

const NotFound = ({ message }) => {
  const locale = useLocale();
  const t = useTranslate();
  useDocumentTitle('404');
  useEffect(() => {
    setNoIndex(true);
    return () => setNoIndex(false);
  }, []);

  return (
    <Errors code="404" message={message ?? t('notFound')}>
      <AppLink className="Button Button_red" to={localePath(locale, 'home')}>
        {t('backHome')}
      </AppLink>
    </Errors>
  );
};

export default NotFound;
