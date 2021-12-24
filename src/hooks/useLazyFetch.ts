import { useState } from 'react';
import { UseFetchResult } from './useFetch';

export interface UseLazyFetchResult extends UseFetchResult {
  fetchData: (newUrl?: string) => void;
}

export const useLazyFetch = (url?: string | null): UseLazyFetchResult => {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async (newUrl?: string) => {
    try {
      const resolvedUrl = newUrl || url;
      if (!resolvedUrl) throw Error('No URL provided');
      const result = await fetch(resolvedUrl).then((res) => res.json());
      setData(result);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  };
  return { data, loading, error, fetchData };
};
