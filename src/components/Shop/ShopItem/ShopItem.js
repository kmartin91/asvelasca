/* @flow */

import React, { useState } from 'react';
import type { Node } from 'react';
import Select from 'react-select';
import { translate } from '../../../shared/i18n';

import './ShopItem.scss';

type ItemTypes = {
  image: string,
  title: string,
  price: string,
  name: string,
  season: string,
  description: string,
  options?: Array<OptionsTypes>,
  sizes?: Array<string>,
  buttonId: string,
  enablePerso?: Boolean,
  hideShippingPrice?: Boolean,
  isSoldOut?: Boolean,
  delivery?: string,
  fdpPrice?: Number,
};

type PropTypes = {
  item: ItemTypes,
  prevItem: ItemTypes,
  nextItem: ItemTypes,
  handleChangeItem: Function,
  handleResetItem: Function,
};

type OptionsTypes = {
  key?: string,
  value?: string,
  label?: string,
  isPersonalisable?: boolean,
  price?: string,
};

/**
 * ShopItem
 */
const ShopItem = ({
  item,
  handleResetItem,
  handleChangeItem,
  prevItem,
  nextItem,
}: PropTypes): Node => {
  const {
    image,
    price,
    name,
    season,
    description,
    options,
    sizes,
    buttonId,
    enablePerso,
    hideShippingPrice,
    isSoldOut,
    delivery,
    fdpPrice,
  } = item;
  const [displayPrice, setDisplayPrice] = useState<string>('');
  const [isPersonalisable, setIsPersonalisable] = useState<boolean>(false);
  const selectOptions =
    options &&
    options.length > 0 &&
    options.map(({ key, value, price, isPersonalisable }): OptionsTypes => ({
      label: value,
      value: key,
      price,
      isPersonalisable,
    }));
  const selectSizes =
    sizes && sizes.length > 0 && sizes.map((size) => ({ label: size, value: size }));

  const colourStyles = {
    option: (styles, {}) => ({
      ...styles,
      backgroundColor: '#FFF',
      color: '#000',
      cursor: 'pointer',
      ':hover': {
        ...styles[':hover'],
        backgroundColor: '#ff3e3e',
        color: '#FFF',
      },
      ':active': {
        ...styles[':active'],
        backgroundColor: '#ff3e3e',
        color: '#FFF',
      },
    }),
  };

  return (
    <div className="ShopItem">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleResetItem();
        }}
        className="ShopItem__back"
      >
        {translate('backToList')}
      </a>
      <div className="ShopItem__content">
        <img className="ShopItem__image" src={image} alt={name} />
        <div className="ShopItem__product">
          <div className="ShopItem__productInfo">
            <div className="ShopItem__productName">{name}</div>
            {!isSoldOut && <div className="ShopItem__productPrice">{displayPrice || price} €</div>}
          </div>
          <div className="ShopItem__productDescription">{description}</div>

          {!isSoldOut ? (
            <React.Fragment>
              <form
                className="Shop__Form"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
              >
                <input name="cmd" type="hidden" value="_s-xclick" />
                <input name="hosted_button_id" type="hidden" value={buttonId} />
                {selectOptions && (
                  <React.Fragment>
                    <input name="on0" type="hidden" value="Options" />
                    <Select
                      options={selectOptions}
                      isClearable={false}
                      isSearchable={false}
                      name="os0"
                      className="ShopItem__select ShopItem__productOptions"
                      styles={colourStyles}
                      placeholder="Select option"
                      defaultValue={selectOptions[0]}
                      onChange={({ price, isPersonalisable }) => {
                        setDisplayPrice(price);
                        setIsPersonalisable(isPersonalisable);
                      }}
                    />
                  </React.Fragment>
                )}
                {selectSizes && (
                  <React.Fragment>
                    <input name="on0" type="hidden" value="Options" />
                    <Select
                      options={selectSizes}
                      isClearable={false}
                      isSearchable={false}
                      name="on1"
                      className="ShopItem__select ShopItem__productSizes"
                      styles={colourStyles}
                      placeholder="Select size"
                      defaultValue={selectSizes[0]}
                    />
                  </React.Fragment>
                )}
                {enablePerso && isPersonalisable && (
                  <div className="ShopItem__personalization">
                    <div className="ShopItem__personalizationAlert">{translate('personalize')}</div>

                    <input name="on2" type="hidden" value="(Personalisation)" />
                    <input
                      type="text"
                      name="os2"
                      placeholder={translate('persoPlaceHolder')}
                      className="ShopItem__personalizationInput"
                    />
                  </div>
                )}
                <button className="ShopItem__productButton" name="submit" type="submit">
                  {translate('buy')}
                </button>
                <img
                  src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif"
                  alt=""
                  width="1"
                  height="1"
                  border="0"
                />
              </form>
              <div className="ShopItem__productDisclaimer">
                <p>payment via credit card / Paypal </p>
                {!hideShippingPrice && (
                  <p>Shipping and handling: {fdpPrice ? fdpPrice.toString() : '9'}€ </p>
                )}
                <p>Shipping worldwide</p>
                {delivery && <p>{delivery}</p>}
              </div>
            </React.Fragment>
          ) : (
            <div className="ShopItem__productSoldOut">{translate('soldOut')} </div>
          )}

          <div className="ShopItem__navigation">
            <a href="#" onClick={() => handleChangeItem(prevItem)}>
              Prev item
            </a>

            <a href="#" onClick={() => handleChangeItem(nextItem)}>
              Next item
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
