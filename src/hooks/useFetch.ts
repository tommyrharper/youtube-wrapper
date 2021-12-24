import { useEffect, useState } from 'react';

export interface UseFetchResult {
  data: unknown;
  loading: boolean;
  error: boolean;
}

export const useFetch = (
  url: string,
  initialData?: unknown,
): UseFetchResult => {
  const [data, setData] = useState<unknown>(initialData || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url).then((res) => res.json());
        setData(result);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
