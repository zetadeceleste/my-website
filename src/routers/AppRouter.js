import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Page from './Page';
import Home from '../pages/home';
import PageNotFound from '../pages/pageNotFound';

const AppRouter = () => (
   <BrowserRouter>
      <Switch>
         <Page exact path="/" component={Home} />
         <Route component={PageNotFound} />
      </Switch>
   </BrowserRouter>
);

export default AppRouter;
