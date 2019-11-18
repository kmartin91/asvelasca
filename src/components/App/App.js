/* @flow */

import React from 'react';
import Header from '../Header/Header';
import classnames from 'classnames';

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

  return (
    <div className={classnames('App', { App_noOverFlow: noOverFlow })}>
      <Header />
      <Component {...props} className="App__content" />
      {!withoutFooter && <div className="Footer">Footer</div>}
    </div>
  );
};

export default App;
