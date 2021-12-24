import { UseFetchResult, useFetch } from '../../../hooks/useFetch';
import { getSearchUrl } from '../../../utils';
import { useSearchTermStore } from '../../../store';
import { TransformedVideosResponse } from '../../../types';
import { useTransformResults } from './useTransformResults';

const INITIAL_DATA = { items: [] };

interface UseFetchResultsResponse extends UseFetchResult {
  data: null | TransformedVideosResponse;
}

export const useFetchResults = (): UseFetchResultsResponse => {
  const { searchTerm } = useSearchTermStore();
  const searchResult = useFetch(getSearchUrl(searchTerm), INITIAL_DATA);
  const transformedQuery = useTransformResults(searchResult.data);

  return transformedQuery;
};
