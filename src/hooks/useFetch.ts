import { useEffect, useState } from 'react';

export interface UseFetchResult {
  data: unknown;
  loading: boolean;
  error: boolean;
  errorMessage?: string;
}

export const useFetch = (
  url: string,
  initialData?: unknown,
): UseFetchResult => {
  const [data, setData] = useState<unknown>(initialData || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url).then((res) => res.json());
        if (result.error) {
          const message = result.error?.errors?.[0]?.message;
          setErrorMessage(message);
          throw Error(message);
        }
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
