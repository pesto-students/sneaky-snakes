import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page404 from './components/404/Page404';
import Home from './components/Home/Home';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="*" component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default App;
