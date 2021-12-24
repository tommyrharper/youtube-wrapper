import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { CTAButton } from '../components/CTAButton';
import { Heading } from '../components/Heading';
import { DefaultContainer } from '../components/DefaultContainer';
import { Input } from '../components/Input';
import { useStore } from '../store';
import { mockResults } from '../mockResults';

export const ResultsScreen = () => {
  const { navigate, goBack } = useNavigation();
  const { searchTerm, setSearchTerm } = useStore();

  console.log(`searchTerm`, searchTerm)
  console.log(`mockResults`, mockResults)

  // console.log(`Constants`, Constants.manifest.extra.googleApiKey);

  return (
    <DefaultContainer>
      <Heading>Results</Heading>
      <CTAButton onPress={goBack}>Back</CTAButton>
    </DefaultContainer>
  );
};
