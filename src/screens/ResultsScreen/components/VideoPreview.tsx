import React from 'react';
import { View, Text } from 'react-native';
import { VideoItem } from '../../../types';

interface VideoPreviewProps {
  video: VideoItem;
}

export const VideoPreview = ({ video }: VideoPreviewProps) => {
  return (
    <View>
      <Text>{video.snippet.title}</Text>
    </View>
  );
};
