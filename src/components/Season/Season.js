/* @flow */

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import _get from 'lodash/get';
import { Helmet } from 'react-helmet';

import { getApiGet, getServerUrl, getApiToken } from '../../shared/utils';

import Toggle from '../Toggle/Toggle';
import Ladder from '../Ladder/Ladder';
import Results from '../Results/Results';

import './Season.scss';

type SeasonProps = {
  page: string,
  name: string,
};

/**
 * Season
 */
const Season = ({ page, name }: SeasonProps) => {
  const sourceAxios = useRef<Object>();
  const [data, setData] = useState({});
  const [error, setError] = useState(undefined);

  const tabs = [
    { title: 'Ladder', content: <Ladder /> },
    { title: 'Results', content: <Results /> },
  ];

  useEffect(() => {
    let isSubscribed = true;
    sourceAxios.current = axios.CancelToken.source();

    async function getData() {
      try {
        await axios
          .get(`${getApiGet()}${page}`, {
            params: { lang: window.LOCALE_VELASCA },
            headers: { 'Cockpit-Token': getApiToken() },
          })
          .then(({ data: dataAxios }) => {
            if (isSubscribed) {
              setData(dataAxios);
            }
          });
      } catch (error) {
        setError(error);
      }
    }

    getData();

    return () => {
      isSubscribed = false;
      if (sourceAxios.current) {
        sourceAxios.current.cancel();
      }
    };
  }, []);

  const { entries = {}, fields = {} } = data;

  const { background, content } = _get(data, 'entries[0]', []);

  return (
    <div className="Season">
      <Helmet>
        <title>{`.:: A.S. VELASCA ::. ${name.toUpperCase()}`}</title>
      </Helmet>
      {background && (
        <React.Fragment>
          <div className="Season__imageContainer">
            <img
              src={`${getServerUrl()}${background.path}`}
              alt={background.title || 'As Velasca'}
              className="Season__image"
            />
          </div>
          <div className="Season__overlay" />
        </React.Fragment>
      )}
      {tabs && tabs.length && (
        <div className="Season__content">
          <Toggle className="Season__tabs" tabs={tabs} />
        </div>
      )}
    </div>
  );
};

export default Season;
