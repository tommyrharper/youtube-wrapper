import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';
import { Text, StyleSheet, Alert } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { CTAButton } from '../../components/CTAButton';
import { DefaultContainer } from '../../components/DefaultContainer';
import { Heading } from '../../components/Heading';
import { useQuitApp } from '../../hooks/useQuitApp';
import { RootStackParamList } from '../../NavigationStack';
import { useNoOfVideosStore } from '../../store';
import { getVideoDurationString, abbreviateNumber } from '../../utils';

export const VideoScreen = () => {
  useQuitApp(1);
  const { params } = useRoute<RouteProp<RootStackParamList, 'Video'>>();
  const { video } = params;
  const { goBack } = useNavigation();

  const [hasPlayed, setHasPlayed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const { updateVideosPlayed } = useNoOfVideosStore();

  const onStateChange = useCallback(
    (state) => {
      if (state === 'playing') {
        if (!hasPlayed) {
          setHasPlayed(true);
          updateVideosPlayed(video.id.videoId);
        }
      }
      if (state === 'ended') {
        setPlaying(false);
        Alert.alert('video has finished playing!');
      }
    },
    [hasPlayed, video.id.videoId, updateVideosPlayed],
  );

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <DefaultContainer>
      <Heading>{video.snippet.title}</Heading>
      <Text style={styles.text}>{video.snippet.channelTitle}</Text>
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
