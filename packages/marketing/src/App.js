import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {StylesProvider} from '@material-ui/core';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

export const App = () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/pricing' component={Pricing}/>
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
