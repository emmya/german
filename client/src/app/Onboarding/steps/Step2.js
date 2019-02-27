import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { compose, branch } from 'recompose';
import styles from '../onboarding.module.scss';

export default props => {
  console.log(props);
  return (
    <div className={styles.step}>
      Step2
    </div>
  )
}