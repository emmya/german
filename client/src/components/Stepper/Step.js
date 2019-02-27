import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withRouter } from "react-router";
import { compose, branch, lifecycle, withStateHandlers, setPropTypes } from 'recompose';
import styles from './stepper.module.scss';
import Button from 'components/Button/Button';

export default props => {
  const {
    step,
    steps,
    transitioning,
    onContinue,
  } = props;
  const activeStep = steps.find(({ path }) => path === step);
  return (
    <React.Fragment>
      <div className={cx(styles.step, {
        [styles.transitioning]: transitioning
      })}>
        { activeStep ? <activeStep.component /> : ':(' }
      </div>
      <Button onClick={activeStep.onContinue}>Next</Button>
    </React.Fragment>
  )
}