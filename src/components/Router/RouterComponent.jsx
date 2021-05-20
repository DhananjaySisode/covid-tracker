import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../About/About';
import PageNotFound from '../PageNotFound/PageNotFound';
import StateWise from '../StateWise/StateWise';
import Total from '../Total/Total';
import * as routes from './routes.json';

function RouterComponent() {
  return (
    <Switch>
      {
        <Route
          exact
          path={routes.Home}
          render={(routeProps) => <Total {...routeProps} />}
        />
      }
      {
        <Route
          exact
          path={routes.States}
          render={(routeProps) => <StateWise {...routeProps} />}
        />
      }
      {
        <Route
          exact
          path={routes.About}
          render={(routeProps) => <About {...routeProps} />}
        />
      }
      <Route render={(routeProps) => <PageNotFound {...routeProps} />} />
    </Switch>
  );
}

export default RouterComponent;
