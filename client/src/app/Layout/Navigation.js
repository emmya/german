import _ from 'lodash';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as routes from 'constants/routes';
import SignOutButton from 'components/SignOutButton';
import Button from 'components/Button/Button';
import cx from 'classnames';
import { withRouter } from 'react-router';
import styles from './layout.module.scss';
import { defaultLinks } from './links.js';

const NavigationLink = (props) => {
  const {
    title,
    to,
    hideMobileMenu,
    icon,
    styleNames = [],
    attrs = {},
    className: propsClassName,
    history,
    kind,
  } = props;
  const keyname = to.replace(/\//g, '');
  const className = cx(
    styles.navLink,
    styles[keyname],
    `test-${keyname}`,
    propsClassName,
    ...styleNames.map(name => styles[name]),
  );
  const onClick = (e) => {
    e.preventDefault();
    history.push(to);
    if (hideMobileMenu) {
      hideMobileMenu();
    }
  };
  const content = (
    <React.Fragment>
      { icon && <span className={styles.iconWrap}><i className={`fa-fw ${icon}`} /></span> }
      <span className={styles.linkText}>{title}</span>
    </React.Fragment>
  );

  if (kind === 'button') {
    return (
      <Button {...{ onClick, className, ...attrs }}>
        {content}
      </Button>
    );
  }
  return (
    <NavLink exact={to === '/'} {...{ to, className, onClick }} activeClassName={styles.active}>
      {content}
    </NavLink>
  );
};

const Navigation = ({ ...props }) => {
  const isLoggedIn = !!_.get(props, 'session.me');
  const isAdmin = _.get(props, 'session.me.role') === 'ADMIN';
  const links = defaultLinks({ ...props, isLoggedIn, isAdmin });
  return (
    <React.Fragment>
      {_.map(links, linkGroup => (
        <div className={styles.linkGroup}>
          {linkGroup.map(link => (link.kind === 'LOG_OUT'
            ? <SignOutButton />
            : <NavigationLink {...props} {...link} />))}
        </div>
      ))}
    </React.Fragment>
  );
};

export default withRouter(Navigation);
