/* @flow */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Node } from 'react';
import axios from 'axios';
import _get from 'lodash/get';
import Social from '../Social/Social';
import LangSelector from '../LangSelector/LangSelector';

import { getApiGet, getApiToken, getServerUrl, useInterval } from '../../shared/utils';

import './Disclaimer.scss';

type PropTypes = {};

/**
 * Disclaimer
 */
const Disclaimer = (props: PropTypes): Node => {
  const [sponsors, setSponsors] = useState([]);
  const [maintenance, setMaintenance] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    async function getSponsor() {
      try {
        await axios
          .get(`${getApiGet()}sponsorimage`, {
            headers: { 'Cockpit-Token': getApiToken() },
          })
          .then(({ data }) => {
            if (isSubscribed) {
              const sliderData = _get(data, 'entries[0].Images', []);
              setSponsors(sliderData);
            }
          });
      } catch (error) {
        setMaintenance(true);
      }
    }

    getSponsor();

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <div className="Disclaimer">
      <Link to="/en/home">
        <img
          className="Disclaimer__Image"
          src="https://www.asvelasca.it/images/velascalogo.png"
          alt="AS Velasca"
          loading="lazy"
        />
      </Link>
      <Link to="/en/home" className="Disclaimer__Enter">
        ENTER WEBSITE
      </Link>
      <div className="Disclaimer__LangSelector">
        <Link className="Disclaimer__Link" to="/it/home">
          Italiano /
        </Link>
        <Link className="Disclaimer__Link" to="/en/home">
          English /
        </Link>
        <Link className="Disclaimer__Link" to="/fr/home">
          Français /
        </Link>
        <Link className="Disclaimer__Link" to="/cn/home">
          中文
        </Link>
      </div>
      <div className="Disclaimer__Sponsors">
        {sponsors &&
          sponsors.map(({ path, meta: { title } }, index) => (
            <Link to={title} key={title} className="Disclaimer__SponsorContainer">
              <img
                src={`${getServerUrl()}${path}`}
                alt={`${title}`}
                key={title}
                className="Disclaimer__Sponsor"
              />
            </Link>
          ))}
      </div>
      <div className="Disclaimer__Social">
        <Social />
      </div>
      <Link className="Disclaimer__Link Disclaimer__link_alt" to="/en/disclaimer">
        Disclaimer
      </Link>
    </div>
  );
};

export default Disclaimer;
