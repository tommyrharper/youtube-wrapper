import { useState } from 'react';

export const useLazyFetch = (url: string) => {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
  return { data, loading, error, fetchData };
};
