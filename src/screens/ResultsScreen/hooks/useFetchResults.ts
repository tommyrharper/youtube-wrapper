import { UseFetchResult, useFetch } from '../../../hooks/useFetch';
import { useSearchTermStore } from '../../../store';
import { TransformedVideosResponse } from '../../../types';
import { useTransformResults } from './useTransformResults';
import { useMockFetch } from './useMockFetch';
import { getSearchUrl } from '../utils';

const INITIAL_DATA = { items: [] };

interface UseFetchResultsResponse extends UseFetchResult {
  data: null | TransformedVideosResponse;
}

export const useFetchResults = (): UseFetchResultsResponse => {
  const { searchTerm } = useSearchTermStore();
  // const searchResult = useFetch(getSearchUrl(searchTerm), INITIAL_DATA);
  const searchResult = useMockFetch(getSearchUrl(searchTerm), INITIAL_DATA);
  const transformedQuery = useTransformResults(searchResult.data);

  return transformedQuery;
};
