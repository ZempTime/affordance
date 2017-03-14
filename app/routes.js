import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/layout';
import AboutPage from './components/aboutPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={AboutPage}/>
  </Route>
);

export default routes;
