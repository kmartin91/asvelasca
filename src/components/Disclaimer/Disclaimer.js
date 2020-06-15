/* @flow */

import React, { useState, useEffect } from 'react';
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
const Disclaimer = (props: PropTypes) => {
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
      <a href="/en/home">
        <img
          className="Disclaimer__Image"
          src="https://www.asvelasca.it/images/velascalogo.png"
          alt="AS Velasca"
        />
      </a>
      <a href="/en/home" className="Disclaimer__Enter">
        ENTER WEBSITE
      </a>
      <div className="Disclaimer__LangSelector">
        <a className="Disclaimer__Lang" href="/it/home">
          Italiano /
        </a>
        <a className="Disclaimer__Lang" href="/en/home">
          English /
        </a>
        <a className="Disclaimer__Lang" href="/fr/home">
          Français /
        </a>
        <a className="Disclaimer__Lang" href="/cn/home">
          中文
        </a>
      </div>
      <div className="Disclaimer__Sponsors">
        {sponsors &&
          sponsors.map(({ path, meta: { title } }, index) => (
            <a href={title} key={title} className="Disclaimer__SponsorContainer">
              <img
                src={`${getServerUrl()}${path}`}
                alt={`${title}`}
                key={title}
                className="Disclaimer__Sponsor"
              />
            </a>
          ))}
      </div>
      <div className="Disclaimer__Social">
        <Social />
      </div>
    </div>
  );
};

export default Disclaimer;
