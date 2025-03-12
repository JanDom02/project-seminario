import React from "react";
import { buttonStyles } from "@/styles/buttonStyles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: keyof typeof buttonStyles;
}

export default function PrincipleButton({ variant = "primary", title, ...props }: ButtonProps) {
  return (
    <button className={`${buttonStyles[variant]} ${props.className || ""}`} {...props}>
      {title}
    </button>
  );
}
