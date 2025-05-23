"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ChefHat, Eye, EyeOff, Lock, Mail, Star } from "lucide-react";
 
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
 
import toast from "react-hot-toast";
import { AlertWithModal } from "./AlertWithModal";
import Image from "next/image";
import Link from "next/link";
 
interface LoginFormData {
  correo: string;
  password: string;
  rememberMe: boolean;
}

export const LuxoraLoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [authError, setAuthError] = React.useState<string | null>(null);
  const [isActive, setIsActive] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const router = useRouter();

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const onSubmit = async (data: LoginFormData) => {
    const res = await signIn("credentials", {
      redirect: false,
      correo: data.correo,
      contrasena: data.password,
    });
    console.log(res?.error)
     if (res?.error) {
    setAuthError(res.error);
    setIsActive(true);
    
    return;
  }

    if (res?.ok) {
      setAuthError("");
      setIsActive(true); // Activamos el modal solo una vez
      toast.success("¡Inicio de sesión exitoso!");
      router.push("/dashboard");
    }
 
    // Here you would typically handle authentication
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (authError && isActive) {
      const timer = setTimeout(() => {
        setIsActive(false); // Cerramos el modal después de cierto tiempo
      }, 3000); // 3 segundos de espera antes de cerrar el modal
      return () => clearTimeout(timer);
    }
  }, [authError, isActive]);
  return (
    <div className="flex min-h-screen bg-sky-50">
      <div
        className={`m-auto w-full  rounded-3xl overflow-hidden flex flex-col md:flex-row bg-white shadow-xl transition-all duration-700 ease-in-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
        <div className="bg-gradient-to-r from-amber-800 via-amber-700 to-orange-700 p-8 text-center relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div
                className={`transition-all duration-1000 delay-100 transform ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    <ChefHat className="w-8 h-8 text-white" />
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
                <p className="text-amber-100 text-sm">Experiencia gastronómica única</p>
              </div>
            </div>
          </div>


          <div
            className={`transition-all duration-700 delay-200 transform ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
              }`}
          >
           <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Bienvenido de vuelta
              </h2>
              <p className="text-gray-600 text-sm">
                Inicia sesión para acceder a tu cuenta
              </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div
              className={`transition-all duration-700 delay-500 transform ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
            >
               
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
 <div className="relative group">

<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                  </div>
              <input
                id="email"
                type="email"
               className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                      errors.correo 
                        ? "border-red-400 focus:border-red-500" 
                        : "border-gray-200 focus:border-amber-500 hover:border-gray-300"
                    }`}
                placeholder="johncanny@gmail.com"
                {...register("correo", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
 </div>
                
              {errors.correo && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.correo.message}
                </p>
              )}
            </div>

            <div
              className={`transition-all duration-700 delay-600 transform ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
            >
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
   <div className="relative group">

 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                  </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className={`w-full pl-12 pr-12 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                      errors.password 
                        ? "border-red-400 focus:border-red-500" 
                        : "border-gray-200 focus:border-amber-500 hover:border-gray-300"
                    }`}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 3,//poner 8
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
   </div>
                
                 <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-amber-600 transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

          <div
                className={`flex justify-end transition-all duration-700 delay-700 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-gray-600 hover:text-amber-700 transition-colors font-medium hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

          <div
                className={`text-center pt-4 border-t border-gray-200 transition-all duration-700 delay-900 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-gray-600 text-sm mb-2">
                  ¿No tienes una cuenta?
                </p>
                <Link
                  href="/auth/register"
                  className="inline-flex items-center text-amber-700 hover:text-amber-800 font-semibold text-sm transition-colors hover:underline"
                >
                  Crear cuenta nueva
                  <span className="ml-1">→</span>
                </Link>
              </div>

            <div
              className={`transition-all duration-700 delay-800 transform ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
            >
              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-3 rounded-lg hover:bg-amber-900 hover:shadow-lg transform hover:-translate-y-0.5 transition-all font-medium"
              >
                Iniciar Sesion
              </button>
            </div>
          </form>
        </div>

        {/* Right side - Image */}
        <div
          className={`w-full md:w-1/2 bg-amber-100 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="relative w-full h-screen"> {/* Altura completa de la pantalla */}
  <Image
    src="/Diana.jpg"
    alt="Dental care"
    fill           // Ocupa todo el espacio del contenedor padre
    className="object-cover" // Cubre todo el área sin distorsión
    quality={100}   // Máxima calidad (opcional, por defecto es 75)
    priority       // Precarga si es importante (opcional)
    sizes="100vw"  // Optimización para diferentes tamaños de pantalla
  />
</div>
        </div>
      </div>

     {authError && (
  <AlertWithModal
    isOpen={isActive}
    onClose={() => setIsActive(false)}
    message={authError}
  />
)}
    </div>
  );
};
