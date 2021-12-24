import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { VideoSearchItem } from '../../../types';

interface VideoPreviewProps {
  video: VideoSearchItem;
}

export const VideoPreview = ({ video }: VideoPreviewProps) => {
  return (
    <View style={styles.container}>
      <Text>
        {video.snippet.title}
      </Text>
      <Text>
        {video.snippet.channelTitle}
      </Text>
      <Image
        style={styles.image}
        source={{ uri: video.snippet.thumbnails.default.url }}
      />
      {/* <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    textAlign: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
