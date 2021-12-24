import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TransformedVideoItem } from '../../../types';
import { getVideoDurationString } from '../../../utils';

interface VideoPreviewProps {
  video: TransformedVideoItem;
}

export const VideoPreview = ({ video }: VideoPreviewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{video.snippet.title}</Text>
      <Text style={styles.text}>- {video.snippet.channelTitle}</Text>
      <Text style={styles.text}>
        Length: {getVideoDurationString(video.contentDetails.duration)}
      </Text>
      <Text style={styles.text}>Views: {video.statistics.viewCount}</Text>
      <Image
        style={styles.image}
        source={{ uri: video.snippet.thumbnails.default.url }}
      />
    </View>
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
