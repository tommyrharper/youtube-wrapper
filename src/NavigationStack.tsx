import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "./screens/HomeScreen";
import { NumberVideosScreen } from "./screens/NumberVideosScreen";

export type RootStackParamList = {
  Home: undefined;
  NumberVideos: {
    lengthOfTime: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen
          name="NumberVideos"
          component={NumberVideosScreen}
          options={{ title: "", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
