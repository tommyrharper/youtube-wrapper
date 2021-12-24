import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { CTAButton } from '../../components/CTAButton';
import { Heading } from '../../components/Heading';
import { mockResults } from '../../mockResults';
import { DefaultQueryContainer } from '../../components/DefaultQueryContainer';
import { VideoPreview } from './components/VideoPreview';

export const ResultsScreen = () => {
  const { navigate, goBack } = useNavigation();
  // const query = useFetchResults()
  const query = {
    loading: false,
    error: false,
    data: mockResults,
  };
  const { data } = query;

  const renderItem = useCallback(({ item }) => {
    return <VideoPreview video={item} />;
  }, []);

  return (
    <DefaultQueryContainer query={query}>
      <Heading>Results</Heading>
      <FlatList
        data={data.items}
        keyExtractor={(item) => item.id.videoId}
        renderItem={renderItem}
      />
      <CTAButton onPress={goBack}>Back</CTAButton>
    </DefaultQueryContainer>
  );
};
