import { Picker, PickerProps } from "@react-native-picker/picker";
import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";

interface StyledPickerProps extends PickerProps {
  children: ReactNode;
}

export const StyledPicker = (props: StyledPickerProps) => {
  return (
    <Picker style={styles.picker} {...props}>
      {props.children}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: "40%",
  },
});
