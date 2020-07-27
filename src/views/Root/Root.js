import React from 'react';
import Main from '../../views/Templates/Main';
import { routes } from '../../routes/index';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

function Root() {
  return (
    <BrowserRouter>
      <Main>
        <Switch>
          <Route exact path={routes.main} component={MainPage} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.register} component={RegisterPage} />
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

export default Root;
