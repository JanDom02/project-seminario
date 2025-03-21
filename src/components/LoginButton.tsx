"use client";

import React from "react";
import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="/login" className="flex items-center gap-2 bg-black text-black px-4 py-2 rounded">
      <img src="/img/icono de usuario.png" alt="Usuario" className="w-6 h-6" />
      <span className="font-semibold">Iniciar Sesión</span>
    </Link>
  );
}
