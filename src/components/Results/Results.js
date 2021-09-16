/* @flow */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Node } from 'react';
import axios from 'axios';
import _get from 'lodash/get';
import classnames from 'classnames';
import { Base64 } from 'js-base64';

import { getTutoCampiToken, getCurrentYear } from '../../shared/utils';

import './Results.scss';

type PropTypes = {};

/**
 * Results
 */
const Results = (props: PropTypes): Node => {
  const sourceAxios = useRef<Object>();
  const [resultData, setResultData] = useState<Array<Object>>([]);
  const [error, setError] = useState<Object>(undefined);
  const [matchId, setMatchId] = useState<string>('-1');
  const [maxMatchId, setMaxMatchId] = useState<string>('100');

  const page = 'https://www.tuttocampo.it/api/1.0/GetResults.php';

  const getData = useCallback((isSubscribed: boolean, matchIdParams: string) => {
    sourceAxios.current = axios.CancelToken.source();

    const formData = new FormData();
    formData.append('token', getTutoCampiToken());
    formData.append('all', 'true');
    formData.append('match_day', matchIdParams);
    formData.append('year', getCurrentYear());
    try {
      axios
        .post(page, formData, { cancelToken: sourceAxios.current.token })
        .then(({ data: dataAxios }) => {
          const decodedData = JSON.parse(Base64.decode(dataAxios));
          setResultData(decodedData);
          if (matchId === '-1') setMaxMatchId(_get(decodedData[0], 'im', '').split('.')[0]);
          setMatchId(_get(decodedData[0], 'im', '').split('.')[0]);
        });
    } catch (error) {
      console.log({ error });
      setError(error);
    }
  });

  const prevMatch = () => {
    const prevMatchId = (parseInt(matchId, 10) - 1).toString();
    getData(true, prevMatchId);
  };

  const nextMatch = () => {
    const prevMatchId = (parseInt(matchId, 10) + 1).toString();
    getData(true, prevMatchId);
  };

  useEffect(() => {
    let isSubscribed = true;
    getData(isSubscribed, matchId.toString());

    return () => {
      isSubscribed = false;
      if (sourceAxios.current) {
        sourceAxios.current.cancel();
      }
    };
  }, []);

  return (
    <div className="Results">
      <div className="Results__header">
        {parseInt(matchId, 10) >= 1 && (
          <a className="Results__link" onClick={prevMatch} disabled={matchId === 1}>
            Previous Matches
          </a>
        )}
        <div className="Results__matchDay">Match {matchId}</div>
        {parseInt(matchId, 10) < parseInt(maxMatchId, 10) && (
          <a className="Results__link" onClick={nextMatch}>
            Next Matches
          </a>
        )}
      </div>
      {resultData &&
        resultData.length >= 1 &&
        resultData.map(({ ht: homeTeam, at: awayTeam, hg: homeGoal, ag: awayGoal }) => (
          <div key={`${homeTeam}-vs-${awayTeam}`} className="Results__row">
            <div className="Results__homeTeam">{homeTeam}</div>
            <div className="Results__score">
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

            <div className="Results__awayTeam">{awayTeam}</div>
          </div>
        ))}
    </div>
  );
};

export default Results;
