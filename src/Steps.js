import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import StepHeader from './components/stepbar/StepHeader';
import StepContent from './components/stepbar/StepContent';
import StepFooter from './components/stepbar/StepFooter';
import StepsContext from './context/stepsContext';
import Shipping from './Shipping';
import Payments from './Payments';
import Confirmation from './Confirmation';

const Steps = () => {
  const stepsContext = useContext(StepsContext);
  const { setSteps, setCurrentStep } = stepsContext;
  useEffect(() => {
    setSteps([
      {
        title: 'Shipping',
        component: () => <Shipping />,
      },
      {
        title: 'Payments',
        component: () => <Payments />,
      },
      {
        title: 'Confirmation',
        component: () => <Confirmation />,
      },
    ]);
    setCurrentStep(1);
  }, []);

  return (
    <View style={styles.container}>
      <StepHeader />
      <StepContent />
      <StepFooter />
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
