/* @flow */

import React from 'react';
import classnames from 'classnames';
import { translate } from '../../shared/i18n';
import MenuList from './MenuList/MenuList';
import Logo from '../../shared/images/logo.png';

import './Menu.scss';

type PropTypes = {};

/**
 * Menu
 */
const Menu = (props: PropTypes) => {
  const menu = translate('menu') || [];
  const mid = parseInt(menu.length / 2);
  const menuOne = menu && menu.slice(0, mid);
  const menuTwo = menu && menu.slice(mid);

  return (
    <div className={classnames('Menu')}>
      <MenuList links={menuOne} />
      <a href={`/${window.LOCALE_VELASCA}`}>
        <img src={Logo} alt="AS Velasca" className="Menu__Logo" />
      </a>
      <MenuList links={menuTwo} isAlternate />
    </div>
  );
};

export default Menu;
