/* @flow */

import React from 'react';
import type { Node } from 'react';
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
              <a className="MobileMenuAccordion__Link" href={getRouteWithLocale(route)}>
                {label}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MobileMenuAccordion;
