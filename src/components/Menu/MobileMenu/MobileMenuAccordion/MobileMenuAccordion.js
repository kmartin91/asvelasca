/* @flow */

import React from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { getRouteWithLocale } from '../../../../shared/utils';

import './MobileMenuAccordion.scss';

type PropTypes = {
  links?: Array<Object>,
  isMobileOpen?: boolean,
  closeMenu: Function,
};

/**
 * MobileMenu
 */
const MobileMenuAccordion = ({ links, isMobileOpen, closeMenu }: PropTypes): Node => {
  return (
    <div className={classnames('MobileMenuAccordion', { 'is-open': isMobileOpen })}>
      <ul className="MobileMenuAccordion__Links">
        {links &&
          links.map(({ route, label, isPrimary }) => (
            <li className="MobileMenuAccordion__LinkContainer" key={label}>
              <Link
                className="MobileMenuAccordion__Link"
                onClick={closeMenu}
                to={getRouteWithLocale(route)}
              >
                {label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MobileMenuAccordion;
