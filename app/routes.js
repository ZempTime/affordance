import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/Layout';
import AboutPage from './components/AboutPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={AboutPage}/>
  </Route>
);

export default routes;
