import { useState } from 'react';
import { cmsImage, cmsSrcSet } from '../../../shared/cms';
import { useTranslate } from '../../../shared/i18n';
import { useDocumentTitle } from '../../../shared/utils';
import AppLink from '../../AppLink/AppLink';
import Arrow from '../../Arrow/Arrow';
import LazyVideo from '../../LazyVideo/LazyVideo';

import './ShopItem.scss';

const PAYPAL_URL = 'https://www.paypal.com/cgi-bin/webscr';

/**
 * Product page. The form posts to a PayPal hosted button: field names must not change
 * (on0/os0 option, on1 size, on2/os2 personalisation).
 */
const ShopItem = ({ item, backTo }) => {
  const t = useTranslate();
  const {
    image,
    video,
    hasVideo,
    name,
    season,
    artist,
    description,
    price,
    options = [],
    sizes = [],
    buttonId,
    enablePerso,
    hideShippingPrice,
    isSoldOut,
    isPreOrder,
    delivery,
    fdpPrice,
  } = item;

  const [optionKey, setOptionKey] = useState(options[0]?.key);
  const option = options.find(({ key }) => key === optionKey);
  const displayPrice = option?.price ?? price;
  useDocumentTitle(name);

  return (
    <div className="ShopItem">
      <AppLink className="ShopItem__back" to={backTo}>
        <Arrow className="ShopItem__backArrow" />
        {t('backToList')}
      </AppLink>

      <div className="ShopItem__layout">
        <div className="ShopItem__media">
          {hasVideo && video ? (
            <LazyVideo className="ShopItem__image" src={video} poster={cmsImage(image, 1200)} />
          ) : (
            <img
              className="ShopItem__image"
              src={cmsImage(image, 1200)}
              srcSet={cmsSrcSet(image, [600, 1200, 1800])}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt={name}
              fetchPriority="high"
            />
          )}
        </div>

        <div className="ShopItem__panel">
          <div className="ShopItem__tags">
            {season && <span className="ShopItem__tag">{season}</span>}
            {isPreOrder && !isSoldOut && (
              <span className="ShopItem__tag ShopItem__tag_red">{t('preOrder')}</span>
            )}
          </div>
          <h2 className="ShopItem__name">{name}</h2>
          {artist && <p className="ShopItem__artist">{artist}</p>}
          {!isSoldOut && <p className="ShopItem__price">{displayPrice} €</p>}
          {description && <p className="ShopItem__description">{description}</p>}

          {isSoldOut ? (
            <p className="ShopItem__soldOut">{t('soldOut')}</p>
          ) : (
            <form className="ShopItem__form" action={PAYPAL_URL} method="post">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value={buttonId} />

              {options.length > 0 && (
                <label className="ShopItem__field">
                  <span className="ShopItem__fieldLabel">{t('option')}</span>
                  <input type="hidden" name="on0" value="Options" />
                  <select
                    className="ShopItem__select"
                    name="os0"
                    value={optionKey}
                    onChange={(event) => setOptionKey(event.target.value)}
                  >
                    {options.map(({ key, value }) => (
                      <option key={key} value={key}>
                        {value}
                      </option>
                    ))}
                  </select>
                </label>
              )}

              {sizes.length > 0 && (
                <fieldset className="ShopItem__field ShopItem__sizes">
                  <legend className="ShopItem__fieldLabel">{t('size')}</legend>
                  <input type="hidden" name="on0" value="Options" />
                  {sizes.map((size, index) => (
                    <label key={size} className="ShopItem__size">
                      <input type="radio" name="on1" value={size} defaultChecked={index === 0} />
                      <span>{size}</span>
                    </label>
                  ))}
                </fieldset>
              )}

              {enablePerso && option?.isPersonalisable && (
                <label className="ShopItem__field">
                  <span className="ShopItem__fieldLabel">{t('personalize')}</span>
                  <input type="hidden" name="on2" value="(Personalisation)" />
                  <input
                    className="ShopItem__input"
                    type="text"
                    name="os2"
                    maxLength={60}
                    autoComplete="off"
                    placeholder={t('persoPlaceHolder')}
                  />
                </label>
              )}

              <button className="Button Button_red Button_block ShopItem__buy" type="submit">
                {t('buy')} · {displayPrice} €
                <Arrow className="Button__arrow" />
              </button>
            </form>
          )}

          <ul className="ShopItem__notes">
            <li>{t('payment')}</li>
            {!isSoldOut && !hideShippingPrice && (
              <li>
                {t('shipping')}: {fdpPrice ?? 9} €
              </li>
            )}
            <li>{t('worldwide')}</li>
            {delivery && <li>{delivery}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
