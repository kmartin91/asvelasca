/* @flow */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _get from 'lodash/get';

import { getApiGet, generateAxiosParams, getServerUrl } from '../../shared/utils';
import Errors from '../Errors/Errors';
import './Edito.scss';

type EditoProps = {
  page: string,
};

/*
const fakeitem = () => (
  <div className="Shop__Item">
    <img
      src="http://www.asvelasca.it/images/store/kithomepixbelgio.png"
      className="Shop__ItemImage"
    />
    <h3>MAGLIA CASA 2019 / 20</h3>
    <p className="Shop__ItemDescription">
      edizione limitata: <br />
      200 esemplari numerati <br />
      maglia disegnata da <strong>Francesca Belgiojoso</strong>
    </p>
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      className="Shop__Form"
      method="post"
      target="paypal"
    >
      <input name="cmd" type="hidden" value="_s-xclick" />
      <input name="hosted_button_id" type="hidden" value="2N5CD4LQX8N9A" />
      <input name="on0" type="hidden" value="Opzioni" />
      <input name="on1" type="hidden" value="Taglie disponibili" />
      <p>
        <strong>Opzioni</strong>
      </p>

      <select name="os0">
        <option value="maglia">maglia €44,00 EUR</option>
        <option value="maglia + carta">maglia + tessera €54,00 EUR</option>
      </select>
      <p>
        <strong>Taglie disponibili</strong>
      </p>
      <select name="os1">
        <option value="14S">14S</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
      <input name="currency_code" type="hidden" value="EUR" />
      <input
        alt="PayPal è il metodo rapido e sicuro per pagare e farsi pagare online."
        name="submit"
        src="http://www.asvelasca.it/images/btns/preorder-it.png"
        type="image"
      />
      <img
        src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif"
        alt=""
        width="1"
        height="1"
        border="0"
      />
    </form>
  </div>
);

const fake = () => (
  <div className="Shop">
    <h6 className="Shop__Season">STAGIONE 2019 / 20</h6>
    <div className="Shop__Items">
      {fakeitem()}
      {fakeitem()}
      {fakeitem()}
    </div>
  </div>
);
*/
const Edito = ({ page }: EditoProps) => {
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
