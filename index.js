import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './src/components/Layout/Layout';
import Main from './src/components/Main/Main';
import Disclaimer from './src/components/Disclaimer/Disclaimer';
import Edito from './src/components/Edito/Edito';
import Errors from './src/components/Errors/Errors';

const base = '/:locale(fr|en|it|cn)?';

// First render
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// All resize
window.addEventListener('resize', () => {
  const vh2 = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh2}px`);
});

ReactDOM.render(
  <Router>
    <Layout path={base} exact component={Disclaimer} withoutHeader withoutFooter />

    <Layout path={`${base}/home`} component={Main} withoutFooter />

    {/* Progeto */}
    <Layout
      path={`${base}/progetto`}
      withoutFooter
      component={Edito}
      page="progetto"
      name="progetto"
    />
    <Layout
      path={`${base}/project`}
      withoutFooter
      component={Edito}
      page="progetto"
      name="project"
    />
    <Layout path={`${base}/projet`} withoutFooter component={Edito} page="progetto" name="projet" />

    {/* Squadra */}
    <Layout
      path={`${base}/squadra`}
      withoutFooter
      component={Edito}
      page="squadra"
      name="squadra"
    />
    <Layout path={`${base}/equipe`} withoutFooter component={Edito} page="squadra" name="equipe" />
    <Layout path={`${base}/team`} withoutFooter component={Edito} page="squadra" name="team" />

    {/* Sponsor */}
    <Layout
      path={`${base}/sponsor`}
      withoutFooter
      component={Edito}
      page="sponsor"
      name="sponsor"
    />

    {/* Artists */}
    <Layout
      path={`${base}/artists`}
      withoutFooter
      component={Edito}
      page="artists"
      name="artists"
    />
    <Layout
      path={`${base}/artistes`}
      withoutFooter
      component={Edito}
      page="artists"
      name="artistes"
    />
    <Layout
      path={`${base}/artisti`}
      withoutFooter
      component={Edito}
      page="artists"
      name="artisti"
    />

    {/* Season */}
    <Layout path={`${base}/season`} withoutFooter component={Edito} page="season" name="season" />
    <Layout path={`${base}/saison`} withoutFooter component={Edito} page="season" name="saison" />
    <Layout
      path={`${base}/stagione`}
      withoutFooter
      component={Edito}
      page="season"
      name="stagione"
    />

    {/* Tickets */}
    <Layout
      path={`${base}/tickets`}
      withoutFooter
      component={Edito}
      page="tickets"
      name="tickets"
    />

    {/* Club */}
    <Layout path={`${base}/club`} withoutFooter component={Edito} page="club" name="club" />
    <Layout path={`${base}/societa`} withoutFooter component={Edito} page="club" name="societa" />

    {/* Supporters */}
    <Layout
      path={`${base}/supporters`}
      withoutFooter
      component={Edito}
      page="supporters"
      name="supporters"
    />
    <Layout
      path={`${base}/supporteurs`}
      withoutFooter
      component={Edito}
      page="supporters"
      name="supporteurs"
    />
    <Layout
      path={`${base}/tifosi`}
      withoutFooter
      component={Edito}
      page="supporters"
      name="tifosi"
    />

    {/* Press */}
    <Layout path={`${base}/press`} withoutFooter component={Edito} page="press" name="press" />
    <Layout path={`${base}/presse`} withoutFooter component={Edito} page="press" name="presse" />
    <Layout path={`${base}/stampa`} withoutFooter component={Edito} page="press" name="stampa" />

    {/* Shop */}
    <Layout path={`${base}/shop`} withoutFooter component={Edito} page="shop" name="shop" />
    {/* Bulletin */}
    <Layout
      path={`${base}/bollettino`}
      withoutFooter
      component={Edito}
      page="bulletin"
      name="bollettino"
    />
    <Layout
      path={`${base}/bulletin`}
      withoutFooter
      component={Edito}
      page="bulletin"
      name="bulletin"
    />

    {/* Contacts */}
    <Layout
      path={`${base}/contatti`}
      withoutFooter
      component={Edito}
      page="contacts"
      name="contatti"
    />
    <Layout
      path={`${base}/contacts`}
      withoutFooter
      component={Edito}
      page="contacts"
      name="contacts"
    />
    {/*}
    <Route
      component={Errors}
      path="*"
      code="404"
      exact
      withoutFooter
      noOverFlow
      message="Page not found"
    /> */}
  </Router>,
  document.getElementById('root'),
);
