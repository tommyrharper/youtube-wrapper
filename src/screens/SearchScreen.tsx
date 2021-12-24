import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { CTAButton } from '../components/CTAButton';
import { Heading } from '../components/Heading';
import { DefaultContainer } from '../components/DefaultContainer';
import { Input } from '../components/Input';

export const SearchScreen = () => {
  const { navigate } = useNavigation();

  return (
    <DefaultContainer>
      <Heading>Search</Heading>
      <Input />
      <CTAButton onPress={() => navigate('Search')}>Go</CTAButton>
    </DefaultContainer>
  );
};
