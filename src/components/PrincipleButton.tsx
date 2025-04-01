import React from "react";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  icon?: ReactNode;
}

export default function PrincipleButton({title, className, icon, ...props}: ButtonProps) {
  return (
    <button className={`text-black rounded-md border-1 py-2 px-6 ${className}`} {...props}>
      {icon && <span className="w-6 h-6">{icon}</span>}
      {title}
    </button>
  );
}

