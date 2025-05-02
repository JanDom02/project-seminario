"use client";

import Link from "next/link";
import { useUserProfile } from "@/hooks/useUserProfile";
import PrincipleButton from "@/components/PrincipleButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function UserHeader() {
  const { user, profile } = useUserProfile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const {signOut} = useAuth();
  const router = useRouter();
  

  const handleLogout = async () => {
    await signOut();
  }

  if (!user) {
    return (
      <Link href="/login">
        <PrincipleButton 
          title="Iniciar Sesión" 
          className="flex font-bold shadow-lg gap-2 cursor-pointer"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          }
        />
      </Link>
    );
  }

  return (
    <>
        {/*Icono de usuario */}

        <button 
            className="flex items-center gap-2 text-black font-semibold"
            onClick={() => setIsSidebarOpen(true)}
        >
            {profile ? `${profile.nombre} ${profile.apellido}` : "Perfil"}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        </button>

        {/*Sidebar */}
        {isSidebarOpen && (
            <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transition-all ease-in-out duration-300 p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Menú</h2>
              <button onClick={() => setIsSidebarOpen(false)} className="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </button>
            </div>
  
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => {
                    router.push("/panel");
                    setIsSidebarOpen(false);
                  }}
                  className="text-black font-bold hover:underline"
                >
                  Ajustes
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-black font-bold hover:underline"
                >
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </div>
        )}
    </>
    
  );
}
