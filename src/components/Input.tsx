import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { border, boxy } from '../atoms/styles';

export const Input = (props: TextInputProps) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    ...border,
    ...boxy,
    width: '70%',
    marginBottom: boxy.margin * 3,
  },
});
