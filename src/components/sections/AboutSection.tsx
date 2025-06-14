"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da esquerda */}
          <div className="scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sobre a Digital Verts
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              A Digital Verts nasceu para conectar negócios à tecnologia de
              forma humanizada e eficiente. Criamos soluções digitais sob medida
              que automatizam processos, otimizam tempo e impulsionam o sucesso
              dos nossos clientes. Acreditamos que inovação só faz sentido
              quando traz resultados reais — e é isso que entregamos todos os
              dias.
            </p>
          </div>

          {/* Coluna da direita */}
          <div className="scroll-animate">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-full">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Nossa Missão
                    </h3>
                    <p className="text-gray-300">
                      Desenvolver soluções digitais personalizadas que resolvem
                      problemas reais e melhoram o dia a dia dos nossos
                      clientes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-900 p-3 rounded-full">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Nossa Visão
                    </h3>
                    <p className="text-gray-300">
                      Ser referência em tecnologia sob demanda, entregando
                      inovação com simplicidade, impacto e proximidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-900 p-3 rounded-full">
                    <span className="text-2xl">💎</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Nossos Valores
                    </h3>
                    <p className="text-gray-300">
                      Humanização, eficiência, transparência, inovação com
                      propósito e foco total no resultado do cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
