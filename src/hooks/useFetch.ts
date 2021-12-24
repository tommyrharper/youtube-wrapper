import { useEffect, useState } from 'react';

export const useFetch = (url: string, initialData?: unknown) => {
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
