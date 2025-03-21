// import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full mt-[-38px]">
      <img 
        src="/img/Personas Votando.png" 
        alt="Descripción de la imagen" 
        className="w-auto max-w-none h-auto scale-88"
      />
      <h1 className="font-bold text-center text-2xl leading-tight">
        TRANSPARENCIA POLÍTICA <br />
        <span className="block">EN</span>  
        TIEMPO REAL
      </h1>
    </div>
  );
}
