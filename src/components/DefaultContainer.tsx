import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface DefaultContainerProps {
  children: ReactNode;
}

export const DefaultContainer = ({ children }: DefaultContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
