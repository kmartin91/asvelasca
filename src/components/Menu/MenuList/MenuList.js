/* @flow */

import React, { useState } from 'react';
import type { Node } from 'react';
import classnames from 'classnames';
import { getRouteWithLocale } from '../../../shared/utils';

import './MenuList.scss';

type PropTypes = {
  links?: Array<Object>,
  isAlternate?: boolean,
  withoutMore?: boolean,
  handleOpenMobileMenu: Function,
  isMobileOpen?: boolean,
};

/**
 * MenuList
 */
const MenuList = ({
  links,
  isAlternate,
  withoutMore,
  handleOpenMobileMenu,
  isMobileOpen,
  ...rest
}: PropTypes): Node => (
  <ul
    className={classnames('MenuList', {
      MenuList_alternate: isAlternate,
    })}
  >
    {links &&
      links.map(({ route, label, isPrimary }) => (
        <li
          className={classnames('MenuList__LinkContainer', {
            MenuList__LinkContainerPrimary: isPrimary,
          })}
          key={label}
        >
          <a
            className={classnames('MenuList__Link', { MenuList__PrimaryLink: isPrimary })}
            href={getRouteWithLocale(route)}
          >
            {label}
          </a>
        </li>
      ))}
    {!withoutMore && (
      <li className="MenuList__LinkContainerMore MenuList__LinkContainerPrimary">
        <a
          className={classnames('MenuList__Link', 'MenuList__PrimaryLink')}
          onClick={handleOpenMobileMenu}
        >
          {isMobileOpen ? 'X' : 'More'}
        </a>
      </li>
    )}
  </ul>
);

export default MenuList;
