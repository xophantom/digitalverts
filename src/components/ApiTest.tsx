'use client';

import { useState } from 'react';
import { useApi } from '@/context/ApiContext';

export default function ApiTest() {
  const { healthCheck, postData, loading, error } = useApi();
  const [response, setResponse] = useState<string>('');
  const [postInput, setPostInput] = useState<string>('');
  const [jsonError, setJsonError] = useState<string>('');

  const handleHealthCheck = async () => {
    try {
      const result = await healthCheck();
      console.log('Health check result:', result);
      setResponse(JSON.stringify(result, null, 2));
      setJsonError('');
    } catch (err) {
      console.error('Erro no health check:', err);
    }
  };

  const handlePostData = async () => {
    setJsonError('');
    
    try {
      let data: Record<string, unknown>;
      
      if (postInput.trim()) {
        try {
          data = JSON.parse(postInput);
        } catch {
          setJsonError('JSON inválido. Verifique a sintaxe.');
          return;
        }
      } else {
        data = { message: 'Teste POST' };
      }
      
      const result = await postData(data);
      console.log('POST result:', result);
      setResponse(JSON.stringify(result, null, 2));
    } catch (err) {
      console.error('Erro no POST:', err);
      setResponse('Erro na requisição: ' + (err instanceof Error ? err.message : 'Erro desconhecido'));
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Teste da API Full-Stack</h2>
      
      <div className="space-y-4">
        <div>
          <button
            onClick={handleHealthCheck}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded mr-4"
          >
            {loading ? 'Carregando...' : 'Health Check (GET)'}
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Dados para POST (JSON):
          </label>
          <textarea
            value={postInput}
            onChange={(e) => {
              setPostInput(e.target.value);
              setJsonError('');
            }}
            placeholder='{"nome": "João", "idade": 30}'
            className="w-full p-2 border border-gray-300 rounded mb-2 h-20"
          />
          {jsonError && (
            <div className="text-red-600 text-sm mb-2">{jsonError}</div>
          )}
          <button
            onClick={handlePostData}
            disabled={loading}
            className="bg-green-500 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded"
          >
            {loading ? 'Enviando...' : 'Enviar POST'}
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <strong>Erro:</strong> {error}
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold mb-2">
            {loading ? 'Carregando...' : 'Resposta da API:'}
          </h3>
          {loading && !response && (
            <div className="bg-gray-100 p-4 rounded text-sm text-gray-800">
              Aguardando resposta...
            </div>
          )}
          {response && (
            <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm text-gray-800">
              {response}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
} 