import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { NumberVideosScreen } from './screens/NumberVideosScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import { SearchScreen } from './screens/SearchScreen';

export type RootStackParamList = {
  Home: undefined;
  NumberVideos: undefined;
  Search: undefined;
  Results: {
    searchTerm: string;
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NumberVideos"
          component={NumberVideosScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
