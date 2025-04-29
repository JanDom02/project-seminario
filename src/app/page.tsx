"use client"
import Image from "next/image";
import Navbar from "@/components/NavBarComponent";
import TituloHeader from "@/components/TitleHeader";
import PrincipleButton from "@/components/PrincipleButton";

import Link from 'next/link'
import { useUserProfile } from "@/hooks/useUserProfile";
 
export default function Home() {
  const { user, profile } = useUserProfile();
  const links = [
    {label: "Inicio", href: "/"},
    {label: "Partidos Politicos", href: "/Partidos"},
    {label: "Candidatos", href: "/Candidatos"},
  ]
  return (
  <>
    <div className="flex justify-center relative">
      <div className="py-3.5">
        <TituloHeader title="Transparencia Politica" subtitle="Al alcanze de todos..." />
      </div>
      <div className="absolute top-0 right-0 p-4">
        {!user ? (
          <Link href="/login">
            <PrincipleButton
              title="Iniciar Sesion"
              className="flex font-bold shadow-lg gap-2 cursor-pointer"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 
                    7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0
                    m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 
                    1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              }
            />
          </Link>
        ) : (
          <div className="flex items-center gap-2 text-black font-semibold">
            {profile ? `${profile.nombre} ${profile.apellido}` : "Perfil"}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 
                7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0
                m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 
                1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
        )}
      </div>
    </div>

    <Navbar links={links}/>
    <main className="mx-auto max-w-xl">
      <div className="px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Image src="/img/PersonasVotando.png" alt="Imagen de personas votando" width={900} height={900}/>
        <h1 className="font-bold text-center text-2xl mt-10 text-black">
          TRANSPARENCIA POLÍTICA <br />
          <span className="block">EN</span>  
          TIEMPO REAL
        </h1>
      </div>
    </main>
  </>
      
  );
}
