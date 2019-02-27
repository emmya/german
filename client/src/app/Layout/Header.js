import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withRouter } from 'react-router';
// import { compose, branch } from 'recompose';
import styles from './layout.module.scss';

export default ({ children, ...props }) => (
  <React.Fragment>
    <header className={cx(styles.header)}>
      <div className={cx(styles.headerContainer, 'container')}>
        {children}
      </div>
    </header>
    <div className={cx(styles.headerSpacer)} />
  </React.Fragment>
)