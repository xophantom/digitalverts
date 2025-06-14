'use client';

import React, { useEffect, useState } from 'react';
import { useApi } from '@/context/ApiContext';

export default function HeroSection() {
  const { registerButtonClick } = useApi();
  const [logoOpacity, setLogoOpacity] = useState(0.001);
  const [logoSize, setLogoSize] = useState(256); // 256px = w-64 h-64
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const maxOpacity = 0.6;
      const minOpacity = 0.001;
      const scrollThreshold = windowHeight * 0.5; 
      
      // Calcula opacidade do logo (aumenta com scroll)
      const logoOpacityValue = Math.min(
        maxOpacity,
        minOpacity + (scrollPosition / scrollThreshold) * (maxOpacity - minOpacity)
      );
      
      // Calcula tamanho do logo (aumenta com scroll)
      const minSize = 256; // w-64 h-64
      const maxSize = 512; // w-128 h-128
      const logoSizeValue = Math.min(
        maxSize,
        minSize + (scrollPosition / scrollThreshold) * (maxSize - minSize)
      );
      
      // Calcula opacidade do texto (diminui com scroll)
      const textOpacityValue = Math.max(
        0,
        1 - (scrollPosition / scrollThreshold) * 1.2 // 1.2 para começar a desaparecer antes
      );
      
      setLogoOpacity(logoOpacityValue);
      setLogoSize(logoSizeValue);
      setTextOpacity(textOpacityValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = async (buttonId: string) => {
    try {
      await registerButtonClick(buttonId, 'hero-section', {
        timestamp: new Date().toISOString(),
        section: 'hero'
      });
    } catch (error) {
      console.error('Erro ao registrar clique:', error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Logo animado no background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="animate-spin-slow"
          style={{
            backgroundImage: 'url(/verts-logo-white.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animationDirection: 'reverse',
            opacity: logoOpacity,
            width: `${logoSize}px`,
            height: `${logoSize}px`,
            transition: 'opacity 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out'
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="scroll-animate">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{
              opacity: textOpacity,
              transition: 'opacity 0.1s ease-out'
            }}
          >
            <span className="block animate-delay-100">Transforme</span>
            <span className="block text-blue-400 animate-delay-200">Sua Visão</span>
            <span className="block animate-delay-300">Em Realidade</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-delay-400"
            style={{
              opacity: textOpacity,
              transition: 'opacity 0.1s ease-out'
            }}
          >
          Soluções digitais sob medida para automatizar, integrar e escalar seu negócio com eficiência e inteligência.

          Na Digital Verts, desenvolvemos tecnologia de forma humanizada para impulsionar resultados reais. Inovamos com propósito, conectamos com estratégia.

          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-delay-400"
            style={{
              opacity: textOpacity,
              transition: 'opacity 0.1s ease-out'
            }}
          >
            <button 
              onClick={() => handleButtonClick('hero-cta-primary')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Começar Agora
            </button>
            <button 
              onClick={() => handleButtonClick('hero-cta-secondary')}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 