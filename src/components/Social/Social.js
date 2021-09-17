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

      <div className="Social__Item">
        <a
          className="Social__link"
          target="_blank"
          rel="noopener"
          href="https://www.pinterest.fr/asvelasca2015/calcio-e-arte/?sender=595390150645690141&invite_code=6ac8337675e04e89ae0d5c2eab25bc92"
        >
          <img src="https://www.asvelasca.it/images/btns/pinterest.png" alt="Velasca Pinterest" />
        </a>
      </div>
    </div>
  );
};

export default Social;
