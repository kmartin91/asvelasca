/* @flow */

import React from 'react';
import classnames from 'classnames';
import Header from '../Header/Header';
import MobileMenu from '../Menu/MobileMenu/MobileMenu';
import { translate } from '../../shared/i18n';

type PropTypes = {
  component: any,
  props: Object,
  translate: Function,
  match: Object,
  withoutFooter?: boolean,
  noOverFlow?: boolean,
};

import './App.scss';

const App = ({ component: Component, ...props }: PropTypes) => {
  const { match: { params } = {}, withoutFooter, noOverFlow } = props;
  const { locale } = params;
  window.LOCALE_VELASCA = locale || 'en';
  const menu = translate('menu') || [];

  return (
    <div className={classnames('App', { App_noOverFlow: noOverFlow })}>
      <Header />
      <Component {...props} className="App__content" />
      {!withoutFooter && <div className="Footer">Footer</div>}
      <MobileMenu links={menu} />
    </div>
  );
};

export default App;
