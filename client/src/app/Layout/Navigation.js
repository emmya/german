import _ from 'lodash';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as routes from 'constants/routes';
import SignOutButton from 'components/SignOutButton';
import cx from 'classnames';
import { withRouter } from "react-router";
import styles from './layout.module.scss';

const NavigationLink = (props) => {
  const {
    title, to, hideMobileMenu, icon, className: propsClassName, history,
  } = props;
  const keyname = to.replace(/\//g, '');
  const className = cx(styles.navLink, `test-${keyname}`, propsClassName);
  const onClick = (e) => {
    e.preventDefault();
    history.push(to);
    hideMobileMenu && hideMobileMenu();
  };
  return (
    <NavLink exact={to === '/'} {...{ to, className, onClick }} activeClassName={styles.active}>
      { icon && <span className={styles.iconWrap}><i className={`fa-fw ${icon}`} /></span> }
      <span className={styles.linkText}>{title}</span>
    </NavLink>
  );
};


const Navigation = ({ session, ...props }) => session && session.me ? (
  <NavigationAuth session={session} {...props }/>
) : (
  <NavigationNonAuth {...props }/>
);

const NavigationAuth = ({ session, ...props }) => (
  <React.Fragment>
    <NavigationLink
      to={routes.LANDING}
      title="Home"
      icon="fas fa-home"
      {...props}
    />
    <NavigationLink
      to={routes.ACCOUNT}
      title={`Account (${session.me.username})`}
      {...props}
    />
    { _.get(session, 'me.role') === 'ADMIN' && (
      <NavigationLink
        to={routes.ADMIN}
        title="Admin"
        {...props}
      />
    )}
    <SignOutButton />
  </React.Fragment>
);

const NavigationNonAuth = ({ session, ...props }) => (
  <React.Fragment>
    <NavigationLink
      to={routes.SIGN_UP}
      title="Sign up"
      {...props}
    />
    <NavigationLink
      to={routes.SIGN_IN}
      title="Sign in"
      {...props}
    />
  </React.Fragment>
);

export default withRouter(Navigation);
