'use client'

import React, { useState, useEffect } from 'react'
import { Mail, ArrowLeft, Send, CheckCircle, AlertCircle, Utensils, Star, Sparkles, Heart } from 'lucide-react'
import Link from 'next/link'

 

export default function ForgotPasswordForm() {
  const [formData, setFormData] = useState({ correo: '' })
  const [errors, setErrors] = useState<{ correo?: string }>({})
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const validateForm = () => {
    const newErrors: { correo?: string } = {}
    
    if (!formData.correo) {
      newErrors.correo = 'El correo electrónico es requerido'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.correo)) {
      newErrors.correo = 'Ingrese un correo electrónico válido'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const onSubmit = async () => {
    if (!validateForm()) return

    setIsLoading(true)
    
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await res.json()
      
      if (res.ok) {
        setMessage(result.message)
        setIsSuccess(true)
      } else {
        setMessage(result.error)
        setIsSuccess(false)
      }
    } catch (error) {
      setMessage('Error de conexión. Inténtalo de nuevo.')
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
    if (message) {
      setMessage('')
      setIsSuccess(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex items-center justify-center p-4">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-red-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-20 h-20 bg-yellow-200 rounded-full opacity-35 animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-16 w-28 h-28 bg-pink-200 rounded-full opacity-25 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-300 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="w-full max-w-lg relative">
        {/* Tarjeta principal */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 overflow-hidden">
          {/* Header con branding */}
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-8 text-center relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div
                className={`transition-all duration-1000 delay-100 transform ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                {/* Botón de regreso */}
                <button
                  onClick={() => window.history.back()}
                  className="absolute top-0 left-0 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 hover:scale-110 group"
                >
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                </button>

                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    <Utensils className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-white tracking-wide mb-2">
                  Restaurante Diana
                </h1>
                <div className="flex justify-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-300 fill-current" />
                  ))}
                </div>
                <p className="text-orange-100 text-sm">Recuperación de cuenta</p>
              </div>
            </div>
          </div>

          {/* Contenido del formulario */}
          <div className="p-8">
            <div
              className={`text-center mb-8 transition-all duration-700 delay-300 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                ¿Olvidaste tu contraseña?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                No te preocupes, es más común de lo que piensas. 
                <br />
                <span className="text-orange-600 font-medium">Te enviaremos un enlace para restablecerla</span>
              </p>
            </div>

            {/* Mensaje de estado */}
            {message && (
              <div
                className={`mb-6 p-4 rounded-2xl border-2 transition-all duration-500 ${
                  isSuccess
                    ? 'bg-green-50 border-green-200 text-green-800'
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {isSuccess ? (
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  )}
                  <p className="font-medium">{message}</p>
                </div>
              </div>
            )}

            {!isSuccess && (
              <div className="space-y-6">
                {/* Campo de email */}
                <div
                  className={`transition-all duration-700 delay-500 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Correo electrónico
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-6 h-6 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                    </div>
                    <input
                      type="email"
                      value={formData.correo}
                      onChange={(e) => handleInputChange('correo', e.target.value)}
                      className={`w-full pl-14 pr-4 py-5 text-lg rounded-2xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                        errors.correo 
                          ? "border-red-400 focus:border-red-500" 
                          : "border-gray-200 focus:border-orange-500 hover:border-gray-300"
                      }`}
                      placeholder="tu@email.com"
                    />
                  </div>
                  {errors.correo && (
                    <p className="mt-3 text-red-500 flex items-center font-medium">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      {errors.correo}
                    </p>
                  )}
                </div>

                {/* Botón de envío */}
                <div
                  className={`transition-all duration-700 delay-600 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <button
                    onClick={onSubmit}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-3">
                      {isLoading ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          <span>Enviar enlace de recuperación</span>
                        </>
                      )}
                    </div>
                  </button>
                </div>

                {/* Enlaces adicionales */}
                <div
                  className={`text-center pt-6 border-t border-gray-200 transition-all duration-700 delay-700 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <p className="text-gray-600 mb-4">
                    ¿Recordaste tu contraseña?
                  </p>
                  <Link
                    href="/auth/log"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-lg transition-colors hover:underline group"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                    Volver al inicio de sesión
                  </Link>
                </div>
              </div>
            )}

            {/* Mensaje de éxito con opciones */}
            {isSuccess && (
              <div className="text-center space-y-6">
                <div className="bg-green-100 p-8 rounded-3xl">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    ¡Correo enviado!
                  </h3>
                  <p className="text-green-700 text-lg">
                    Revisa tu bandeja de entrada y sigue las instrucciones
                  </p>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    onClick={() => window.location.reload()}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Enviar de nuevo
                  </button>
                  <a
                    href="/auth/login"
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Ir al login
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-8 text-center transition-all duration-1000 delay-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-gray-500 flex items-center justify-center space-x-2">
            <Heart className="w-4 h-4 text-red-400" />
            <span>Hecho con amor para Restaurante Diana</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </p>
        </div>
      </div>
    </div>
  )
}