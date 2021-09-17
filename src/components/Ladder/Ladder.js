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

type PropTypes = {};

/**
 * Ladder
 */
const Ladder = (props: PropTypes): Node => {
  const sourceAxios = useRef<Object>();
  const lastSortKey = useRef<string>('');
  const [orderDesc, setOrderDesc] = useState<boolean>(false);
  const [ladderData, setLadderData] = useState<Array<Object>>([]);
  const [sortKey, setSortKey] = useState<string>('p');
  const [error, setError] = useState<Object>(undefined);

  const page = 'https://www.tuttocampo.it/api/1.0/GetRanking.php';

  const handleSort = (key: string) => () => {
    if (lastSortKey.current === key) {
      setOrderDesc(!orderDesc);
    } else {
      setSortKey(key);
      setOrderDesc(true);
    }

    lastSortKey.current = key;
  };

  const getData = useCallback((isSubscribed) => {
    sourceAxios.current = axios.CancelToken.source();

    const formData = new FormData();
    formData.append('token', getTutoCampiToken());
    formData.append('year', getCurrentYear());
    try {
      axios
        .post(page, formData, { cancelToken: sourceAxios.current.token })
        .then(({ data: dataAxios }) => {
          if (isSubscribed) {
            setLadderData(dataAxios);
          }
        });
    } catch (error) {
      console.log({ error });
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
  }, []);

  const sortedLadderData = ladderData
    ? ladderData.sort((a, b) => {
        if (
          parseInt(_get(a, `${sortKey}`, _get(a, 'p')), 10) <=
          parseInt(_get(b, `${sortKey}`, _get(b, 'p')), 10)
        ) {
          return orderDesc ? -1 : 1;
        }
        return orderDesc ? 1 : -1;
      })
    : [];

  return (
    <div className="Ladder">
      <div className="Ladder__header Ladder__row Ladder__stylised">
        <div className="Ladder__teamRank Ladder__item Ladder__item_borderLess">#</div>
        <div className="Ladder__teamName Ladder__item">Club</div>
        <div className="Ladder__win Ladder__item" onClick={handleSort('w')}>
          W
        </div>
        <div className="Ladder__draw Ladder__item" onClick={handleSort('d')}>
          D
        </div>
        <div className="Ladder__lose Ladder__item" onClick={handleSort('l')}>
          L
        </div>
        <div className="Ladder__points Ladder__item" onClick={handleSort('p')}>
          Points
        </div>
        <div className="Ladder__gs Ladder__item" onClick={handleSort('gs')}>
          Scored
        </div>
        <div className="Ladder__gt Ladder__item" onClick={handleSort('gt')}>
          Taken
        </div>
        <div className="Ladder__gd Ladder__item" onClick={handleSort('gd')}>
          Diff
        </div>
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
              <div className="Ladder__points Ladder__item Ladder__item_alt">{points}</div>
              <div className="Ladder__gs Ladder__item">{goalScored}</div>
              <div className="Ladder__gt Ladder__item">{goalTaken}</div>
              <div className="Ladder__gd Ladder__item">{goalDifference}</div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default Ladder;
