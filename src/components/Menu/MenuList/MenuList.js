/* @flow */

import React from 'react';
import classnames from 'classnames';

import './MenuList.scss';

type PropTypes = {
  links?: Array<Object>,
  isAlternate?: boolean,
};

/**
 * MenuList
 */
const MenuList = ({ links, isAlternate }: PropTypes) => (
  <ul className={classnames('MenuList', { MenuList_alternate: isAlternate })}>
    {links &&
      links.map(({ route, label }) => (
        <li key={label}>
          <a href={`${window.LOCALE_VELASCA || 'en'}/${route}`}>{label}</a>
        </li>
      ))}
  </ul>
);

export default MenuList;
