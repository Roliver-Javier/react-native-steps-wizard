import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StepsContext from '../../context/stepsContext';

const StepFooter = () => {
  const stepsContext = useContext(StepsContext);
  const { currentStepIndex, steps, setCurrentStep } = stepsContext;
  const previous = () => {
    setCurrentStep(
      currentStepIndex <= 1 ? currentStepIndex : currentStepIndex - 1
    );
  };
  const next = () => {
    stepsContext.setCurrentStep(
      currentStepIndex >= steps.length ? currentStepIndex : currentStepIndex + 1
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={previous}>
        <Text style={styles.buttonTitle}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={next}>
        <Text style={styles.buttonTitle}>
          {currentStepIndex === steps.length ? 'Finish' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StepFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  buttonTitle: {
    padding: 15,
  },
});
