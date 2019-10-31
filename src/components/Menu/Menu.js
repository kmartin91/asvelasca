/* @flow */

import React, { useState } from 'react';
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
const Menu = (props: PropTypes) => {
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
      <a className="Menu__Logo" href={`/${window.LOCALE_VELASCA}`}>
        <img src={Logo} alt="AS Velasca" />
      </a>
      <MenuList links={menuTwo} handleOpenMobileMenu={() => {}} isAlternate withoutMore />

      <MobileMenu links={menuRest} isMobileOpen={isMobileOpen} />
    </div>
  );
};

export default Menu;
