/* @flow */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Node } from 'react';
import axios from 'axios';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';
import _get from 'lodash/get';
import { Base64 } from 'js-base64';

import { getTutoCampiToken, getCurrentYear } from '../../shared/utils';

import './Ladder.scss';

type PropTypes = {
  selectedYear: string,
};

/**
 * Ladder
 */
const Ladder = ({ selectedYear }: PropTypes): Node => {
  const sourceAxios = useRef<Object>();
  const [ladderData, setLadderData] = useState<Array<Object>>([]);
  const [error, setError] = useState<Object>(undefined);

  const page = 'https://www.tuttocampo.it/api/1.0/GetRanking.php';

  const getData = useCallback((isSubscribed) => {
    sourceAxios.current = axios.CancelToken.source();

    const formData = new FormData();
    formData.append('token', getTutoCampiToken());
    formData.append('year', selectedYear || getCurrentYear());
    try {
      axios
        .post(page, formData, { cancelToken: sourceAxios.current.token })
        .then(({ data: dataAxios }) => {
          if (isSubscribed) {
            const decodedData = JSON.parse(Base64.decode(dataAxios));
            setLadderData(decodedData);
          }
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

  const sortedLadderData = ladderData
    ? ladderData.sort((a, b) => {
        if (parseInt(_get(a, 'p'), 10) !== parseInt(_get(b, 'p'), 10)) {
          return parseInt(_get(b, 'p'), 10) - parseInt(_get(a, 'p'), 10);
        }

        return parseInt(_get(b, 'gd'), 10) - parseInt(_get(a, 'gd'), 10);
      })
    : [];

  return (
    <div className="Ladder">
      <div className="Ladder__header Ladder__row Ladder__stylised">
        <div className="Ladder__teamRank Ladder__item Ladder__item_borderLess">Pos</div>
        <div className="Ladder__teamName Ladder__item">Club</div>
        <div className="Ladder__win Ladder__item">W</div>
        <div className="Ladder__draw Ladder__item">D</div>
        <div className="Ladder__lose Ladder__item">L</div>

        <div className="Ladder__gs Ladder__item">Scored</div>
        <div className="Ladder__gt Ladder__item">Taken</div>
        <div className="Ladder__gd Ladder__item">Diff</div>
        <div className="Ladder__points Ladder__item">Points</div>
      </div>
      {sortedLadderData.map(
        (
          {
            it: teamId,
            t: teamName,
            p: points,
            m: playedMatchs,
            w: win,
            l: lose,
            d: draw,
            gs: goalScored,
            ga: goalTaken,
            gd: goalDifference,
          },
          index,
        ) => {
          return (
            <div
              className={classnames('Ladder__row', { Ladder__row_velasca: teamName === 'Velasca' })}
              key={teamId}
            >
              <div className="Ladder__teamRank Ladder__item Ladder__item_borderLess Ladder__stylised">
                {index + 1}
              </div>
              <div className="Ladder__teamName Ladder__stylised Ladder__item">{teamName}</div>
              <div className="Ladder__win Ladder__item">{win}</div>
              <div className="Ladder__draw Ladder__item">{draw}</div>
              <div className="Ladder__lose Ladder__item">{lose}</div>
              <div className="Ladder__gs Ladder__item">{goalScored}</div>
              <div className="Ladder__gt Ladder__item">{goalTaken}</div>
              <div className="Ladder__gd Ladder__item">{goalDifference}</div>
              <div className="Ladder__points Ladder__item Ladder__item_alt">{points}</div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default Ladder;
