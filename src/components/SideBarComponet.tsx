"use client"; // Necesario porque usamos useState

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Icono del menú de hamburguesa */}
      {!isOpen && (
          <button
          className="absolute top-4 left-4 p-2 cursor-pointer"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú"
        >
          <Image src="/img/MenuHambuerguesa.png" alt="Menú" width={40} height={40} />
        </button>
      )}
      

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black  transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Botón para cerrar */}
        <button 
        className="p-5 cursor-pointer"
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar menú"
        >
          <Image src="/img/IconoFlecha.png" alt="Flecha atras" width={40} height={40}/>
        </button>

        {/* Contenido del sidebar */}
        <nav className="mt-2 p-4 space-y-4">
          <Link href="/" className="block py-3 px-4 border-b border-gray-400 mb-5 font-bold">Inicio</Link>
          <Link href="/partidos" className="block py-3 px-4 border-b border-gray-400 mb-5 font-bold">Partidos Políticos</Link>
          <Link href="/candidatos" className="block py-3 px-4 border-b border-gray-400 mb-5 font-bold">Candidatos</Link>
          <Link href="/presupuesto" className="block py-3 px-4 border-b border-gray-400 mb-5 font-bold">Presupuesto</Link>
        </nav>
      </div>

      {/* Fondo oscuro cuando el sidebar está abierto */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}
    </>
  );
}
