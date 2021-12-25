import { BackHandler } from 'react-native';
import { useNoOfVideosStore } from '../store';

export const useQuitApp = () => {
  const { videosPlayed, noOfVideos } = useNoOfVideosStore();
  if (videosPlayed.length === noOfVideos) {
    // Update ot use react-native-exit-app as this only works on Android:
    BackHandler.exitApp();
  }
};
