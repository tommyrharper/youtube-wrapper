import React, { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";

interface HeadingProps {
  children: ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: "center",
    padding: 30,
  },
});
