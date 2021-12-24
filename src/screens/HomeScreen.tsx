import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CTAButton } from "../components/CTAButton";
import { useNavigation } from "@react-navigation/core";
import { useStore } from "../zustandStore";
import { Heading } from "../components/Heading";

export const HomeScreen = () => {
  const lengthOfTime = useStore((state) => state.lengthOfTime);
  const setLengthOfTime = useStore((state) => state.setLengthOfTime);

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Heading>How long would you like to watch for?</Heading>
      <Picker
        style={styles.picker}
        selectedValue={lengthOfTime}
        onValueChange={setLengthOfTime}
      >
        <Picker.Item label="5 mins" value={5} />
        <Picker.Item label="10 mins" value={10} />
        <Picker.Item label="15 mins" value={15} />
        <Picker.Item label="20 mins" value={20} />
        <Picker.Item label="25 mins" value={25} />
        <Picker.Item label="30 mins" value={30} />
      </Picker>
      <CTAButton onPress={() => navigate("NumberVideos")}>Next</CTAButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    width: "40%",
  },
});
