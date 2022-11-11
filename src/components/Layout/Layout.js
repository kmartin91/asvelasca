/* @flow */

import React from 'react';
import type { Node } from 'react';
import { Route } from 'react-router-dom';
import App from '../App/App';

type PropTypes = {
  component: any,
  rest: any,
};

/**
 * Layout
 */
const Layout = ({ component: Component, ...rest }: PropTypes): Node =>
  !console.log({ rest }) && (
    <Route
      {...rest}
      render={(matchProps) => <App component={Component} {...matchProps} {...rest} />}
    />
  );

export default Layout;
