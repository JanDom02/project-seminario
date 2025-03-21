import React from "react";
// import { TitleHeaderStyles } from "@/styles/titleHeaderStyles";

// type Styles = typeof TitleHeaderStyles

type TituloProps = {
    title: string
    subtitle: string
}

export default function TituloHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center"> {/* Esto centra todo el contenido */}
      <h1 className="text-2xl font-bold">{title}</h1>
      <span className="text-lg font-medium text-black">{subtitle}</span> {/* Se cambió de font-thin a font-medium */}
    </div>
  );
}
