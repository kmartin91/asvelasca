import React, { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './src/components/Main/Main';
import Disclaimer from './src/components/Disclaimer/Disclaimer';
import Edito from './src/components/Edito/Edito';
import Errors from './src/components/Errors/Errors';
import Season from './src/components/Season/Season';
import Shop from './src/components/Shop/Shop';
import App from './src/components/App/App';

/* Import new component here  */
/*
const Main = lazy(() => import('./src/components/Main/Main'));
const Disclaimer = lazy(() => import('./src/components/Disclaimer/Disclaimer'));
const Edito = lazy(() => import('./src/components/Edito/Edito'));
const Errors = lazy(() => import('./src/components/Errors/Errors'));
const Season = lazy(() => import('./src/components/Season/Season'));
const Shop = lazy(() => import('./src/components/Shop/Shop'));
const App = lazy(() => import('./src/components/App/App')); */

const base = '/:locale(fr|en|it|cn)?';

const AppRouter = (
  <Router>
    <Routes>
      <Route path="/:locale?">
        <Route index element={<App component={Disclaimer} withoutHeader withoutFooter />} />

        <Route path="home" element={<App component={Main} withoutFooter />} />

        {/* Progeto */}
        <Route
          path="progetto"
          element={<App component={Edito} page="progetto" name="progetto" />}
        />
        <Route path="project" element={<App component={Edito} page="progetto" name="project" />} />
        <Route path="projet" element={<App component={Edito} page="progetto" name="projet" />} />

        {/* Squadra */}
        <Route path="squadra" element={<App component={Edito} page="squadra" name="squadra" />} />
        <Route path="equipe" element={<App component={Edito} page="squadra" name="equipe" />} />
        <Route path="team" element={<App component={Edito} page="squadra" name="team" />} />

        {/* Sponsor */}
        <Route path="sponsor" element={<App component={Edito} page="sponsor" name="sponsor" />} />

        {/* Artists */}
        <Route path="artists" element={<App component={Edito} page="artists" name="artists" />} />
        <Route path="artistes" element={<App component={Edito} page="artists" name="artistes" />} />
        <Route path="artisti" element={<App component={Edito} page="artists" name="artisti" />} />

        {/* Season */}
        <Route path="season" element={<App component={Season} page="season" name="season" />} />
        <Route path="saison" element={<App component={Season} page="season" name="saison" />} />
        <Route path="stagione" element={<App component={Season} page="season" name="stagione" />} />

        {/* Tickets */}
        <Route path="tickets" element={<App component={Edito} page="tickets" name="tickets" />} />

        {/* Club */}
        <Route path="club" element={<App component={Edito} page="club" name="club" />} />
        <Route path="societa" element={<App component={Edito} page="club" name="societa" />} />

        {/* Supporters */}
        <Route
          path="supporters"
          element={<App component={Edito} page="supporters" name="supporters" />}
        />
        <Route
          path="supporteurs"
          element={<App component={Edito} page="supporters" name="supporteurs" />}
        />
        <Route path="tifosi" element={<App component={Edito} page="supporters" name="tifosi" />} />

        {/* Press */}
        <Route path="press" element={<App component={Edito} page="press" name="press" />} />
        <Route path="presse" element={<App component={Edito} page="press" name="presse" />} />
        <Route path="stampa" element={<App component={Edito} page="press" name="stampa" />} />

        {/* Shop */}
        <Route path="shop" element={<App component={Shop} page="shop" name="shop" />} />

        {/* Shop Item */}
        <Route path="shop/:id" element={<App component={Shop} page="shop" name="shopItem" />} />

        {/* Bulletin */}
        <Route
          path="edizione"
          element={<App component={Edito} page="bulletin" name="edizione" />}
        />
        <Route path="edition" element={<App component={Edito} page="bulletin" name="edition" />} />

        {/* Contacts */}
        <Route
          path="contatti"
          element={<App component={Edito} page="contacts" name="contatti" />}
        />
        <Route
          path="contacts"
          element={<App component={Edito} page="contacts" name="contacts" />}
        />

        {/* Disclaimer */}
        <Route
          path="disclaimer"
          element={<App component={Edito} page="disclaimer" name="disclaimer" />}
        />

        <Route path="allstar" element={<App component={Edito} page="allstar" name="allstar" />} />
        {/* Events */}
        <Route
          path="chapter7"
          element={<App component={Edito} page="chapter7" name="chapter7" />}
        />

        {/* Icarus */}
        <Route path="icarus" element={<App component={Edito} page="icarus" name="icarus" />} />

        {/* Payment Confirmation */}
        <Route
          path="confirmation"
          element={<App component={Edito} page="confirmation" name="confirmation" />}
        />

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <App component={Errors} withoutFooter code="404" noOverFlow message="Page not found" />
          }
        />
      </Route>
    </Routes>
  </Router>
);

const AppRouter2 = (
  <Router>
    <Routes>
      <Route path={base} element={<App component={Disclaimer} withoutHeader withoutFooter />} />

      <Route path={`${base}/home`} element={<App component={Main} withoutFooter />} />

      {/* Progeto */}
      <Route
        path={`${base}/progetto`}
        element={<App component={Edito} page="progetto" name="progetto" />}
      />
      <Route
        path={`${base}/project`}
        element={<App component={Edito} page="progetto" name="project" />}
      />
      <Route
        path={`${base}/projet`}
        element={<App component={Edito} page="progetto" name="projet" />}
      />

      {/* Squadra */}
      <Route
        path={`${base}/squadra`}
        element={<App component={Edito} page="squadra" name="squadra" />}
      />
      <Route
        path={`${base}/equipe`}
        element={<App component={Edito} page="squadra" name="equipe" />}
      />
      <Route path={`${base}/team`} element={<App component={Edito} page="squadra" name="team" />} />

      {/* Sponsor */}
      <Route
        path={`${base}/sponsor`}
        element={<App component={Edito} page="sponsor" name="sponsor" />}
      />

      {/* Artists */}
      <Route
        path={`${base}/artists`}
        element={<App component={Edito} page="artists" name="artists" />}
      />
      <Route
        path={`${base}/artistes`}
        element={<App component={Edito} page="artists" name="artistes" />}
      />
      <Route
        path={`${base}/artisti`}
        element={<App component={Edito} page="artists" name="artisti" />}
      />

      {/* Season */}
      <Route
        path={`${base}/season`}
        element={<App component={Season} page="season" name="season" />}
      />
      <Route
        path={`${base}/saison`}
        element={<App component={Season} page="season" name="saison" />}
      />
      <Route
        path={`${base}/stagione`}
        element={<App component={Season} page="season" name="stagione" />}
      />

      {/* Tickets */}
      <Route
        path={`${base}/tickets`}
        element={<App component={Edito} page="tickets" name="tickets" />}
      />

      {/* Club */}
      <Route path={`${base}/club`} element={<App component={Edito} page="club" name="club" />} />
      <Route
        path={`${base}/societa`}
        element={<App component={Edito} page="club" name="societa" />}
      />

      {/* Supporters */}
      <Route
        path={`${base}/supporters`}
        element={<App component={Edito} page="supporters" name="supporters" />}
      />
      <Route
        path={`${base}/supporteurs`}
        element={<App component={Edito} page="supporters" name="supporteurs" />}
      />
      <Route
        path={`${base}/tifosi`}
        element={<App component={Edito} page="supporters" name="tifosi" />}
      />

      {/* Press */}
      <Route path={`${base}/press`} element={<App component={Edito} page="press" name="press" />} />
      <Route
        path={`${base}/presse`}
        element={<App component={Edito} page="press" name="presse" />}
      />
      <Route
        path={`${base}/stampa`}
        element={<App component={Edito} page="press" name="stampa" />}
      />

      {/* Shop */}
      <Route path={`${base}/shop`} element={<App component={Shop} page="shop" name="shop" />} />

      {/* Shop Item */}
      <Route
        path={`${base}/shop/:id`}
        element={<App component={Shop} page="shop" name="shopItem" />}
      />

      {/* Bulletin */}
      <Route
        path={`${base}/edizione`}
        element={<App component={Edito} page="bulletin" name="edizione" />}
      />
      <Route
        path={`${base}/edition`}
        element={<App component={Edito} page="bulletin" name="edition" />}
      />

      {/* Contacts */}
      <Route
        path={`${base}/contatti`}
        element={<App component={Edito} page="contacts" name="contatti" />}
      />
      <Route
        path={`${base}/contacts`}
        element={<App component={Edito} page="contacts" name="contacts" />}
      />

      {/* Disclaimer */}
      <Route
        path={`${base}/disclaimer`}
        element={<App component={Edito} page="disclaimer" name="disclaimer" />}
      />

      <Route
        path={`${base}/allstar`}
        element={<App component={Edito} page="allstar" name="allstar" />}
      />
      {/* Events */}
      <Route
        path={`${base}/chapter7`}
        element={<App component={Edito} page="chapter7" name="chapter7" />}
      />

      {/* Icarus */}
      <Route
        path={`${base}/icarus`}
        element={<App component={Edito} page="icarus" name="icarus" />}
      />

      {/* Payment Confirmation */}
      <Route
        path={`${base}/confirmation`}
        element={<App component={Edito} page="confirmation" name="confirmation" />}
      />

      <Route
        path="*"
        element={
          <App component={Errors} withoutFooter code="404" noOverFlow message="Page not found" />
        }
      />
    </Routes>
  </Router>
);

const rootElement = document.getElementById('root');

// First render
const vh = window.innerHeight * 0.01;
rootElement.style.setProperty('--vh', `${vh}px`);

// All resize
window.addEventListener('resize', () => {
  const vh2 = window.innerHeight * 0.01;
  rootElement.style.setProperty('--vh', `${vh2}px`);
});

const root = createRoot(rootElement);
root.render(AppRouter);
