/* @flow */

import React, { useState, useEffect, useRef } from 'react';
import type { Node } from 'react';
import axios from 'axios';
import _get from 'lodash/get';
import classnames from 'classnames';

import { getApiGet, getApiToken, getServerUrl, useInterval } from '../../shared/utils';

import './Main.scss';

type MainPropTypes = {
  className?: string,
};

const Main = ({ className }: MainPropTypes): Node => {
  const [maintenance, setMaintenance] = useState(false);
  const [slider, setSlider] = useState([]);
  const [current, setCurrent] = useState(0);

  const setNextSlide = (arrLength) => {
    if (!slider || current >= slider.length - 1) setCurrent(0);
    else {
      setCurrent(current + 1);
    }
  };

  useInterval(() => {
    setNextSlide();
  }, 5000);

  useEffect(() => {
    let isSubscribed = true;

    async function getSlider() {
      try {
        await axios
          .get(`${getApiGet()}home`, {
            params: { lang: window.LOCALE_VELASCA },
            headers: { 'Cockpit-Token': getApiToken() },
          })
          .then(({ data }) => {
            if (isSubscribed) {
              const sliderData = _get(data, 'entries[0].slider', []);
              setSlider(sliderData);
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
            <li
              className={classnames('Main__Slide', {
                Main__Slide_Show: index === current,
              })}
              key={title}
            >
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
