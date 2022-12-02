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
};

/**
 * MobileMenu
 */
const MobileMenuAccordion = ({ links, isMobileOpen }: PropTypes): Node => {
  return (
    <div className={classnames('MobileMenuAccordion', { 'is-open': isMobileOpen })}>
      <ul className="MobileMenuAccordion__Links">
        {links &&
          links.map(({ route, label, isPrimary }) => (
            <li className="MobileMenuAccordion__LinkContainer" key={label}>
              <Link className="MobileMenuAccordion__Link" to={getRouteWithLocale(route)}>
                {label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MobileMenuAccordion;
