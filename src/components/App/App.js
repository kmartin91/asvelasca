/* @flow */

import React from 'react';
import type { Node } from 'react';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';
import Header from '../Header/Header';
import MobileMenu from '../Menu/MobileMenu/MobileMenu';
import { translate } from '../../shared/i18n';

type MatchTypes = {
  params: {
    locale: string,
  },
};

type PropTypes = {
  component: any,
  translate: Function,
  match: MatchTypes,
  withoutFooter?: boolean,
  noOverFlow?: boolean,
  withoutHeader?: boolean,
};

import './App.scss';

const App = ({ component: Component, ...props }: PropTypes): Node => {
  const { match, withoutFooter, withoutHeader, noOverFlow } = props;
  const { params }: MatchTypes = match;
  const { locale } = params;
  window.LOCALE_VELASCA = locale || 'en';
  const menu = translate('menu') || [];

  const currentURL = `https://www.asvelasca.it/${window.LOCALE_VELASCA}`;

  return (
    <div className={classnames('App', { App_noOverFlow: noOverFlow })}>
      <Helmet>
        <html lang={window.LOCALE_VELASCA} />
        <title>.:: A.S. VELASCA ::.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta meta charset="UTF-8" />
        <meta name="Description" content="La terza squadra di Milano" />
        <meta
          name="Keywords"
          content="a.s. velasca, marco de girolamo, karim khideur, loris mandelli, wolfgang natlacen, clément tournus, milano, terza squadra di milano"
        />
        <meta property="og:title" content="A.S. Velasca" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentURL} />
        <meta property="og:image" content="https://www.asvelasca.it/asvelasca-fb.jpg" />
        <meta property="og:description" content="WE ARE ALL BUT A FOOTBALL TEAM" />
        <meta property="og:site_name" content=".:: A.S. Velasca ::." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentURL} />
        <meta property="twitter:title" content=".:: A.S. VELASCA ::." />
        <meta property="twitter:description" content="WE ARE ALL BUT A FOOTBALL TEAM" />
        <meta property="twitter:image" content="https://www.asvelasca.it/asvelasca-fb.jpg" />
        <link rel="shortcut icon" href="https://www.asvelasca.it/velascam.png" />
      </Helmet>
      {!withoutHeader && <Header />}
      <Component {...props} className="App__content" />
      {!withoutFooter && <div className="App__Footer" />}
      {!withoutHeader && <MobileMenu links={menu} />}
    </div>
  );
};

export default App;
