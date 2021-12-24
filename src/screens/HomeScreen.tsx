import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CTAButton } from "../components/CTAButton";
import { useNavigation } from "@react-navigation/core";

export const HomeScreen = () => {
  const [lengthOfTime, setLengthOfTime] = useState<number>(5);

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.question}>How long would you like to watch for?</Text>
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
      <CTAButton onPress={() => navigate("NumberVideos", { lengthOfTime })}>
        Next
      </CTAButton>
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
  question: {
    fontSize: 40,
    textAlign: "center",
    padding: 30,
  },
  picker: {
    width: "40%",
  },
});
