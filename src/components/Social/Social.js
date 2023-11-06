/* @flow */

import React from 'react';
import type { Node } from 'react';

import './Social.scss';

type PropTypes = {};

/**
 * Social
 */
const Social = (props: PropTypes): Node => {
  return (
    <div className="Social">
      <div className="Social__Item">
        <a
          className="Social__link"
          rel="noopener"
          href="https://instagram.com/asvelasca/"
          target="_blank"
        >
          <img src="https://www.asvelasca.it/images/btns/instagram.png" alt="Velasca Instragam" />
        </a>
      </div>

      <div className="Social__Item">
        <a
          className="Social__link"
          rel="noopener"
          href="https://www.facebook.com/ASVelasca"
          target="_blank"
        >
          <img src="https://www.asvelasca.it/images/btns/facebook.png" alt="Velasca Facebook" />
        </a>
      </div>

      <div className="Social__Item">
        <a
          className="Social__link"
          rel="noopener"
          href="https://twitter.com/asvelasca"
          target="_blank"
        >
          <img src="https://www.asvelasca.it/images/btns/twitter.png" alt="Velasca Twitter" />
        </a>
      </div>
    </div>
  );
};

export default Social;
