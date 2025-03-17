import React from "react";

interface PartyCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const PartyCard: React.FC<PartyCardProps> = ({ name, description, imageUrl }) => {
  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-4 text-center border">
      <img src={imageUrl} alt={name} className="w-40 mx-auto mb-4" />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-700 text-sm my-2">{description}</p>
      <button className="mt-4 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
        VER MÁS
      </button>
    </div>
  );
};

export default PartyCard;
