import PartyCard from "@/components/CardPartido";

export default function PartidosPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* Título ajustado */}
      <h1 className="bg-black text-white rounded-full py-3 px-5 mt-4">Partidos</h1>  

      {/* Contenedor de tarjetas */}
      <div className="flex flex-row overflow-x-auto space-x-4 p-4">
        <PartyCard 
          name="Pan"
          description="El Partido Acción Nacional (PAN)"
          imageUrl="./img/Pan Logo.png"
        />
        <PartyCard 
          name="Morena"
          description="El Partido Movimiento de Regeneración Nacional (Morena)"
          imageUrl="./img/Morena Logo.png"
        />
        <PartyCard 
          name="PRI"
          description="El Partido Revolucionario Institucional (PRI)"
          imageUrl="./img/Pri Logo.png"
        />
        <PartyCard 
          name="PRD"
          description="Partido de la Revolución Democrática (PRD)"
          imageUrl="./img/PRD Logo.png"
        />
      </div>
    </div>
  );
}

  