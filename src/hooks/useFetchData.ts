import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { DataTableValue } from 'primereact/datatable';

interface FetchDataProps {
  url: string
}

export function useFetchData({ url }: FetchDataProps) {
  const [data, setData] = useState<DataTableValue[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data.items);
        setError(null);
      } catch (error) {
        setError(error as Error);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}