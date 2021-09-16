/* @flow */

import React from 'react';
import type { Node } from 'react';
import LangSelector from '../LangSelector/LangSelector';
import Social from '../Social/Social';
import Menu from '../Menu/Menu';

import './Header.scss';

type PropTypes = {};

/**
 * Header
 */
const Header = (props: PropTypes): Node => {
  return (
    <div className="Header">
      <Menu />
      <LangSelector />
      <Social />
    </div>
  );
};

export default Header;
