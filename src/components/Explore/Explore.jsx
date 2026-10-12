import { getMenu, localePath, useLocale, useTranslate } from '../../shared/i18n';
import { pad } from '../../shared/utils';
import AppLink from '../AppLink/AppLink';
import Arrow from '../Arrow/Arrow';

import './Explore.scss';

/**
 * Every section of the site: big tiles for the main ones, an index for the rest.
 */
const Explore = () => {
  const locale = useLocale();
  const t = useTranslate();
  const menu = getMenu(locale);
  const primary = menu.filter(({ isPrimary }) => isPrimary);
  const secondary = menu.filter(({ isPrimary }) => !isPrimary);

  return (
    <section className="Explore" aria-labelledby="explore-title">
      <h2 id="explore-title" className="Explore__title">
        {t('exploreTitle')}
      </h2>

      <ul className="Explore__tiles">
        {primary.map(({ key, route, label }, index) => (
          <li key={key} style={{ '--i': index }}>
            <AppLink
              className="Explore__tile"
              to={localePath(locale, route)}
              data-number={pad(index + 1)}
            >
              <span className="Explore__label">{label}</span>
              <Arrow className="Explore__arrow" />
            </AppLink>
          </li>
        ))}
      </ul>

      <ul className="Explore__rows">
        {secondary.map(({ key, route, label }, index) => (
          <li key={key}>
            <AppLink className="Explore__row" to={localePath(locale, route)}>
              <span className="Explore__number">{pad(primary.length + index + 1)}</span>
              <span className="Explore__rowLabel">{label}</span>
              <Arrow className="Explore__arrow" />
            </AppLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Explore;
