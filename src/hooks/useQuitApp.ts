import { BackHandler } from 'react-native';
import { useNoOfVideosStore } from '../store';

export const useQuitApp = (extraVideos = 0) => {
  const { videosPlayed, noOfVideos } = useNoOfVideosStore();
  if (videosPlayed.length === noOfVideos + extraVideos) {
    // Update ot use react-native-exit-app as this only works on Android:
    BackHandler.exitApp();
  }
};
