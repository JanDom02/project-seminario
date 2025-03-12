import React from "react";
import Image from "next/image";
import { cardStyles } from "@/styles/cardStyles";
import PrincipleButton from "@/components/PrincipleButton"; // Importa el botón

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonVariant?: keyof typeof import("@/styles/buttonStyles").buttonStyles; // Permite variantes de botón
  onButtonClick?: () => void;
}

export default function Card({ imageSrc, title, description, buttonText, buttonVariant, onButtonClick }: CardProps) {
  return (
    <div className={cardStyles.container}>
      <Image src={imageSrc} alt={title} width={100} height={100} className={cardStyles.image} />
      <h3 className={cardStyles.title}>{title}</h3>
      <p className={cardStyles.description}>{description}</p>
      {buttonText && (
        <PrincipleButton variant={buttonVariant} title={buttonText} onClick={onButtonClick} />
      )}
    </div>
  );
}
