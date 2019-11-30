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
};

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
        type="submit"
        className="Shop__Button"
        value="Ordina"
      />
      <img
        src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif"
        alt=""
        width="1"
        height="1"
        border="0"
      />
    </form>
    <p className="Shop__Information">
      pagamento con carta di credito / Paypal spedizione e imballaggio: 9€
    </p>
  </div>
);

const fakeitem2 = () => (
  <div className="Shop__Item">
    <img
      src="http://www.asvelasca.it/images/store/kitawaypixbelgio.png"
      className="Shop__ItemImage"
    />
    <h3>MAGLIA TRASFERTA 2019 / 20</h3>
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
      <input name="hosted_button_id" type="hidden" value="AUXL2JZAL4JSJ" />
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
        type="submit"
        className="Shop__Button"
        value="Ordina"
      />
      <img
        src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif"
        alt=""
        width="1"
        height="1"
        border="0"
      />
    </form>
    <p className="Shop__Information">
      pagamento con carta di credito / Paypal spedizione e imballaggio: 9€
    </p>
  </div>
);

const fakeitem3 = () => (
  <div className="Shop__Item">
    <img src="http://www.asvelasca.it/images/shop/pillow.png" className="Shop__ItemImage" />
    <h3>HAIL* (* Applause / Pray)</h3>
    <p className="Shop__ItemDescription">
      Cuscinetto da stadio
      <br />
      di JayOne
      <br />
      <br />
      edizione limitata (100 copie)
    </p>
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      className="Shop__Form"
      method="post"
      target="paypal"
    >
      <input name="cmd" type="hidden" value="_s-xclick" />
      <input name="hosted_button_id" type="hidden" value="GK5MRDEMYBJAQ" />

      <input name="currency_code" type="hidden" value="EUR" />
      <input
        alt="PayPal è il metodo rapido e sicuro per pagare e farsi pagare online."
        name="submit"
        type="submit"
        className="Shop__Button"
        value="Ordina"
      />
      <img
        src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif"
        alt=""
        width="1"
        height="1"
        border="0"
      />
    </form>

    <p className="Shop__Information">
      pagamento con carta di credito / Paypal spedizione e imballaggio: 5€
    </p>
  </div>
);

const fakeitem4 = () => (
  <div className="Shop__Item">
    <img
      src="http://www.asvelasca.it/images/store/kithomepixtayou.png"
      className="Shop__ItemImage"
    />
    <h3>MAGLIA CASA 2018 / 19</h3>
    <p className="Shop__ItemDescription">
      edizione limitata: <br />
      200 esemplari numerati <br />
      maglia disegnata da <strong>Pascale Marthine Tayou</strong>
    </p>
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      className="Shop__Form"
      method="post"
      target="paypal"
    >
      <input name="cmd" type="hidden" value="_s-xclick" />
      <input name="hosted_button_id" type="hidden" value="27CYCHF9DCA7J" />
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
        type="submit"
        className="Shop__Button"
        value="Ordina"
      />
      <img
        src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif"
        alt=""
        width="1"
        height="1"
        border="0"
      />
    </form>
    <p className="Shop__Information">
      pagamento con carta di credito / Paypal spedizione e imballaggio: 9€
    </p>
  </div>
);

const fakeitem5 = () => (
  <div className="Shop__Item">
    <img
      src="http://www.asvelasca.it/images/store/kitawaypixtayou.png"
      className="Shop__ItemImage"
    />
    <h3>MAGLIA TRASFERTA 2019 / 20</h3>
    <p className="Shop__ItemDescription">
      edizione limitata: <br />
      200 esemplari numerati <br />
      maglia disegnata da <strong>Pascale Marthine Tayou</strong>
    </p>
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      className="Shop__Form"
      method="post"
      target="paypal"
    >
      <input name="cmd" type="hidden" value="_s-xclick" />
      <input name="hosted_button_id" type="hidden" value="TAMEH24BKV6AY" />
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
        type="submit"
        className="Shop__Button"
        value="Ordina"
      />
      <img
        src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif"
        alt=""
        width="1"
        height="1"
        border="0"
      />
    </form>

    <p className="Shop__Information">
      pagamento con carta di credito / Paypal spedizione e imballaggio: 9€
    </p>
  </div>
);

const fakeitem6 = () => (
  <div className="Shop__Item">
    <img
      src="http://www.asvelasca.it/images/shop/lagloireestunscandale.jpg"
      className="Shop__ItemImage"
    />
    <h3>LA GLOIRE EST UN SCANDALE (la gloria è uno scandalo)</h3>
    <p className="Shop__ItemDescription">
      di Thomas Wattebled
      <br />
      <br />
      edizione limitata (100 copie)
    </p>
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      className="Shop__Form"
      method="post"
      target="paypal"
    >
      <input name="cmd" type="hidden" value="_s-xclick" />
      <input name="hosted_button_id" type="hidden" value="ZBUNLZULLB7UE" />

      <input name="currency_code" type="hidden" value="EUR" />
      <input
        alt="PayPal è il metodo rapido e sicuro per pagare e farsi pagare online."
        name="submit"
        type="submit"
        className="Shop__Button"
        value="Ordina"
      />
      <img
        src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif"
        alt=""
        width="1"
        height="1"
        border="0"
      />
    </form>

    <p className="Shop__Information">
      pagamento con carta di credito / Paypal spedizione e imballaggio: 4€
    </p>
  </div>
);

const fakeitem7 = () => (
  <div className="Shop__Item">
    <img src="http://www.asvelasca.it/images/store/kitawaypix.png" className="Shop__ItemImage" />
    <h3>MAGLIA TRASFERTA 2017 / 18</h3>
    <p className="Shop__ItemDescription">
      edizione limitata: <br />
      150 esemplari numerati <br />
      maglia disegnata da <strong>Jiang Li</strong>
    </p>
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      className="Shop__Form"
      method="post"
      target="paypal"
    >
      <input name="cmd" type="hidden" value="_s-xclick" />
      <input name="hosted_button_id" type="hidden" value="FD8HVCY9HHWZL" />
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
        type="submit"
        className="Shop__Button"
        value="Ordina"
      />
      <img
        src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif"
        alt=""
        width="1"
        height="1"
        border="0"
      />
    </form>
    <p className="Shop__Information">
      pagamento con carta di credito / Paypal spedizione e imballaggio: 9€
    </p>
  </div>
);

const fake = () => (
  <div className="Shop">
    <h6 className="Shop__Season">STAGIONE 2019 / 20</h6>
    <div className="Shop__Items">
      {fakeitem()}
      {fakeitem2()}
      {fakeitem3()}
    </div>
    <h6 className="Shop__Season">STAGIONE 2018 / 19</h6>
    <div className="Shop__Items">
      {fakeitem4()}
      {fakeitem5()}
      {fakeitem6()}
    </div>
    <h6 className="Shop__Season">STAGIONE 2017 / 18</h6>
    <div className="Shop__Items">{fakeitem7()}</div>
    <div className="Shop__NoItems">
      Artista : Jiang Li.
      <br />
      Maglie rosse esaurite.
      <br />
      Per maglie autentiche con numero (vestite dai giocatori durante la stagione 2017 / 18) >>
      <a href="mailto:info@asvelasca.it">info@asvelasca.it</a>
      <br />
    </div>
    <h6 className="Shop__Season">STAGIONE 2016 / 17</h6>
    <div className="Shop__NoItems">
      Artista : Zevs
      <br />
      Maglie esaurite.
      <br />
      Per maglie autentiche con numero (vestite dai giocatori durante la stagione 2017 / 18) >>
      <a href="mailto:info@asvelasca.it">info@asvelasca.it</a>
      <br />
    </div>
    <h6 className="Shop__Season">STAGIONE 2015 / 16</h6>
    <div className="Shop__NoItems">
      Artista : Régis Sénèque.
      <br />
      Maglie esaurite.
      <br />
    </div>
  </div>
);

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
