import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { VideoSearchItem } from '../../../types';

interface VideoPreviewProps {
  video: VideoSearchItem;
}

export const VideoPreview = ({ video }: VideoPreviewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{video.snippet.title}</Text>
      <Text style={styles.text}>- {video.snippet.channelTitle}</Text>
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
