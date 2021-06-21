import { useCallback, useState } from 'react';

type RequestConfig = {
  url: string;
  successCallback: (responseData: any) => void;
  method?: 'GET' | 'POST';
  headers?: Headers;
  body?: string;
};

/**
 *
 * @param loadingOnStart - The starting value of the isLoading state. Defaults to false.
 */
function useHttp<T>(loadingOnStart = false) {
  const [isLoading, setIsLoading] = useState(loadingOnStart);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(async (requestConfig: RequestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || 'GET',
        headers: requestConfig.headers || {},
        body: requestConfig.body || null,
      });

      if (!response.ok) {
        console.error(response);
        throw new Error('Something went wrong!');
      }

      const responseData = (await response.json()) as T;

      requestConfig.successCallback(responseData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message || 'Something went wrong.');
      alert(error.message || 'Something went wrong.');
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
}

export default useHttp;
