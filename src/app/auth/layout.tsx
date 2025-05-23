import { Toaster } from "react-hot-toast";

 
 

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-layout">
       <Toaster position="top-center" />
      {children}
    </div>
  )
}
