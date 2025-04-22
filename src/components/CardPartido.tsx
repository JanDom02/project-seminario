import Image from "next/image";

import React from "react";

import Link from "next/link";
  
interface PartyCardProps {
  name: string;
  description: string;
  imageUrl: string;
  slug: string; // 👈 nuevo campo
}

const PartyCard: React.FC<PartyCardProps> = ({ name, description, imageUrl, slug }) => {

  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-4 text-center border">
      <Image src={imageUrl} alt={name} className="w-40 mx-auto mb-4" width={171} height={172} />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-700 text-sm my-2">{description}</p>
      <Link href={`/Partidos/${slug}`}>
        <button className="mt-4 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
        VER MÁS
        </button>
      </Link>
    </div>
  );
};

export default PartyCard;
