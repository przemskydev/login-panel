import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import Main from "../Templates/Main";
import { routes } from '../../routes/index';
import PrivateRoute from '../../components/PrivateRoutes';
import MainPage from '../Pages/MainPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main>
          <Switch>
            <PrivateRoute exact path={routes.main} component={MainPage} />
            <Route exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.register} component={RegisterPage} />
          </Switch>
        </Main>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
