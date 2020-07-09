import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import StepsContext from '../../context/stepsContext';
import { ScrollView } from 'react-native-gesture-handler';

const StepContent = () => {
  const stepsContext = useContext(StepsContext);
  const { steps, currentStepIndex } = stepsContext;

  return (
    <View style={styles.container}>
      <ScrollView>
        {steps.length > 0 ? steps[currentStepIndex - 1].component() : <></>}
      </ScrollView>
      <Text>{currentStepIndex}</Text>
    </View>
  );
};

export default StepContent;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flex: 2,
  },
});
