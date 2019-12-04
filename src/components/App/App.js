/* @flow */

import React from 'react';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';
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
  withoutHeader?: boolean,
};

import './App.scss';

const App = ({ component: Component, ...props }: PropTypes) => {
  const { match: { params } = {}, withoutFooter, withoutHeader, noOverFlow } = props;
  const { locale } = params;
  window.LOCALE_VELASCA = locale || 'en';
  const menu = translate('menu') || [];

  return (
    <div className={classnames('App', { App_noOverFlow: noOverFlow })}>
      <Helmet>
        <title>.:: A.S. VELASCA ::.</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />

        <meta meta charset="UTF-8" />
        <meta name="Description" content="La terza squadra di Milano" />
        <meta
          name="Keywords"
          content="a.s. velasca, marco de girolamo, karim khideur, loris mandelli, wolfgang natlacen, clément tournus, milano, terza squadra di milano"
        />
        <meta property="og:title" content="A.S. Velasca" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.asvelasca.it" />
        <meta property="og:image" content="http://www.asvelasca.it/asvelasca-fb.jpg" />
        <meta property="og:description" content="WE ARE ALL BUT A FOOTBALL TEAM" />
        <meta property="og:site_name" content=".:: A.S. Velasca ::." />
        <link rel="shortcut icon" href="http://www.asvelasca.it/velascam.png" />
      </Helmet>
      {!withoutHeader && <Header />}
      <Component {...props} className="App__content" />
      {!withoutFooter && <div className="Footer">Footer</div>}
      {!withoutHeader && <MobileMenu links={menu} />}
    </div>
  );
};

export default App;
