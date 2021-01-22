import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';

const AppRouter = () => (
    <Switch>
          <>
            <Route exact path="/">
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </>
        :
    </Switch>
);

export default AppRouter;
