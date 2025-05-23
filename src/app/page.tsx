import Link from "next/link";

 
export default function Home() {
  return (
    <>
         <Link 
         className='block bg-indigo-600 text-white  text-center rounded p-2 cursor-pointer'
         href={'/auth/log'}>Inicio de Sesion</Link>
    </>
  );
}
