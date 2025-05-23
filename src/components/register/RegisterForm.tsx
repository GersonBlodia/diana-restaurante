"use client"
import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Check, X, ChefHat, Utensils, Star } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface SignupFormData {
  username: string;
  email: string;
  password: string;
  dni: string;
}

export const TravelSignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    username: '',
    email: '',
    password: '',
    dni: ''
  });
  const [errors, setErrors] = useState<Partial<SignupFormData>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  const quotes = [
    "La buena comida es el ingrediente de una vida feliz.",
    "Cada plato es una historia contada con sabores únicos.",
    "En Diana, transformamos ingredientes en experiencias inolvidables.",
    "El arte culinario es nuestra pasión, tu satisfacción nuestra meta.",
    "Donde la tradición se encuentra con la innovación gastronómica.",
    "Cada visita es una nueva aventura para tu paladar.",
    "La excelencia culinaria comienza con ingredientes de calidad.",
    "Tu mesa nos espera, tu sonrisa nos inspira."
  ];

  // Animate entrance
  useEffect(() => {
    setIsVisible(true);
    
    // Quote rotation
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Password strength calculation
  useEffect(() => {
    if (!formData.password) {
      setPasswordStrength(0);
      return;
    }
    
    let strength = 0;
    
    // Length check
    if (formData.password.length >= 8) strength += 20;
    
    // Contains uppercase
    if (/[A-Z]/.test(formData.password)) strength += 20;
    
    // Contains lowercase
    if (/[a-z]/.test(formData.password)) strength += 20;
    
    // Contains number
    if (/[0-9]/.test(formData.password)) strength += 20;
    
    // Contains special character
    if (/[^A-Za-z0-9]/.test(formData.password)) strength += 20;
    
    setPasswordStrength(strength);
  }, [formData.password]);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const getStrengthColor = () => {
    if (passwordStrength < 40) return 'bg-red-500';
    if (passwordStrength < 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };
  
  const getStrengthText = () => {
    if (passwordStrength < 40) return 'Débil';
    if (passwordStrength < 80) return 'Media';
    return 'Fuerte';
  };

  const validateForm = () => {
    const newErrors: Partial<SignupFormData> = {};

    // Username validation
    if (!formData.username) {
      newErrors.username = 'El nombre de usuario es requerido';
    } else if (formData.username.length < 3) {
      newErrors.username = 'El nombre de usuario debe tener al menos 3 caracteres';
    }

    // DNI validation
    if (!formData.dni) {
      newErrors.dni = 'El DNI es requerido';
    } else if (!/^[0-9]{8}$/.test(formData.dni)) {
      newErrors.dni = 'El DNI debe tener 8 dígitos';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof SignupFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const onSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          correo: formData.email,
          contrasena: formData.password,
          dni: formData.dni,
          userName: formData.username
        })
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        // Toast notification would go here
        toast.error('Error en el registro:', result.error || 'Error en el registro');
        return;
      }

      // Success toast would go here
      toast.success('Registro exitoso');
   
    } catch (error) {
      console.error('Error en el registro:', error);
      // Toast notification would go here
      console.error('Ocurrió un error inesperado. Intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50">
      <div className={`m-auto w-full h-screen  overflow-hidden flex flex-col md:flex-row shadow-2xl transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-10 bg-white relative overflow-y-scroll">
          <div className="relative z-10">
            <div className={`mb-8 transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-2xl mr-4">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-1">Únete a Restaurante Diana</h1>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Comienza tu experiencia gastronómica con nosotros. Accede a reservas exclusivas, 
                menús especiales y beneficios únicos para miembros de nuestra comunidad culinaria.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative group">
                  <input
                    id="username"
                    type="text"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    className="w-full bg-gray-50 border-2 border-gray-200 text-gray-800 px-4 py-4 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300 placeholder-gray-500"
                    placeholder="Nombre de usuario"
                  />
                </div>
                {errors.username && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.username}
                  </p>
                )}
              </div>
              
              <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative group">
                  <input
                    id="dni"
                    type="text"
                    value={formData.dni}
                    onChange={(e) => handleInputChange('dni', e.target.value)}
                    className="w-full bg-gray-50 border-2 border-gray-200 text-gray-800 px-4 py-4 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300 placeholder-gray-500"
                    placeholder="DNI (8 dígitos)"
                  />
                </div>
                {errors.dni && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.dni}
                  </p>
                )}
              </div>
              
              <div className={`transition-all duration-700 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative group">
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full bg-gray-50 border-2 border-gray-200 text-gray-800 px-4 py-4 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300 placeholder-gray-500"
                    placeholder="Correo electrónico"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div className={`transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative group">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full bg-gray-50 border-2 border-gray-200 text-gray-800 px-4 py-4 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300 placeholder-gray-500"
                    placeholder="Crear contraseña"
                  />
                  <button 
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-500 flex items-center">
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                    {errors.password}
                  </p>
                )}
                
                {/* Password strength meter */}
                {formData.password && (
                  <div className="mt-4 space-y-3">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getStrengthColor()} transition-all duration-500 ease-out`} 
                        style={{ width: `${passwordStrength}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Seguridad: {getStrengthText()}</p>
                    
                    {/* Password requirements */}
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        {/[A-Z]/.test(formData.password) ? 
                          <Check size={16} className="text-green-500 flex-shrink-0" /> : 
                          <X size={16} className="text-red-500 flex-shrink-0" />
                        }
                        <span className="text-gray-600">Al menos una letra mayúscula</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {/[a-z]/.test(formData.password) ? 
                          <Check size={16} className="text-green-500 flex-shrink-0" /> : 
                          <X size={16} className="text-red-500 flex-shrink-0" />
                        }
                        <span className="text-gray-600">Al menos una letra minúscula</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {/[0-9]/.test(formData.password) ? 
                          <Check size={16} className="text-green-500 flex-shrink-0" /> : 
                          <X size={16} className="text-red-500 flex-shrink-0" />
                        }
                        <span className="text-gray-600">Al menos un número</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {/[^A-Za-z0-9]/.test(formData.password) ? 
                          <Check size={16} className="text-green-500 flex-shrink-0" /> : 
                          <X size={16} className="text-red-500 flex-shrink-0" />
                        }
                        <span className="text-gray-600">Al menos un carácter especial (@, &, etc)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {formData.password.length >= 8 ? 
                          <Check size={16} className="text-green-500 flex-shrink-0" /> : 
                          <X size={16} className="text-red-500 flex-shrink-0" />
                        }
                        <span className="text-gray-600">Mínimo 8 caracteres</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className={`pt-4 transition-all duration-700 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <button
                  onClick={onSubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Registrando...</span>
                      </>
                    ) : (
                      <>
                        <Utensils className="w-5 h-5" />
                        <span>Crear Mi Cuenta</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>


               <div className="relative z-10 mt-8 text-center w-full">
            <Link href="/auth/log" className="text-black text-lg">
              ¿Ya tienes una cuenta? 
              <span className="font-semibold underline hover:no-underline hover:text-yellow-200 transition-colors ml-2">
                Iniciar sesión
              </span>
            </Link>
          </div>
          </div>

          
        </div>
        
        {/* Right side - Quote */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 flex flex-col justify-between items-center p-10 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="restaurant-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="2" fill="white" opacity="0.3"/><circle cx="75" cy="75" r="2" fill="white" opacity="0.2"/><circle cx="25" cy="75" r="1.5" fill="white" opacity="0.4"/><circle cx="75" cy="25" r="1.5" fill="white" opacity="0.3"/></pattern></defs><rect width="1000" height="1000" fill="url(%23restaurant-pattern)"/></svg>')`
            }}
          ></div>

          {/* Quotes section */}
          <div className="w-full h-full flex flex-col justify-center items-center relative z-10">
            <div className="text-7xl text-white opacity-40 mb-6 font-serif">"</div>
            <div className="relative w-full h-32">
              {quotes.map((quote, index) => (
                <p
                  key={index}
                  className={`absolute top-0 left-0 w-full text-center text-2xl italic text-white font-light leading-relaxed transition-all duration-1000 ease-in-out ${
                    activeQuote === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {quote}
                </p>
              ))}
            </div>

            {/* Quote navigation dots */}
            <div className="flex gap-3 mt-8">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeQuote === index ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/70'
                  }`}
                  onClick={() => setActiveQuote(index)}
                />
              ))}
            </div>
          </div>

          {/* Sign in link */}
       
        </div>
      </div>
    </div>
  );
};