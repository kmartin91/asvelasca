/* @flow */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _get from 'lodash/get';
import classnames from 'classnames';

import { getApiGet, generateAxiosParams, getServerUrl } from '../../shared/utils';

import './Main.scss';

type MainPropTypes = {
  className?: string,
};

const Main = ({ className }: MainPropTypes) => {
  const [maintenance, setMaintenance] = useState(false);
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    async function getSlider() {
      try {
        await axios
          .get(`${getApiGet()}home`, {
            params: generateAxiosParams({ lang: window.LOCALE_VELASCA }),
          })
          .then(({ data }) => {
            if (isSubscribed) {
              setSlider(_get(data, 'entries[0].slider', []));
            }
          });
      } catch (error) {
        setMaintenance(true);
      }
    }

    getSlider();

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <div className={classnames('Main', className)}>
      {slider && slider.length > 0 && (
        <ul className="Main__Slider">
          {slider.map(({ path, meta: { title } }, index) => (
            <li className="Main__Slide" key={title}>
              <img src={`${getServerUrl()}${path}`} alt={title} className="Main__SliderImage" />
              <div className="Main__SliderTitle">{title}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Main;
