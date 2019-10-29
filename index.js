import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './src/components/Layout/Layout';
import Main from './src/components/Main/Main';

const base = '/:locale(fr|en|it|zh|fr)?';

ReactDOM.render(
  <Router>
    <Layout path={base} exact component={Main} />
  </Router>,
  document.getElementById('root'),
);
