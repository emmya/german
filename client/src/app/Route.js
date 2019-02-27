import _ from 'lodash';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as routes from 'constants/routes';
import AppLayout from './Layout/Layout';

const renderPage = ({ Component, Layout = AppLayout, ...props }) => (
  <Layout {...props}>
    <Component {...props} />
  </Layout>
)

export const AdminRoute = ({ component: Component, ...rest }) => {
  function render(props) {
    if (_.get(rest, 'session.me.role') === 'ADMIN') {
      return renderPage({ Component, ...rest });
    }
    return <Redirect to={routes.LANDING} />;
  }

  return (
    <Route
      {...rest}
      render={render}
    />
  );
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  function render(props) {
    if (_.get(rest, 'session.me')) {
      return renderPage({ Component, ...rest });
    }
    return <Redirect to={routes.SIGN_IN} />;
  }

  return (
    <Route
      {...rest}
      render={render}
    />
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => {
  function render(props) {
    if (_.get(rest, 'session.me')) {
      return <Redirect to={routes.LANDING} />
    }
    return renderPage({ Component, ...rest });
  }

  return (
    <Route
      {...rest}
      render={render}
    />
  );
};