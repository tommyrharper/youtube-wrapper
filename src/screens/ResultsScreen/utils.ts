import Constants from 'expo-constants';
import {
  VideoSearchItem,
  YouTubeSearchResponse,
  VideoListResponse,
  TransformedVideosResponse,
} from '../../types';

export const isVideoSearchItem = (item: any): item is VideoSearchItem => {
  if (typeof item !== 'object' || Array.isArray(item) || item === null) {
    return false;
  }
  return item.kind === 'youtube#searchResult';
};

export const isYouTubeSearchResponse = (
  res: any,
): res is YouTubeSearchResponse => {
  if (typeof res !== 'object' || Array.isArray(res) || res === null) {
    return false;
  }
  return res.kind === 'youtube#searchListResponse';
};

export const isVideoListResponse = (res: any): res is VideoListResponse => {
  if (typeof res !== 'object' || Array.isArray(res) || res === null) {
    return false;
  }
  return res.kind === 'youtube#videoListResponse';
};

export const key = Constants.manifest.extra.googleApiKey;
export const GOOGLE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const getSearchUrl = (q: string): string =>
  `${GOOGLE_API_BASE_URL}/search?part=snippet&maxResults=2&q=${q}&key=${key}`;

export const getListVideosUrl = (res: YouTubeSearchResponse): string => {
  const idsList = res.items.map((item) => {
    return item.id.videoId;
  });
  const idsString = idsList.reduce((acc, cur) => {
    return `${acc},${cur}`;
  });
  return `${GOOGLE_API_BASE_URL}/videos?id=${idsString}&part=contentDetails,statistics&key=${key}`;
};

export const getTransformedVideoResponse = (
  searchResult: YouTubeSearchResponse,
  videoListResponse: VideoListResponse,
): TransformedVideosResponse => {
  return {
    ...searchResult,
    items: searchResult.items.map((item, i) => {
      const videoListItem = videoListResponse.items[i];
      return {
        ...videoListItem,
        ...item,
      };
    }),
  };
};
