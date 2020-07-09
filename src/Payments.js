import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const Payments = () => {
  return (
    <View>
      <Text>Payment Form</Text>
      <View style={styles.form}>
        <TextInput style={styles.inputStyle}></TextInput>
        <TextInput
          style={styles.inputStyle}
          autoCompleteType='street-address'
        ></TextInput>
      </View>
    </View>
  );
};

export default Payments;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
  },
  inputStyle: {
    borderColor: '#666',
    borderWidth: 1,
  },
});
