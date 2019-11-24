import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './src/components/Layout/Layout';
import Main from './src/components/Main/Main';
import Edito from './src/components/Edito/Edito';
import Errors from './src/components/Errors/Errors';

import './styles/all.scss';

const base = '/:locale(fr|en|it|cn)?';

ReactDOM.render(
  <Router>
    <Layout path={base} exact component={Main} withoutFooter />

    {/* Progeto */}
    <Layout path={`${base}/progetto`} withoutFooter component={Edito} page="progetto" />
    <Layout path={`${base}/project`} withoutFooter component={Edito} page="progetto" />
    <Layout path={`${base}/projet`} withoutFooter component={Edito} page="progetto" />

    {/* Squadra */}
    <Layout path={`${base}/squadra`} withoutFooter component={Edito} page="squadra" />
    <Layout path={`${base}/equipe`} withoutFooter component={Edito} page="squadra" />
    <Layout path={`${base}/team`} withoutFooter component={Edito} page="squadra" />

    {/* Sponsor */}
    <Layout path={`${base}/sponsor`} withoutFooter component={Edito} page="sponsor" />

    {/* Artists */}
    <Layout path={`${base}/artists`} withoutFooter component={Edito} page="artists" />
    <Layout path={`${base}/artistes`} withoutFooter component={Edito} page="artists" />
    <Layout path={`${base}/artisti`} withoutFooter component={Edito} page="artists" />

    {/* Season */}
    <Layout path={`${base}/season`} withoutFooter component={Edito} page="season" />
    <Layout path={`${base}/saison`} withoutFooter component={Edito} page="season" />
    <Layout path={`${base}/stagione`} withoutFooter component={Edito} page="season" />

    {/* Tickets */}
    <Layout path={`${base}/tickets`} withoutFooter component={Edito} page="tickets" />

    {/* Club */}
    <Layout path={`${base}/club`} withoutFooter component={Edito} page="club" />
    <Layout path={`${base}/societa`} withoutFooter component={Edito} page="club" />

    {/* Supporters */}
    <Layout path={`${base}/supporters`} withoutFooter component={Edito} page="supporters" />
    <Layout path={`${base}/supporteurs`} withoutFooter component={Edito} page="supporters" />
    <Layout path={`${base}/tifosi`} withoutFooter component={Edito} page="supporters" />

    {/* Press */}
    <Layout path={`${base}/press`} withoutFooter component={Edito} page="press" />
    <Layout path={`${base}/presse`} withoutFooter component={Edito} page="press" />
    <Layout path={`${base}/stampa`} withoutFooter component={Edito} page="press" />

    {/* Shop */}
    <Layout path={`${base}/shop`} withoutFooter component={Edito} page="shop" />
    <Layout path={`${base}/shop`} withoutFooter component={Edito} page="shop" />
    <Layout path={`${base}/shop`} withoutFooter component={Edito} page="shop" />
    {/* Bulletin */}
    <Layout path={`${base}/bollettino`} withoutFooter component={Edito} page="bulletin" />
    <Layout path={`${base}/bulletin`} withoutFooter component={Edito} page="bulletin" />

    {/* Contacts */}
    <Layout path={`${base}/contatti`} withoutFooter component={Edito} page="contacts" />
    <Layout path={`${base}/contacts`} withoutFooter component={Edito} page="contacts" />

    {/* <Route component={Errors} code="404" exact withoutFooter noOverFlow message="Page not found" /> */}
  </Router>,
  document.getElementById('root'),
);
