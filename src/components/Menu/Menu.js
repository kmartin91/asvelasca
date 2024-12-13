/* @flow */

import React, { useState } from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { translate } from '../../shared/i18n';
import MenuList from './MenuList/MenuList';
import MobileMenu from './MobileMenu/MobileMenu';
import Logo from '../../shared/images/logo.png';

import './Menu.scss';

type PropTypes = {};

/**
 * Menu
 */
const Menu = (props: PropTypes): Node => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menu = translate('menu') || [];
  const mid = parseInt(menu.length / 2);
  const menuOne = menu && menu.slice(0, mid);
  const menuTwo = menu && menu.slice(mid);

  const menuRest = menu.filter(({ isPrimary }) => !isPrimary);

  return (
    <div className={classnames('Menu')}>
      <MenuList
        links={menuOne}
        handleOpenMobileMenu={() => setIsMobileOpen(!isMobileOpen)}
        isMobileOpen={isMobileOpen}
      />
      <Link className="Menu__Logo" to={`/${window.LOCALE_VELASCA}/home`}>
        <img src={Logo} alt="AS Velasca" />
      </Link>
      <MenuList links={menuTwo} handleOpenMobileMenu={() => {}} isAlternate withoutMore />
    </div>
  );
};

export default Menu;
