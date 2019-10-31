/* @flow */

import React from 'react';
import classnames from 'classnames';

import './MobileMenu.scss';

type PropTypes = {
  links?: Array<Object>,
  isMobileOpen?: boolean,
};

/**
 * MobileMenu
 */
const MobileMenu = ({ links, isMobileOpen }: PropTypes) => {
  return (
    <div className={classnames('MobileMenu', { 'is-open': isMobileOpen })}>
      <ul className="MobileMenu__Links">
        {links &&
          links.map(({ route, label, isPrimary }) => (
            <li className="MobileMenu__LinkContainer" key={label}>
              <a className="MobileMenu__Link" href={`${window.LOCALE_VELASCA || 'en'}/${route}`}>
                {label}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
