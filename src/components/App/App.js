/* @flow */

import React from 'react';
import Header from '../Header/Header';

type PropTypes = {
  component: any,
  props: Object,
  translate: Function,
  match: Object,
  withoutFooter?: boolean,
};

const App = ({ component: Component, ...props }: PropTypes) => {
  const { match: { params } = {}, withoutFooter } = props;
  const { locale } = params;
  window.LOCALE_VELASCA = locale || 'en';

  return (
    <div className="Application">
      <Header />
      <Component {...props} />
      {!withoutFooter && <div className="Footer">Footer</div>}
    </div>
  );
};

export default App;
