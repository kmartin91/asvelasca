import { Outlet, ScrollRestoration, useNavigation } from 'react-router';
import { useTranslate } from '../../shared/i18n';
import { cx } from '../../shared/utils';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Layout.scss';

/**
 * Site chrome: header, page, footer.
 */
const Layout = ({ children }) => {
  const t = useTranslate();
  const navigation = useNavigation();

  return (
    <div className="Layout">
      <a className="Layout__skip" href="#main">
        {t('skip')}
      </a>
      <div
        className={cx('Layout__progress', navigation.state !== 'idle' && 'Layout__progress_active')}
        aria-hidden="true"
      />
      <Header />
      <main id="main" className="Layout__main" tabIndex={-1}>
        {children ?? <Outlet />}
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
