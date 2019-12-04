/* @flow */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import _get from 'lodash/get';

import { getApiGet, generateAxiosParams, getServerUrl } from '../../shared/utils';
import Errors from '../Errors/Errors';
import './Edito.scss';

type EditoProps = {
  page: string,
  name: string,
};

const Edito = ({ page, name }: EditoProps) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(undefined);

  useEffect(() => {
    let isSubscribed = true;
    async function getData() {
      try {
        await axios
          .get(`${getApiGet()}${page}`, {
            params: generateAxiosParams({ lang: window.LOCALE_VELASCA }),
          })
          .then(({ data: dataAxios }) => {
            if (isSubscribed) {
              setData(dataAxios);
            }
          });
      } catch (error) {
        console.log({ error });
        setError(error);
      }
    }

    getData();

    return () => {
      isSubscribed = false;
    };
  }, []);

  const { entries = {}, fields = {} } = data;

  const { background, content } = _get(data, 'entries[0]', []);

  return (
    <div className="Edito">
      <Helmet>
        <title>{`.:: A.S. VELASCA ::. ${name.toUpperCase()}`}</title>
      </Helmet>
      {background && (
        <React.Fragment>
          <div className="Edito__imageContainer">
            <img
              src={`${getServerUrl()}${background.path}`}
              alt={background.title}
              className="Edito__image"
            />
          </div>
          <div className="Edito__overlay" />
        </React.Fragment>
      )}
      {content && (
        <React.Fragment>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
            className="Edito__content"
          />
        </React.Fragment>
      )}
      {error && <Errors message={_get(error, 'message')} code={_get(error, 'response.status')} />}
    </div>
  );
};

export default Edito;
