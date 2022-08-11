import {StyleSheet, View, Text, TextInput as TextInputRN} from 'react-native';
import React from 'react';
import Gap from '../Gap';

const TextInput = ({title, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Gap height={8} />
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 60,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#2E2E2E',
  },
  input: {
    borderWidth: 1,
    borderColor: '#9A0000',
    borderRadius: 15,
    paddingHorizontal: 19,
  },
});
