import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';
import { Text, StyleSheet, Alert } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { CTAButton } from '../../components/CTAButton';
import { DefaultContainer } from '../../components/DefaultContainer';
import { RootStackParamList } from '../../NavigationStack';
import { getVideoDurationString, abbreviateNumber } from '../../utils';

export const VideoScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Video'>>();
  const { video } = params;
  const { goBack } = useNavigation();

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <DefaultContainer>
      <Text style={styles.text}>{video.snippet.title}</Text>
      <Text style={styles.text}>- {video.snippet.channelTitle}</Text>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={video.id.videoId}
        onChangeState={onStateChange}
      />
      <Text style={styles.text}>
        Length: {getVideoDurationString(video.contentDetails.duration)}
      </Text>
      <Text style={styles.text}>
        Views: {abbreviateNumber(video.statistics.viewCount)}
      </Text>
      <CTAButton onPress={togglePlaying}>
        {playing ? 'pause' : 'play'}
      </CTAButton>
      <CTAButton onPress={goBack}>Back</CTAButton>
    </DefaultContainer>
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
