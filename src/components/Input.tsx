import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { border, boxy } from '../atoms/styles';

export const Input = () => {
  return <TextInput style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    ...border,
    ...boxy,
    width: '70%',
    marginBottom: boxy.margin * 3,
  },
});
