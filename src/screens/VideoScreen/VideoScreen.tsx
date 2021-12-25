import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { CTAButton } from '../../components/CTAButton';
import { DefaultQueryContainer } from '../../components/DefaultQueryContainer';
import { RootStackParamList } from '../../NavigationStack';
import { getVideoDurationString, abbreviateNumber } from '../../utils';

export const VideoScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Video'>>();
  const { video } = params;
  const { goBack } = useNavigation();
  const query = {
    data: {},
    loading: false,
    error: false,
    errorMessage: undefined,
  };
  return (
    <DefaultQueryContainer query={query}>
      <Text style={styles.text}>{video.snippet.title}</Text>
      <Text style={styles.text}>- {video.snippet.channelTitle}</Text>
      <Text style={styles.text}>
        Length: {getVideoDurationString(video.contentDetails.duration)}
      </Text>
      <Text style={styles.text}>
        Views: {abbreviateNumber(video.statistics.viewCount)}
      </Text>
      <CTAButton onPress={goBack}>Back</CTAButton>
    </DefaultQueryContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
});
