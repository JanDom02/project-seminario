// import Image from "next/image";
import Navbar from "@/components/NavBarComponent";
import TituloHeader from "@/components/TitleHeader";
import PrincipleButton from "@/components/PrincipleButton";

import Link from 'next/link'


 
export default function Home() {
  const links = [
    {label: "Incio", href: "/"},
    {label: "Partidos Politicos", href: "/Partidos"},
    {label: "Candidatos", href: "/Candidatos"},
  ]
  return (
    <>
      <div className=" flex justify-center relative">
        <div className=" py-3.5">
          <TituloHeader title="Transparencia Politica" subtitle="Al alcanze de todos..."/>
        </div>
        <Link href="auth/Login">
          <div className="absolute top-0 right-0 p-4">
            <PrincipleButton 
            title="Iniciar Sesion" 
            className="flex font-bold shadow-lg gap-2 cursor-pointer"
            icon = {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>}/>
          </div>
        </Link>
        
        
      </div>
        <Navbar links={links}/>
        <main className="mx-auto max-w-xl">
          <div className="px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h1>Hola</h1>
          </div>
        </main>
    </>
      

  );
}
