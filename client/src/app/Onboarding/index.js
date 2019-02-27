import _ from 'lodash';
import React from 'react';
// import { Router, Route, Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
import styles from './onboarding.module.scss';
import StepEnum from './step-enum.js';
import Stepper from 'components/Stepper/Stepper';



const Onboarding = (props) => {
  return (
    <Stepper steps={Object.values(StepEnum(props))}>
      <h1>Onboarding</h1>
    </Stepper>
  )
}

export default withRouter(Onboarding);
