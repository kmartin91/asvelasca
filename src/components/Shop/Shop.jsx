import { Suspense, use, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { cmsImage, cmsSrcSet, firstEntry } from '../../shared/cms';
import { getMenu, localePath, useLocale, useTranslate } from '../../shared/i18n';
import { cx, useDocumentTitle } from '../../shared/utils';
import AppLink from '../AppLink/AppLink';
import NotFound from '../Errors/NotFound';
import LazyVideo from '../LazyVideo/LazyVideo';
import PageHero, { PageHeroImage } from '../PageHero/PageHero';
import Skeleton from '../Skeleton/Skeleton';
import ShopItem from './ShopItem/ShopItem';

import './Shop.scss';

const FILTERS = {
  all: () => true,
  available: ({ isSoldOut }) => !isSoldOut,
};

const ProductCard = ({ product, href, index }) => {
  const t = useTranslate();
  const { image, video, hasVideo, name, season, artist, price, isSoldOut, isPreOrder, sizeOnSite } =
    product;

  return (
    <li
      className={cx('Shop__product', sizeOnSite === 2 && 'Shop__product_big')}
      style={{ '--i': index }}
    >
      <AppLink className="Shop__card" to={href}>
        <div className="Shop__media">
          {hasVideo && video ? (
            <LazyVideo className="Shop__image" src={video} poster={cmsImage(image, 800)} />
          ) : (
            <img
              className="Shop__image"
              src={cmsImage(image, 800)}
              srcSet={cmsSrcSet(image, [480, 800, 1200])}
              sizes={
                sizeOnSite === 2
                  ? '(min-width: 1024px) 50vw, 100vw'
                  : '(min-width: 1024px) 25vw, 50vw'
              }
              alt={name}
              loading="lazy"
              decoding="async"
            />
          )}
          {season && <span className="Shop__season">{season}</span>}
          {isSoldOut && <span className="Shop__stamp">{t('soldOut')}</span>}
          {!isSoldOut && isPreOrder && <span className="Shop__badge">{t('preOrder')}</span>}
        </div>
        <div className="Shop__info">
          <p className="Shop__name">{name}</p>
          {artist && <p className="Shop__artist">{artist}</p>}
          {!isSoldOut && <p className="Shop__price">{price} €</p>}
        </div>
      </AppLink>
    </li>
  );
};

const ShopContent = ({ promise, id }) => {
  const locale = useLocale();
  const t = useTranslate();
  const [filter, setFilter] = useState('all');
  const products = firstEntry(use(promise)).products?.products ?? [];

  if (id !== undefined) {
    const product = /^\d+$/.test(id) ? products[Number(id) - 1] : undefined;
    if (!product) return <NotFound message={t('productNotFound')} />;
    return <ShopItem item={product} backTo={localePath(locale, 'shop')} />;
  }

  return (
    <>
      <div className="Shop__filters" role="radiogroup" aria-label="Filter">
        {Object.keys(FILTERS).map((key) => (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={filter === key}
            className={cx('Shop__filter', filter === key && 'Shop__filter_active')}
            onClick={() => setFilter(key)}
          >
            {t(key === 'all' ? 'allProducts' : key)}
            <span className="Shop__filterCount">{products.filter(FILTERS[key]).length}</span>
          </button>
        ))}
      </div>

      <ul className="Shop__grid">
        {products.map(
          (product, index) =>
            FILTERS[filter](product) && (
              <ProductCard
                key={`${index}-${product.name}`}
                product={product}
                index={index}
                href={localePath(locale, `shop/${index + 1}`)}
              />
            ),
        )}
      </ul>
    </>
  );
};

/**
 * Shop: artist-designed kits and collectibles, paid through PayPal.
 */
const Shop = () => {
  const { shop } = useLoaderData();
  const { id } = useParams();
  const locale = useLocale();
  const title = getMenu(locale).find(({ key }) => key === 'shop')?.label ?? 'shop';
  useDocumentTitle(id === undefined ? title : undefined);

  return (
    <div className="Shop">
      <PageHero
        title={title}
        isCompact={id !== undefined}
        media={
          <Suspense fallback={null}>
            <PageHeroImage promise={shop} />
          </Suspense>
        }
      />
      <div className="Shop__body">
        <Suspense fallback={<Skeleton variant="grid" />}>
          <ShopContent promise={shop} id={id} key={id ?? 'list'} />
        </Suspense>
      </div>
    </div>
  );
};

export default Shop;
