/* @flow */

import axios from 'axios';
import classnames from 'classnames';
import _get from 'lodash/get';
import React, { useState, useEffect, useRef } from 'react';
import type { Node } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useRouteMatch, useLocation } from 'react-router-dom';

import Errors from '../Errors/Errors';
import ShopItem from './ShopItem/ShopItem';

import { getApiGet, getServerUrl, getApiToken } from '../../shared/utils';
import { translate } from '../../shared/i18n';

import './Shop.scss';
import classNames from 'classnames';

type PropTypes = { page: string, name: string };

type SubProductTypes = {
  products: Object,
};

type BackgroundTypes = {
  path: string,
  title: string,
};

type ProductsTypes = {
  background: BackgroundTypes,
  products: SubProductTypes,
};

/**
 * Shop
 */
const Shop = ({ page, name }: PropTypes): Node => {
  const sourceAxios = useRef<Object>();
  const [data, setData] = useState<Object>({});
  const [error, setError] = useState<Object>(undefined);
  const [currentItem, setCurrentItem] = useState<Object>(null);
  const [prevItem, setPrevItem] = useState<Object>(null);
  const [nextItem, setNextItem] = useState<Object>(null);
  const { id } = useParams();
  const { url } = useRouteMatch();
  const location = useLocation();
  const currentBaseUrl = location.pathname.slice(0, location.pathname.lastIndexOf('/'));

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
              // add id
              if (id >= 0) {
                handleChangeItem(dataAxios.entries[0].products.products[id]);
              }
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

  useEffect(() => {
    if (id >= 0 && Object.keys(data).length > 0) {
      handleChangeItem(products[id - 1]);
    } else {
      setCurrentItem(null);
    }
  }, [id]);

  const { entries = {}, fields = {} } = data;

  const { background, products: { products } = { products: [] } }: ProductsTypes = _get(
    data,
    'entries[0]',
    [],
  );

  const currentURL = `https://www.asvelasca.it/${window.LOCALE_VELASCA}/${page}`;

  const handleChangeItem = (currentItem: Object) => {
    const index = products.indexOf(currentItem);
    const prevProduct = index === 0 ? products.length - 1 : index - 1;
    const nextProduct = index >= products.length - 1 ? 0 : index + 1;

    setCurrentItem(currentItem);
    setPrevItem(products[prevProduct]);
    setNextItem(products[nextProduct]);
  };

  return (
    <div className="Shop">
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
          <div className="Shop__imageContainer">
            <img
              src={`${getServerUrl()}${background.path}`}
              alt={background.title || 'As Velasca'}
              className="Shop__image"
            />
          </div>
          <div className="Shop__overlay" />
        </React.Fragment>
      )}
      {currentItem ? (
        <ShopItem
          item={currentItem}
          handleResetItem={() => setCurrentItem(null)}
          nextItem={nextItem}
          prevItem={prevItem}
          handleChangeItem={handleChangeItem}
          backUrl={currentBaseUrl}
        />
      ) : (
        <React.Fragment>
          {products && products.length > 0 && (
            <div className="Shop__products">
              {products.map((product, index) => {
                const {
                  image,
                  sizeOnSite,
                  price,
                  name,
                  season,
                  artist,
                  isSoldOut,
                  video,
                  hasVideo,
                } = product;
                return (
                  <div
                    className={classnames('Shop__product', { Shop__bigProduct: sizeOnSite === 2 })}
                    onClick={(e) => {
                      e.preventDefault();
                      // handleChangeItem(product);
                    }}
                    key={name}
                  >
                    <Link to={`${url}/${index + 1}`}>
                      {!hasVideo ? (
                        <img className="Shop__productImage" src={image} alt={name} />
                      ) : (
                        <video className="Shop__productImage" autoPlay muted loop>
                          <source src={video} type="video/mp4"></source>
                        </video>
                      )}
                      <div className="Shop__productHover">
                        <div className="Shop__productSeason">{season}</div>
                        <div className="Shop__productName">{name}</div>
                        {artist && <div className="Shop__productArtist">{artist}</div>}
                        {!isSoldOut ? (
                          <div className="Shop__productPrice">{`${price} €`}</div>
                        ) : (
                          <div className="Shop__productSoldOut">{translate('soldOut')}</div>
                        )}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </React.Fragment>
      )}
      {error && <Errors message={_get(error, 'message')} code={_get(error, 'response.status')} />}
    </div>
  );
};

export default Shop;
