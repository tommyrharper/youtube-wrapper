import Constants from 'expo-constants';
import {
  TransformedVideosResponse,
  VideoListResponse,
  VideoSearchItem,
  YouTubeSearchResponse,
} from './types';

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

export const convertISO8601ToSeconds = (input) => {
  const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let totalSeconds;

  if (regex.test(input)) {
    const matches = regex.exec(input);
    if (matches[1]) hours = Number(matches[1]);
    if (matches[2]) minutes = Number(matches[2]);
    if (matches[3]) seconds = Number(matches[3]);
    totalSeconds = hours * 3600 + minutes * 60 + seconds;
  }

  return totalSeconds;
};

export const getVideoDurationString = (duration: string) => {
  const seconds = convertISO8601ToSeconds(duration);
  const numMins = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds - numMins * 60);
  return `${numMins}m ${remainingSeconds}s`;
};

export function abbreviateNumber(num, digits = 0) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find((x) => {
      return num >= x.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
}
