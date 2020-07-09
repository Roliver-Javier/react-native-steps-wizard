import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Shipping = () => {
  return (
    <View style={styles.container}>
      <Text>Shipping</Text>
    </View>
  );
};

export default Shipping;

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
