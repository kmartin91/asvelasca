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

const replaceImage = (content) =>
  content && content.replace(/src="\/storage\//gim, `src="${getServerUrl()}/storage/`);

const replaceHttpToHttps = (content) => content && content.replace(/http:/gim, `https:`);

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

  const newContent = replaceHttpToHttps(replaceImage(content || ''));

  const currentURL = `https://www.asvelasca.it/${window.LOCALE_VELASCA}/${page}`;

  return (
    <div className="Edito">
      <Helmet>
        <title>{`.:: A.S. VELASCA ::. ${name.toUpperCase()}`}</title>
        <meta name="Description" content="La terza squadra di Milano" />
        <meta
          name="Keywords"
          content="a.s. velasca, marco de girolamo, karim khideur, loris mandelli, wolfgang natlacen, clément tournus, milano, terza squadra di milano"
        />
        <meta property="og:title" content="A.S. Velasca" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentURL} />
        <meta property="og:image" content="https://www.asvelasca.it/asvelasca-fb.jpg" />
        <meta property="og:description" content="WE ARE ALL BUT A FOOTBALL TEAM" />
        <meta property="og:site_name" content=".:: A.S. Velasca ::." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentURL} />
        <meta property="twitter:title" content=".:: A.S. VELASCA ::." />
        <meta property="twitter:description" content="WE ARE ALL BUT A FOOTBALL TEAM" />
        <meta property="twitter:image" content="https://www.asvelasca.it/asvelasca-fb.jpg" />
        <link rel="shortcut icon" href="https://www.asvelasca.it/velascam.png" />
      </Helmet>
      {background && (
        <React.Fragment>
          <div className="Edito__imageContainer">
            <img
              src={`${getServerUrl()}${background.path}`}
              alt={background.title || 'As Velasca'}
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
              __html: newContent,
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
