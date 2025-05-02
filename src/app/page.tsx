import Image from "next/image";
import Navbar from "@/components/NavBarComponent";
import TituloHeader from "@/components/TitleHeader";
import UserHeader from "@/components/UserHeader";

export default function Home() {
  const links = [
    {label: "Inicio", href: "/"},
    {label: "Partidos Politicos", href: "/Partidos"},
    {label: "Candidatos", href: "/Candidatos"},
  ];

  return (
    <>
      <div className="flex justify-center relative">
        <div className="py-3.5">
          <TituloHeader title="Transparencia Politica" subtitle="Al alcance de todos..." />
        </div>
        <div className="absolute top-0 right-0 p-4">
          <UserHeader />
        </div>
      </div>

      <Navbar links={links} />
      <main className="mx-auto max-w-xl">
        <div className="px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <Image src="/img/PersonasVotando.png" alt="Imagen de personas votando" width={900} height={900} />
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
