import React from "react"
import { buttonStyles } from "@/styles/buttonStyles"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    variant?: keyof typeof buttonStyles;
}

export default function PrincipleButton({variant, title}:ButtonProps) {
    return(
        <button className={`btn-${variant}`}>{title}</button>
    )
}