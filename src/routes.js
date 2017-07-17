import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MainLayout from './layouts/Main/MainLayout'; /* This should be a layout page */
import Login from './components/Login/Login';
import Home from './components/Main';
import Bracket from './components/Bracket/Bracket';
import EditTermSheet from './components/Bracket/EditTermSheet';

export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={Login} />
    <Route path="login" component={Login} />
    <Route path="home" component={Home} />
    <Route path="brackets" component={Bracket} />
    <Route path="editTermSheet" component={EditTermSheet} />
  </Route>
);