import { useState, useEffect } from "react";

interface UseFetchApiProps {
  fetchDataFunc: () => Promise<any>;
}

export const useFetchAPI = (props: UseFetchApiProps) => {
  const { fetchDataFunc } = props;
  const [result, setResult] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFunc();
        setResult(data);
      } catch (error) {
        console.error("Error in useFetchAPI:", error);
        setError(
          error instanceof Error ? error : new Error("An error occurred")
        );
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { result, error };
};
