import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    className?: string;
}

export default function LoginButton({title, className}: ButtonProps) {
    return (
        <button className={`text-white bg-blue-500 py-3 px-8 rounded-sm ${className}`}>{title}</button>
    )
}