import React from 'react';
import {Route} from 'react-router';
import Layout from './components/Layout';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <Route path="/about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
