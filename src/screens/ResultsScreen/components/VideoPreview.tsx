import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TransformedVideoItem } from '../../../types';
import { abbreviateNumber, getVideoDurationString } from '../../../utils';

interface VideoPreviewProps {
  video: TransformedVideoItem;
}

export const VideoPreview = ({ video }: VideoPreviewProps) => {
  const { navigate } = useNavigation();
  const onPress = useCallback(
    () => navigate('Video', { video }),
    [navigate, video],
  );

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{video.snippet.title}</Text>
        <Text style={styles.text}>- {video.snippet.channelTitle}</Text>
        <Text style={styles.text}>
          Length: {getVideoDurationString(video.contentDetails.duration)}
        </Text>
        <Text style={styles.text}>
          Views: {abbreviateNumber(video.statistics.viewCount)}
        </Text>
        <Image
          style={styles.image}
          source={{ uri: video.snippet.thumbnails.default.url }}
        />
      </View>
    </TouchableOpacity>
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
