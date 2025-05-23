import React, { useState, useEffect } from 'react';
import { XCircle, X, Zap, Sparkles } from 'lucide-react';

interface AlertWithModalProps {
  isOpen: boolean;
  onClose: (isOpen?: boolean) => void;
  message: string;
}

// Componente de partículas flotantes
const FloatingParticles = ({ isVisible }: { isVisible: boolean }) => {
  const particleCount = 8;
  const particles = Array.from({ length: particleCount }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-white rounded-full opacity-0 ${
            isVisible ? 'animate-ping' : ''
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export function AlertWithModal({ isOpen, onClose, message }: AlertWithModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      setShowSparkles(true);
    } else {
      setIsAnimating(false);
      setShowSparkles(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop mejorado */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 z-10"
        onClick={() => onClose(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-pink-900/20" />
      </div>
      
      {/* Contenedor del modal */}
      <div className="flex min-h-full items-center justify-center p-4 relative z-20">
        <div 
          className={`relative w-full max-w-md transform transition-all duration-700 ${
            isAnimating 
              ? 'opacity-100 scale-100 translate-y-0 rotate-0' 
              : 'opacity-0 scale-95 translate-y-8 rotate-1'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Efectos de fondo del modal */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white/90 backdrop-blur-xl rounded-3xl z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-rose-500 to-red-600 opacity-5 rounded-3xl z-10" />
          
          {/* Partículas flotantes */}
          <FloatingParticles isVisible={showSparkles} />
          
          {/* Contenido principal */}
          <div className="relative bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden z-30">
            {/* Header con efectos */}
            <div className="relative p-8 pb-6 z-40">
              {/* Botón de cerrar mejorado */}
              <button
                onClick={() => onClose(true)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100/80 hover:bg-gray-200/80 text-gray-500 hover:text-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-90 group z-50 cursor-pointer"
              >
                <X className="w-5 h-5 transition-transform group-hover:scale-110" />
              </button>
              
              {/* Icono principal con efectos */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative bg-red-100 p-4 rounded-2xl shadow-lg">
                  <XCircle className="w-8 h-8 text-red-600" />
                  
                  {/* Efectos de brillo */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/30 to-transparent" />
                  
                  {/* Anillo pulsante */}
                  <div className="absolute inset-0 rounded-2xl bg-white opacity-50 animate-ping" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Error
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">Notificación del sistema</span>
                  </div>
                </div>
              </div>
              
              {/* Mensaje con efectos de tipografía */}
              <div className="relative">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {message}
                </p>
                
                {/* Decoración sutil */}
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-transparent via-red-300 to-transparent opacity-30" />
              </div>
            </div>
            
            {/* Footer con botones mejorados */}
            <div className="px-8 pb-8 relative z-50">
              <div className="flex space-x-4 relative z-50">
                <button
                  onClick={() => onClose(false)}
                  className="flex-1 cursor-pointer bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group z-50"
                  style={{ position: 'relative', zIndex: 100 }}
                >
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  <div className="relative flex items-center justify-center space-x-2 z-10">
                    <span>Entendido</span>
                  </div>
                </button>
                
                <button
                  onClick={() => onClose(false)}
                  className="px-6 py-4 cursor-pointer rounded-2xl font-semibold text-gray-700 bg-gray-100/80 hover:bg-gray-200/80 transition-all duration-300 hover:scale-105 flex items-center space-x-2 relative z-50"
                  style={{ position: 'relative', zIndex: 100 }}
                >
                  <Zap className="w-5 h-5" />
                  <span>Reintentar</span>
                </button>
              </div>
              
              {/* Información adicional */}
              <div className="mt-4 text-center relative z-40">
                <p className="text-xs text-gray-400 flex items-center justify-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Restaurante Diana • Sistema de alertas</span>
                  <Sparkles className="w-3 h-3" />
                </p>
              </div>
            </div>
          </div>
          
          {/* Efectos de brillo exterior */}
          <div className="absolute -inset-1 bg-gradient-to-r from-white via-white to-red-200 rounded-3xl opacity-20 blur-xl animate-pulse z-0" />
        </div>
      </div>
    </div>
  );
}