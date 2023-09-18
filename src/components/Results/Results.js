/* @flow */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Node } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import localeCN from 'dayjs/locale/zh-cn';
import localeIT from 'dayjs/locale/it';
import localeEN from 'dayjs/locale/en';
import localeFR from 'dayjs/locale/fr';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import _get from 'lodash/get';
import classnames from 'classnames';
import { Base64 } from 'js-base64';

import { getTutoCampiToken, getCurrentYear } from '../../shared/utils';

import './Results.scss';

type PropTypes = {
  selectedYear: string,
};

dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);
// dayjs.locale(window.LOCALE_VELASCA);

/**
 * Results
 */
const Results = ({ selectedYear }: PropTypes): Node => {
  const sourceAxios = useRef<Object>();
  const [resultData, setResultData] = useState<Array<Object>>([]);
  const [error, setError] = useState<Object>(undefined);

  const page = 'https://www.tuttocampo.it/api/1.0/GetResults.php';

  const getData = useCallback((isSubscribed: boolean) => {
    sourceAxios.current = axios.CancelToken.source();

    const formData = new FormData();
    formData.append('token', getTutoCampiToken());
    formData.append('all', '0');
    formData.append('year', selectedYear || getCurrentYear());
    try {
      axios
        .post(page, formData, { cancelToken: sourceAxios.current.token })
        .then(({ data: dataAxios }) => {
          const decodedData = JSON.parse(Base64.decode(dataAxios));
          setResultData(decodedData);
        });
    } catch (error) {
      setError(error);
    }
  });

  useEffect(() => {
    let isSubscribed = true;
    getData(isSubscribed);

    return () => {
      isSubscribed = false;
      if (sourceAxios.current) {
        sourceAxios.current.cancel();
      }
    };
  }, [selectedYear]);

  const groupedResultatData = resultData.reduce((acc, resultat) => {
    const date = dayjs(resultat.d, 'DD-MM-YY HH:mm');
    const monthYearKey = date.format('MM-YYYY');

    return {
      ...acc,
      [monthYearKey]: [...(acc[monthYearKey] || []), resultat],
    };
  }, {});

  const sortedData = Object.keys(groupedResultatData).sort((a, b) =>
    dayjs(a, 'MM-YYYY').diff(dayjs(b, 'MM-YYYY')),
  );

  console.log({
    resultData,
    groupedResultatData,
    sortedData,
    t: dayjs().locale(window.LOCALE_VELASCA).format('LL'),
  });

  return (
    <div className="Results">
      {groupedResultatData &&
        Object.keys(groupedResultatData).length >= 1 &&
        Object.keys(groupedResultatData).map((key) => {
          const matches = _get(groupedResultatData, key, []);
          console.log({ matches });

          return (
            <div key={key} className="Results__month">
              <div className="Results__month__title">
                {dayjs(key, 'MM-YYYY').locale(window.LOCALE_VELASCA).format('MMMM YYYY')}
              </div>
              <div className="Results__month__matches">
                {matches.map((match) => {
                  const {
                    ht: homeTeam,
                    at: awayTeam,
                    hg: homeGoal,
                    ag: awayGoal,
                    d: date,
                    iht,
                    iat,
                  } = match;
                  return (
                    <div key={`${homeTeam}-vs-${awayTeam}`} className="Results__row">
                      <div className="Results__row__date">
                        <div className="Results__row__date__container">
                          <span className="Results__row__date__day">
                            {dayjs(date, 'DD-MM-YY HH:mm')
                              .locale(window.LOCALE_VELASCA)
                              .format('DD MMM')}
                          </span>
                          <span className="Results__row__date__time">
                            {dayjs(date, 'DD-MM-YY HH:mm')
                              .locale(window.LOCALE_VELASCA)
                              .format('HH:mm')}
                          </span>
                        </div>
                      </div>
                      <div className="Results__row__result">
                        <div className="Results__row__team">
                          <span className="Results__row__teamName">{homeTeam}</span>
                          <span className="Results__row__teamName__abv">
                            {homeTeam.slice(0, 3)}
                          </span>
                          <img
                            src={`https://content-s3.tuttocampo.it/Teams/40/${iht}.png?v=1`}
                            alt={homeTeam}
                          />
                        </div>
                        <div className="Results__row__score">
                          <div
                            className={classnames('Results__scoreItem', {
                              Results__scoreItem_win: homeGoal > awayGoal,
                              Results__scoreItem_draw: !homeGoal || homeGoal === awayGoal,
                              Results__scoreItem_lose: homeGoal < awayGoal,
                            })}
                          >
                            {homeGoal || 'X'}
                          </div>
                          -
                          <div
                            className={classnames('Results__scoreItem', {
                              Results__scoreItem_win: homeGoal < awayGoal,
                              Results__scoreItem_draw: !awayGoal || homeGoal === awayGoal,
                              Results__scoreItem_lose: homeGoal > awayGoal,
                            })}
                          >
                            {awayGoal || 'X'}
                          </div>
                        </div>
                        <div className="Results__row__team Results__row__team_away">
                          <img
                            src={`https://content-s3.tuttocampo.it/Teams/40/${iat}.png?v=1`}
                            alt={awayTeam}
                          />
                          <span className="Results__row__teamName">{awayTeam}</span>
                          <span className="Results__row__teamName__abv">
                            {awayTeam.slice(0, 3)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Results;
