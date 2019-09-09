/* @flow */

import React from 'react';
import { Helmet } from 'react-helmet';

import './Main.common.scss';

const Main = () => (
  <div className="Main">
    <Helmet>
      <title>Coucou David Gribouille</title>
      <meta charSet="utf-8" />
    </Helmet>
    <div className="Main__title">Hello David!</div>
  </div>
);

export default Main;
