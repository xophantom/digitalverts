'use client';

import React from 'react';
import { useApi } from '@/context/ApiContext';

export default function ContactSection() {
  const { registerButtonClick } = useApi();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await registerButtonClick('contact-form-submit', 'contact-section', {
        timestamp: new Date().toISOString(),
        section: 'contact',
        formType: 'contact'
      });
      
      alert('Formulário enviado! (Clique registrado)');
    } catch (error) {
      console.error('Erro ao registrar clique:', error);
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="scroll-animate">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Conte-nos mais sobre seu projeto..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          {/* Informações de contato */}
          <div className="scroll-animate">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Informações de Contato
                </h3>
                <p className="text-gray-300 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-900 p-3 rounded-full">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Endereço</h4>
                    <p className="text-gray-300">
                      Rua Lorem Ipsum, 123<br />
                      São Paulo, SP - 01234-567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-900 p-3 rounded-full">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">contato@empresa.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-900 p-3 rounded-full">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Telefone</h4>
                    <p className="text-gray-300">(11) 99999-9999</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="font-semibold text-white mb-4">Siga-nos</h4>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => registerButtonClick('social-facebook', 'contact-section', { platform: 'facebook' })}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300"
                  >
                    📘
                  </button>
                  <button 
                    onClick={() => registerButtonClick('social-twitter', 'contact-section', { platform: 'twitter' })}
                    className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-colors duration-300"
                  >
                    🐦
                  </button>
                  <button 
                    onClick={() => registerButtonClick('social-instagram', 'contact-section', { platform: 'instagram' })}
                    className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-colors duration-300"
                  >
                    📷
                  </button>
                  <button 
                    onClick={() => registerButtonClick('social-linkedin', 'contact-section', { platform: 'linkedin' })}
                    className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full transition-colors duration-300"
                  >
                    💼
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 