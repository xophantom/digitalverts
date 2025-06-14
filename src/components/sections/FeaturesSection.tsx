'use client';

import React from 'react';

const features = [
  {
    icon: '🚀',
    title: 'Performance Excepcional',
    description: 'Desenvolvimento de sistemas robustos e personalizados, com foco em velocidade, estabilidade e escalabilidade.'
  },
  {
    icon: '🛡️',
    title: 'Segurança Garantida',
    description: 'Implantamos soluções com arquitetura segura, criptografia de dados e boas práticas de proteção digital.'
  },
  {
    icon: '⚡',
    title: 'Velocidade Máxima',
    description: 'Automatizamos rotinas e conectamos plataformas para você ganhar tempo e eliminar retrabalho.'
  },
  {
    icon: '🎯',
    title: 'Precisão Total',
    description: 'Sistemas inteligentes que controlam estoque, vendas, agendamentos, fluxo financeiro e muito mais.'
  },
  {
    icon: '🔧',
    title: 'Fácil Integração',
    description: 'Integramos ERPs, CRMs, WhatsApp e APIs diversas para unificar e otimizar processos internos.'
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Soluções responsivas e modernas, pensadas para funcionar com excelência em todos os dispositivos.'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Soluções Sob Medida Para Seu Negócio
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Entregamos tecnologia feita especialmente para sua realidade, com performance, automação e foco em resultado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="scroll-animate p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 