import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withRouter } from "react-router";
import { compose, branch, lifecycle, withStateHandlers, setPropTypes, withHandlers } from 'recompose';
import styles from './stepper.module.scss';
import Step from './Step';

let steptimeoutid;
let timeoutid;
let ms = 200;

const StepTransitioner = compose(
  withRouter,
  setPropTypes({
    steps: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
      onContinue: PropTypes.func.isRequired,
      canContinue: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
      onBack: PropTypes.func,
    })),
    match: PropTypes.shape({
      params: PropTypes.shape({
        step: PropTypes.string,
      }).isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }),
  withStateHandlers(({ match, steps }) => ({
    step: _.get(match, 'params.step') || 'unknown',
    transitioning: false,
  }), {
    setStep: () => step => ({ step }),
    beginTransition: () => () => ({ transitioning: true }),
    endTransition: () => () => ({ transitioning: false }),
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { step: currStep, transitioning } = this.props;
      if (transitioning) return;
      const nextStep = _.get(this.props, 'match.params.step');
      if (nextStep !== currStep) {
        if (timeoutid) clearTimeout(timeoutid);
        const { setStep, beginTransition, endTransition } = this.props;
        beginTransition();
        setTimeout(() => {
          setStep(nextStep);
        }, ms);
        timeoutid = setTimeout(() => {
          endTransition();
        }, ms * 2);
      }
    },
  }),
)(Step);


export default ({ children, ...props }) => {
  // console.log(props);
  return (
    <div className={cx(styles.stepWrap, {
      })}>
      {children}
      <StepTransitioner {...props} />
    </div>
  )
}