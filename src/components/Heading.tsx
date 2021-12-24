import React, { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface HeadingProps {
  children: ReactNode;
  extraStyles?: TextStyle;
}

export const Heading = ({ children, extraStyles }: HeadingProps) => {
  return <Text style={[styles.text, extraStyles]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: 'center',
    padding: 30,
  },
});
