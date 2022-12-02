import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import importedComponent from 'react-imported-component';

/* Import new component here  */
const Main = importedComponent(() => import('./src/components/Main/Main'));
const Disclaimer = importedComponent(() => import('./src/components/Disclaimer/Disclaimer'));
const Edito = importedComponent(() => import('./src/components/Edito/Edito'));
const Errors = importedComponent(() => import('./src/components/Errors/Errors'));
const Season = importedComponent(() => import('./src/components/Season/Season'));
const Shop = importedComponent(() => import('./src/components/Shop/Shop'));
const Layout = importedComponent(() => import('./src/components/Layout/Layout'));

const base = '/:locale(fr|en|it|cn)?';

const App = (
  <Router>
    <Switch>
      <Layout path={base} exact component={Disclaimer} withoutHeader withoutFooter />

      <Layout path={`${base}/home`} component={Main} withoutFooter />

      {/* Progeto */}
      <Layout path={`${base}/progetto`} component={Edito} page="progetto" name="progetto" />
      <Layout path={`${base}/project`} component={Edito} page="progetto" name="project" />
      <Layout path={`${base}/projet`} component={Edito} page="progetto" name="projet" />

      {/* Squadra */}
      <Layout path={`${base}/squadra`} component={Edito} page="squadra" name="squadra" />
      <Layout path={`${base}/equipe`} component={Edito} page="squadra" name="equipe" />
      <Layout path={`${base}/team`} component={Edito} page="squadra" name="team" />

      {/* Sponsor */}
      <Layout path={`${base}/sponsor`} component={Edito} page="sponsor" name="sponsor" />

      {/* Artists */}
      <Layout path={`${base}/artists`} component={Edito} page="artists" name="artists" />
      <Layout path={`${base}/artistes`} component={Edito} page="artists" name="artistes" />
      <Layout path={`${base}/artisti`} component={Edito} page="artists" name="artisti" />

      {/* Season */}
      <Layout path={`${base}/season`} component={Season} page="season" name="season" />
      <Layout path={`${base}/saison`} component={Season} page="season" name="saison" />
      <Layout path={`${base}/stagione`} component={Season} page="season" name="stagione" />

      {/* Tickets */}
      <Layout path={`${base}/tickets`} component={Edito} page="tickets" name="tickets" />

      {/* Club */}
      <Layout path={`${base}/club`} component={Edito} page="club" name="club" />
      <Layout path={`${base}/societa`} component={Edito} page="club" name="societa" />

      {/* Supporters */}
      <Layout path={`${base}/supporters`} component={Edito} page="supporters" name="supporters" />
      <Layout path={`${base}/supporteurs`} component={Edito} page="supporters" name="supporteurs" />
      <Layout path={`${base}/tifosi`} component={Edito} page="supporters" name="tifosi" />

      {/* Press */}
      <Layout path={`${base}/press`} component={Edito} page="press" name="press" />
      <Layout path={`${base}/presse`} component={Edito} page="press" name="presse" />
      <Layout path={`${base}/stampa`} component={Edito} page="press" name="stampa" />

      {/* Shop */}
      <Layout exact path={`${base}/shop`} component={Shop} page="shop" name="shop" />

      { /* Shop Item */ }
      <Layout path={`${base}/shop/:id`} component={Shop} page="shop" name="shopItem" />

      {/* Bulletin */}
      <Layout path={`${base}/bollettino`} component={Edito} page="bulletin" name="bollettino" />
      <Layout path={`${base}/bulletin`} component={Edito} page="bulletin" name="bulletin" />

      {/* Contacts */}
      <Layout path={`${base}/contatti`} component={Edito} page="contacts" name="contatti" />
      <Layout path={`${base}/contacts`} component={Edito} page="contacts" name="contacts" />

      {/* Disclaimer */}
      <Layout path={`${base}/disclaimer`} component={Edito} page="disclaimer" name="disclaimer" />

      {/* Event */}
      <Layout path={`${base}/chapter7`} component={Edito} page="chapter7" name="chapter7" />


      {/* Icarus */}
      <Layout path={`${base}/icarus`} component={Edito} page="icarus" name="icarus" />

      {/* Payment Confirmation */}
      <Layout
        path={`${base}/confirmation`}
        component={Edito}
        page="confirmation"
        name="confirmation"
      />

      <Layout component={Errors} withoutFooter code="404" noOverFlow message="Page not found" />
    </Switch>
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
root.render(App);