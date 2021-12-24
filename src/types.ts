export interface VideoSearchItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

export interface YouTubeSearchResponse {
  kind: 'youtube#searchListResponse';
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: VideoSearchItem[];
}

export interface VideoListItem {
  kind: string;
  etag: string;
  id: string;
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    contentRating: object;
    projection: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

export interface VideoListResponse {
  kind: 'youtube#videoListResponse';
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: VideoListItem[];
}

export interface TransformedVideoItem extends VideoSearchItem {
  contentDetails: VideoListItem['contentDetails'];
  statistics: VideoListItem['statistics'];
}

export interface TransformedVideosResponse extends YouTubeSearchResponse {
  items: TransformedVideoItem[];
}
