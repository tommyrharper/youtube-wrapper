import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const [lengthOfTime, setLengthOfTime] = useState<number>(5);
  return (
    <View style={styles.container}>
      <Text>How long would you like to watch for?</Text>
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
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
