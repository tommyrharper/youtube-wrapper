import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text } from 'react-native';
import { CTAButton } from '../../components/CTAButton';
import { Heading } from '../../components/Heading';
import { DefaultContainer } from '../../components/DefaultContainer';
import { useSearchTermStore } from '../../store';
import { mockResults } from '../../mockResults';

// console.log(`Constants`, Constants.manifest.extra.googleApiKey);

export const ResultsScreen = () => {
  const { navigate, goBack } = useNavigation();
  // const { data, loading, error } = useFetchResults()
  const { data, loading, error } = {
    loading: false,
    error: false,
    data: mockResults,
  };

  return (
    <DefaultContainer>
      <Heading>Results</Heading>
      <FlatList
        data={data.items}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => {
          return <Text>{item.snippet.title}</Text>;
        }}
      />
      <CTAButton onPress={goBack}>Back</CTAButton>
    </DefaultContainer>
  );
};
