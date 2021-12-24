import { useEffect, useState } from 'react';
import { useLazyFetch } from '../../../hooks/useLazyFetch';
import {
  TransformedVideosResponse,
  YouTubeSearchResponse,
} from '../../../types';
import {
  isYouTubeSearchResponse,
  getListVideosUrl,
  isVideoListResponse,
  getTransformedVideoResponse,
} from '../../../utils';

export const useTransformResults = (
  searchResult: unknown | YouTubeSearchResponse,
) => {
  const [transformedResults, setTransformedResults] =
    useState<null | TransformedVideosResponse>(null);
  const [listUrl, setListUrl] = useState<null | string>(null);
  const query = useLazyFetch(listUrl);

  useEffect(() => {
    if (isYouTubeSearchResponse(searchResult)) {
      setListUrl(getListVideosUrl(searchResult));
    }
  }, [searchResult]);

  useEffect(() => {
    if (listUrl && query.loading === false && !query.data) {
      query.fetchData(listUrl);
    }
  }, [listUrl, query]);

  useEffect(() => {
    if (
      isVideoListResponse(query.data) &&
      isYouTubeSearchResponse(searchResult)
    ) {
      const newTransformedResults: TransformedVideosResponse =
        getTransformedVideoResponse(searchResult, query.data);
      setTransformedResults(newTransformedResults);
    }
  }, [searchResult, query.data]);

  return {
    loading: query.loading,
    error: query.error,
    data: transformedResults,
  };
};
