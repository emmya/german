import _ from 'lodash';
import React from 'react';
import cx from 'classnames';
import { compose, withState } from 'recompose';
import Navigation from './Navigation';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './layout.module.scss';

const pathName = ({ location }) => (_.get(location, 'pathname') || '').replace('/', '');
const pagePadding = ({ pageName }) => ({ padding: '40px 0' });

export const SidebarLayout = compose(
  withState('navIsCollapsed', 'setNavCollapsed', false),
)(({ children, ...props }) => {
  const {
    currentUser,
    navIsCollapsed,
    setNavCollapsed,
  } = props;
  const pageName = pathName(props);
  return (
    <React.Fragment>
      <Sidebar {...{ navIsCollapsed, setNavCollapsed }}>
        <Navigation {...props} />
      </Sidebar>
      <div className={cx(styles.page, styles[`${pageName}Page`], {
        [styles.navIsCollapsed]: navIsCollapsed,
        'nav-collapsed': navIsCollapsed,
      })}
      >
        {children}
      </div>
    </React.Fragment>
  );
});

const DefaultLayout = ({ children, ...props }) => {
  const pageName = pathName(props);
  return (
    <React.Fragment>
      <Header>
        <Navigation {...props} />
      </Header>
      <div className={cx(styles.page, styles[`${pathName(props)}Page`])}>
        <div className={cx(styles.page, 'container')} style={pagePadding({ pageName })}>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DefaultLayout;
