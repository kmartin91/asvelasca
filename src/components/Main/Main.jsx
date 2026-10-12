import { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import { useDocumentTitle } from '../../shared/utils';
import Explore from '../Explore/Explore';
import Hero from '../Hero/Hero';
import Kits from '../Kits/Kits';
import Marquee from '../Marquee/Marquee';
import Numbers from '../Numbers/Numbers';

import './Main.scss';

const SLOGANS = ['We are all but a football team', 'La terza squadra di Milano', 'Art × Football'];
const PLACES = ['Torre Velasca', 'Milano', 'Est. 2015', 'Terza Categoria'];

/**
 * Home: hero, tapes, numbers, the artists' kits and the way into every section.
 */
const Main = () => {
  const { home } = useLoaderData();
  useDocumentTitle('');

  return (
    <div className="Main">
      <Hero slidesPromise={home} />

      <div className="Main__tapes">
        <Marquee className="Main__tape" items={SLOGANS} />
        <Marquee className="Main__tape Main__tape_ink" items={PLACES} isReversed />
      </div>

      <Numbers kitsPromise={home} />

      <Suspense fallback={null}>
        <Kits promise={home} />
      </Suspense>

      <Explore />
    </div>
  );
};

export default Main;
