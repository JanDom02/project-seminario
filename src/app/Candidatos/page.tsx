import PartyCard from "@/components/CardPartido";

export default function CandidatosPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* Título corregido */}
      <h1 className="bg-black text-white rounded-full py-3 px-5 mt-4">Candidatos</h1>  

      {/* Contenedor de tarjetas */}
      <div className="flex flex-row overflow-x-auto space-x-4 p-4">
        <PartyCard 
          name="Pan"
          description="Ricardo Anaya"
          imageUrl="./img/Anaya.jpeg"
        />
        <PartyCard 
          name="Morena"
          description="Andrés Manuel López Obrador"
          imageUrl="./img/Descarga.jpeg"
        />
        <PartyCard 
          name="PRI"
          description="José Meade"
          imageUrl="./img/Meade.jpeg"
        />
      </div>      
    </div>
  );
}
