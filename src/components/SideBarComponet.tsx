"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [openPartidos, setOpenPartidos] = useState(true);
  const [openCandidatos, setOpenCandidatos] =useState(true);

  const ChevronIcon = ({open}: {open: boolean}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  );

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white text-black shadow-md px-6 py-6 space-y-6">
      <h1 className="text-xl font-bold">Transparencia <br />Politica</h1>

      <div>
        <button className="flex items-center justify-between w-full font-semibold" onClick={() => setOpenPartidos(!openPartidos)}>
        <span>Partidos</span>
        <ChevronIcon open={openPartidos} />
        </button>
        {openPartidos && (
          <div className="ml-4 mt-2 space-y-2 text-sm">
            <Link href="/partidos/propuestas" className="block hover:underline">Propuestas</Link>
            <Link href="/partidos/presupuesto" className="block hover:underline">Presupuesto</Link>
            <Link href="/partidos/visuales" className="block hover:underline">Visuales</Link>
            <Link href="/partidos/info" className="block hover:underline">Información general</Link>
        </div>
        )}
      </div>

      {/* Sección Candidatos */}
      <div>
        <button
          className="flex items-center justify-between w-full font-semibold" onClick={() => setOpenCandidatos(!openCandidatos)}>
          <span>Candidato</span>
          <ChevronIcon open={openCandidatos} />
        </button>
        {openCandidatos && (
          <div className="ml-4 mt-2 space-y-2 text-sm">
            <Link href="/candidatos/propuestas" className="block hover:underline">Propuestas</Link>
            <Link href="/candidatos/presupuesto" className="block hover:underline">Presupuesto</Link>
            <Link href="/candidatos/visuales" className="block hover:underline">Visuales</Link>
            <Link href="/candidatos/info" className="block hover:underline">Información general</Link>
          </div>
        )}
      </div>

    </div>
      
  );
}
