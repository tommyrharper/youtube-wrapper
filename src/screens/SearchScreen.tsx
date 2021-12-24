import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { CTAButton } from '../components/CTAButton';
import { Heading } from '../components/Heading';
import { DefaultContainer } from '../components/DefaultContainer';
import { Input } from '../components/Input';

export const SearchScreen = () => {
  const { navigate, goBack } = useNavigation();

  console.log(`Constants`, Constants.manifest.extra.googleApiKey)

  return (
    <DefaultContainer>
      <Heading>Search</Heading>
      <Input />
      <CTAButton onPress={() => navigate('Search')}>Go</CTAButton>
      <CTAButton onPress={goBack}>Back</CTAButton>
    </DefaultContainer>
  );
};
