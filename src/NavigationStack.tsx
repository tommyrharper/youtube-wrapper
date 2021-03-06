import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LengthOfTimeScreen } from './screens/LengthOfTimeScreen';

import { NumberVideosScreen } from './screens/NumberVideosScreen';
import { ResultsScreen } from './screens/ResultsScreen/ResultsScreen';
import { SearchScreen } from './screens/SearchScreen';
import { VideoScreen } from './screens/VideoScreen/VideoScreen';
import { TransformedVideoItem } from './types';

export type RootStackParamList = {
  LengthOfTime: undefined;
  NumberVideos: undefined;
  Search: undefined;
  Results: {
    searchTerm: string;
  };
  Video: {
    video: TransformedVideoItem;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LengthOfTime"
          component={LengthOfTimeScreen}
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
        <Stack.Screen
          name="Video"
          component={VideoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
