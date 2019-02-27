import Step1 from './steps/Step1';
import Step2 from './steps/Step2';

export default (props) => Object.freeze({
  STEP1: {
    path: 'step1',
    component: Step1,
    onContinue: () => props.history.push('/onboarding/step2'),
  },
  STEP2: {
    path: 'step2',
    component: Step2,
    onContinue: () => props.history.push('/onboarding/step1'),
  },
})