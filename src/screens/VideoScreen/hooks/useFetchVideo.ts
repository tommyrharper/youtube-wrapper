import { UseFetchResult, useFetch } from '../../../hooks/useFetch';
import { TransformedVideosResponse } from '../../../types';
import { useMockFetch } from '../../ResultsScreen/hooks/useMockFetch';
import { useTransformResults } from '../../ResultsScreen/hooks/useTransformResults';
import { getSearchUrl } from '../../ResultsScreen/utils';

const INITIAL_DATA = { items: [] };

interface UseFetchResultsResponse extends UseFetchResult {
  data: null | TransformedVideosResponse;
}

export const useFetchResults = (id: string): UseFetchResultsResponse => {
  // const searchResult = useFetch(getSearchUrl(searchTerm), INITIAL_DATA);
  const searchResult = useMockFetch(getSearchUrl(searchTerm), INITIAL_DATA);
  const transformedQuery = useTransformResults(searchResult.data);

  return transformedQuery;
};
