import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { CTAButton } from '../components/CTAButton';
import { Heading } from '../components/Heading';
import { DefaultContainer } from '../components/DefaultContainer';
import { Input } from '../components/Input';
import { useStore } from '../zustandStore';

export const SearchScreen = () => {
  const { navigate, goBack } = useNavigation();
  const { searchTerm, setSearchTerm } = useStore();

  return (
    <DefaultContainer>
      <Heading>Search</Heading>
      <Input value={searchTerm} onChangeText={setSearchTerm} />
      <CTAButton onPress={() => navigate('Results')}>Go</CTAButton>
      <CTAButton onPress={goBack}>Back</CTAButton>
    </DefaultContainer>
  );
};
