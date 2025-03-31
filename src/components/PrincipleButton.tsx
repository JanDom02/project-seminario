import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
}

export default function PrincipleButton({title, className, ...props}: ButtonProps) {
  return (
    <button className={`text-black rounded-md border-1 py-2 px-6 ${className}`} {...props}>
      {title}
    </button>
  );
}

