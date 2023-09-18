/* @flow */

import React, { useEffect, useState, useRef, useCallback } from 'react';
import type { Node } from 'react';
import axios from 'axios';
import _get from 'lodash/get';
import { Helmet } from 'react-helmet';
import { Base64 } from 'js-base64';

import {
  getApiGet,
  getServerUrl,
  getApiToken,
  getCurrentYear,
  getTutoCampiToken,
} from '../../shared/utils';

import Toggle from '../Toggle/Toggle';
import Ladder from '../Ladder/Ladder';
import Results from '../Results/Results';

import './Season.scss';

type SeasonProps = {
  page: string,
  name: string,
};

const PAGE_TEAM_DETAILS = 'https://www.tuttocampo.it/api/1.0/GetTeamDetails.php';

/**
 * Season
 */
const Season = ({ page, name }: SeasonProps): Node => {
  const sourceAxios = useRef<Object>();
  const [data, setData] = useState({});
  const [error, setError] = useState(undefined);
  const [selectedYear, setSelectedYear] = useState(getCurrentYear());
  const [teamDetails, setTeamDetails] = useState({});

  const tabs = [
    { title: 'Ladder', content: <Ladder selectedYear={selectedYear} /> },
    { title: 'Results', content: <Results selectedYear={selectedYear} /> },
  ];

  const getClubInformation = useCallback((isSubscribed) => {
    sourceAxios.current = axios.CancelToken.source();

    const formData = new FormData();
    formData.append('token', getTutoCampiToken());
    formData.append('year', selectedYear || getCurrentYear());
    try {
      axios
        .post(PAGE_TEAM_DETAILS, formData, { cancelToken: sourceAxios.current.token })
        .then(({ data: dataAxios }) => {
          if (isSubscribed) {
            const decodedData = JSON.parse(Base64.decode(dataAxios));
            setTeamDetails(decodedData);
          }
        });
    } catch (error) {
      setError(error);
    }
  }, []);

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

    getClubInformation(isSubscribed);

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
          <select
            className="Season__year"
            defaultValue={getCurrentYear()}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2018-19">2018-19</option>
            <option value="2019-20">2019-20</option>
            <option value="2020-21">2020-21</option>
            <option value="2021-22">2021-22</option>
            <option value="2022-23">2022-23</option>
            <option value="2023-24">2023-24</option>
          </select>
          <Toggle className="Season__tabs" tabs={tabs} selectedYear={selectedYear} />
        </div>
      )}

      <div className="Season__links">
        <a href="https://tuttocampo.it" className="Season__link" target="_blank">
          <p className="Season__linkTitle">With courtesy of</p>
          <img
            src="https://www.tuttocampo.it/Web/Images/title.png"
            className="Season__imageTutto"
            alt="TuttoCampo"
          />
        </a>
      </div>
    </div>
  );
};

export default Season;
