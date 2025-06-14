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
    <div className="p-6 max-w-2xl mx-auto bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">Teste da API Full-Stack</h2>
      
      <div className="space-y-4">
        <div>
          <button
            onClick={handleHealthCheck}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-4 transition-colors duration-300"
          >
            {loading ? 'Carregando...' : 'Health Check (GET)'}
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Dados para POST (JSON):
          </label>
          <textarea
            value={postInput}
            onChange={(e) => {
              setPostInput(e.target.value);
              setJsonError('');
            }}
            placeholder='{"nome": "João", "idade": 30}'
            className="w-full p-2 border border-gray-600 rounded mb-2 h-20 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {jsonError && (
            <div className="text-red-400 text-sm mb-2">{jsonError}</div>
          )}
          <button
            onClick={handlePostData}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            {loading ? 'Enviando...' : 'Enviar POST'}
          </button>
        </div>

        {error && (
          <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded">
            <strong>Erro:</strong> {error}
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">
            {loading ? 'Carregando...' : 'Resposta da API:'}
          </h3>
          {loading && !response && (
            <div className="bg-gray-700 p-4 rounded text-sm text-gray-300">
              Aguardando resposta...
            </div>
          )}
          {response && (
            <pre className="bg-gray-700 p-4 rounded overflow-auto text-sm text-gray-300">
              {response}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
} 