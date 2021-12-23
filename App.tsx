import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState("example");
  return (
    <View style={styles.container}>
      <Text>How long would you like to watch for?</Text>
      <TextInput style={styles.textInput} onChangeText={setText} value={text} />
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
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    margin: 30,
    padding: 10,
    width: 200,
  },
});
