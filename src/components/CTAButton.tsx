import React, { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CTAButtonProps {
  onPress: () => void;
  children: ReactNode;
}

export const CTAButton = ({ onPress, children }: CTAButtonProps) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress}>
        <Text allowFontScaling={false} style={styles.text}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    margin: 30,
    width: 200,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
