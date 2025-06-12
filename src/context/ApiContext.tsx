'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ApiResponse {
  status: string;
  message: string;
  timestamp: string;
  environment?: string;
  data?: Record<string, unknown>;
}

interface ApiContextType {
  healthCheck: () => Promise<ApiResponse>;
  postData: (data: Record<string, unknown>) => Promise<ApiResponse>;
  loading: boolean;
  error: string | null;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi deve ser usado dentro de um ApiProvider');
  }
  return context;
};

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const healthCheck = async (): Promise<ApiResponse> => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('Fazendo health check...');
      const response = await fetch('/api/healthcheck');
      const data = await response.json();
      console.log('Health check response:', response.status, data);
      
      if (!response.ok) {
        throw new Error(data.message || 'Erro na requisição');
      }
      
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const postData = async (data: Record<string, unknown>): Promise<ApiResponse> => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('Fazendo POST com dados:', data);
      const response = await fetch('/api/healthcheck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const responseData = await response.json();
      console.log('POST response:', response.status, responseData);
      
      if (!response.ok) {
        throw new Error(responseData.message || 'Erro na requisição');
      }
      
      return responseData;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value: ApiContextType = {
    healthCheck,
    postData,
    loading,
    error,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}; 