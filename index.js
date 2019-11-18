import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './src/components/Layout/Layout';
import Main from './src/components/Main/Main';
import Edito from './src/components/Edito/Edito';
import Errors from './src/components/Errors/Errors';

import './styles/all.scss';

const base = '/:locale(fr|en|it|zh)?';

ReactDOM.render(
  <Router>
    <Layout path={base} exact component={Main} withoutFooter />

    {/* Progeto */}
    <Layout path={`${base}/progetto`} exact withoutFooter component={Edito} page="progetto" />
    <Layout path={`${base}/project`} exact withoutFooter component={Edito} page="progetto" />
    <Layout path={`${base}/projet`} exact withoutFooter component={Edito} page="progetto" />

    {/* Squadra */}
    <Layout path={`${base}/squadra`} exact withoutFooter component={Edito} page="squadra" />
    <Layout path={`${base}/equipe`} exact withoutFooter component={Edito} page="squadra" />
    <Layout path={`${base}/team`} exact withoutFooter component={Edito} page="squadra" />

    {/* Sponsor */}
    <Layout path={`${base}/sponsor`} exact withoutFooter component={Edito} page="sponsor" />
    <Layout path={`${base}/sponsor`} exact withoutFooter component={Edito} page="sponsor" />
    <Layout path={`${base}/sponsor`} exact withoutFooter component={Edito} page="sponsor" />

    {/* Artists */}
    <Layout path={`${base}/artists`} exact withoutFooter component={Edito} page="artists" />
    <Layout path={`${base}/artistes`} exact withoutFooter component={Edito} page="artists" />
    <Layout path={`${base}/artisti`} exact withoutFooter component={Edito} page="artists" />

    {/* Season */}
    <Layout path={`${base}/season`} exact withoutFooter component={Edito} page="season" />
    <Layout path={`${base}/saison`} exact withoutFooter component={Edito} page="season" />
    <Layout path={`${base}/stagione`} exact withoutFooter component={Edito} page="season" />

    {/* Tickets */}
    <Layout path={`${base}/tickets`} exact withoutFooter component={Edito} page="tickets" />

    {/* Club */}
    <Layout path={`${base}/club`} exact withoutFooter component={Edito} page="club" />
    <Layout path={`${base}/societa`} exact withoutFooter component={Edito} page="club" />

    {/* Supporters */}
    <Layout path={`${base}/supporters`} exact withoutFooter component={Edito} page="supporters" />
    <Layout path={`${base}/supporteurs`} exact withoutFooter component={Edito} page="supporters" />
    <Layout path={`${base}/tifosi`} exact withoutFooter component={Edito} page="supporters" />

    {/* Press */}
    <Layout path={`${base}/press`} exact withoutFooter component={Edito} page="press" />
    <Layout path={`${base}/presse`} exact withoutFooter component={Edito} page="press" />
    <Layout path={`${base}/stampa`} exact withoutFooter component={Edito} page="press" />

    {/* Shop */}
    <Layout path={`${base}/shop`} exact withoutFooter component={Edito} page="shop" />
    <Layout path={`${base}/shop`} exact withoutFooter component={Edito} page="shop" />
    <Layout path={`${base}/shop`} exact withoutFooter component={Edito} page="shop" />
    {/* Bulletin */}
    <Layout path={`${base}/bollettino`} exact withoutFooter component={Edito} page="bulletin" />
    <Layout path={`${base}/bulletin`} exact withoutFooter component={Edito} page="bulletin" />

    {/* Contacts */}
    <Layout path={`${base}/contati`} exact withoutFooter component={Edito} page="contacts" />
    <Layout path={`${base}/contacts`} exact withoutFooter component={Edito} page="contacts" />

    {/* <Route component={Errors} code="404" exact withoutFooter noOverFlow message="Page not found" /> */}
  </Router>,
  document.getElementById('root'),
);
