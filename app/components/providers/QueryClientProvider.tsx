'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

type CacheRecord<T = unknown> = {
  data?: T;
  error?: Error;
  updatedAt: number;
};

type QueryClientContextValue = {
  getQueryData: <T>(key: string) => T | undefined;
  setQueryData: <T>(key: string, data: T) => void;
  setQueryError: (key: string, error: Error) => void;
};

const QueryClientContext = createContext<QueryClientContextValue | null>(null);

export function QueryClientContainer({ children }: { children: ReactNode }) {
  const cache = useRef(new Map<string, CacheRecord>());

  const value = useMemo<QueryClientContextValue>(() => ({
    getQueryData: <T,>(key: string) => cache.current.get(key)?.data as T | undefined,
    setQueryData: <T,>(key: string, data: T) => {
      cache.current.set(key, { data, updatedAt: Date.now() });
    },
    setQueryError: (key: string, error: Error) => {
      cache.current.set(key, { error, updatedAt: Date.now() });
    }
  }), []);

  return <QueryClientContext.Provider value={value}>{children}</QueryClientContext.Provider>;
}

export type QueryResult<T> = {
  data?: T;
  error?: Error;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  refetch: () => Promise<T>;
};

export function useCachedQuery<T>(key: string, queryFn: () => Promise<T>): QueryResult<T> {
  const client = useContext(QueryClientContext);

  if (!client) {
    throw new Error('useCachedQuery must be used inside QueryClientContainer');
  }

  const cachedData = client.getQueryData<T>(key);
  const [data, setData] = useState<T | undefined>(cachedData);
  const [error, setError] = useState<Error | undefined>();
  const [isLoading, setIsLoading] = useState(!cachedData);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await queryFn();
      client.setQueryData(key, response);
      setData(response);
      return response;
    } catch (caughtError) {
      const normalizedError = caughtError instanceof Error ? caughtError : new Error('Unknown query error');
      client.setQueryError(key, normalizedError);
      setError(normalizedError);
      throw normalizedError;
    } finally {
      setIsLoading(false);
    }
  }, [client, key, queryFn]);

  useEffect(() => {
    if (!cachedData) {
      void refetch();
    }
  }, [cachedData, refetch]);

  return {
    data,
    error,
    isLoading,
    isError: Boolean(error),
    isSuccess: Boolean(data) && !error,
    refetch
  };
}
