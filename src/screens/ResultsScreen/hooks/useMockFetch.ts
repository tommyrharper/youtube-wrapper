import { useEffect, useState } from 'react';
import { mockResults } from '../../../mockResults';

const getDelayedMockResponse = async () => {
  return mockResults;
};

export interface UseFetchResult {
  data: unknown;
  loading: boolean;
  error: boolean;
  errorMessage?: string;
}

export const useMockFetch = (
  url: string,
  initialData?: unknown,
): UseFetchResult => {
  const [data, setData] = useState<unknown>(initialData || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDelayedMockResponse();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error, errorMessage };
};
