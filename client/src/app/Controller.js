import React from 'react';
import { Router, Route } from 'react-router-dom';

import Navigation from './Layout/Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import AccountPage from './Account';
import AdminPage from './Admin';
import OnboardingPage from './Onboarding';
import withSession from './_session/withSession';

import * as routes from 'constants/routes';
import history from 'constants/history';

import { AdminRoute, PrivateRoute, PublicRoute } from './Route';

const App = (props) => (
  <Router history={history}>
    <React.Fragment>
      <PrivateRoute
        exact
        path={routes.LANDING}
        component={LandingPage}
        {...props}
      />
      <PublicRoute
        exact
        path={routes.SIGN_UP}
        component={SignUpPage} 
        {...props}
      />
      <PublicRoute
        path='/onboarding/:step'
        component={OnboardingPage}
        {...props}
      />
      <PublicRoute
        exact
        path={routes.SIGN_IN}
        component={SignInPage}
        {...props}
      />
      <PrivateRoute
        exact
        path={routes.ACCOUNT}
        component={AccountPage}
        {...props}
      />
      <AdminRoute
        exact
        path={routes.ADMIN}
        component={AdminPage}
        {...props}
      />
    </React.Fragment>
  </Router>
);

export default withSession(App);
