import { useState } from 'react';
import { mockVideosList } from '../../../mockVideosList';

import { UseFetchResult } from '../../../hooks/useFetch';

const getDelayedMockResponse = async () => {
  return mockVideosList;
};

export interface UseLazyFetchResult extends UseFetchResult {
  fetchData: (newUrl?: string) => void;
}

export const useMockLazyFetch = (url?: string | null): UseLazyFetchResult => {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage] = useState(undefined);

  const fetchData = async (newUrl?: string) => {
    setLoading(true);
    try {
      const resolvedUrl = newUrl || url;
      if (!resolvedUrl) throw Error('No URL provided');
      const result = await getDelayedMockResponse();
      setData(result);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  };
  return { data, loading, error, fetchData, errorMessage };
};
