/* @flow */

import React, { useState } from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { getRouteWithLocale } from '../../../shared/utils';

import MobileMenuAccordion from './MobileMenuAccordion/MobileMenuAccordion';

import './MobileMenu.scss';

type PropTypes = {
  links?: Array<Object>,
  withoutMore?: boolean,
};

/**
 * MobileMenu
 */
const MobileMenu = ({ links, withoutMore }: PropTypes): Node => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuRest = links && links.filter(({ isPrimary }) => !isPrimary);
  const menuShow = links && links.filter(({ isPrimary }) => isPrimary);

  return (
    <div className="MobileMenu">
      {menuShow &&
        menuShow.map(({ route, label }) => (
          <li className="MobileMenu__LinkContainer" key={label}>
            <Link className="MobileMenu__Link" to={getRouteWithLocale(route)}>
              {label}
            </Link>
          </li>
        ))}

      {!withoutMore && (
        <li className="MobileMenu__LinkContainerMore">
          <a className="MobileMenu__Link" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? 'X' : 'More'}
          </a>
        </li>
      )}
      <MobileMenuAccordion
        links={menuRest}
        closeMenu={() => setIsMobileOpen(!isMobileOpen)}
        isMobileOpen={isMobileOpen}
      />
    </div>
  );
};

export default MobileMenu;
