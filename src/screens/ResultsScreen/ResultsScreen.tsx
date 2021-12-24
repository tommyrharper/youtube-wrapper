import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { CTAButton } from '../../components/CTAButton';
import { Heading } from '../../components/Heading';
import { DefaultQueryContainer } from '../../components/DefaultQueryContainer';
import { VideoPreview } from './components/VideoPreview';
import { useFetchResults } from './hooks/useFetchResults';

export const ResultsScreen = () => {
  const { goBack } = useNavigation();
  const query = useFetchResults();
  const { data } = query;

  const renderItem = useCallback(({ item }) => {
    return <VideoPreview video={item} />;
  }, []);

  return (
    <DefaultQueryContainer query={query}>
      <Heading>Results</Heading>
      <FlatList
        data={data?.items}
        keyExtractor={(item) => item.etag}
        renderItem={renderItem}
      />
      <CTAButton onPress={goBack}>Back</CTAButton>
    </DefaultQueryContainer>
  );
};
