import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [lengthOfTime, setLengthOfTime] = useState();
  return (
    <View style={styles.container}>
      <Text>How long would you like to watch for?</Text>
      <Picker
        style={styles.picker}
        selectedValue={lengthOfTime}
        onValueChange={setLengthOfTime}
      >
        <Picker.Item label="5 mins" value="java" />
        <Picker.Item label="10 mins" value="js" />
        <Picker.Item label="15 mins" value="js" />
        <Picker.Item label="20 mins" value="js" />
        <Picker.Item label="25 mins" value="js" />
        <Picker.Item label="30 mins" value="js" />
      </Picker>
    </View>
  );
}

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
