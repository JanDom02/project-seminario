import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder ?: string;
    className ?: string;
    type ?: string;

};

export default function InputComponent ({placeholder, className, type = "text", ...props}: InputProps) {
    return (
        <input type={type} placeholder={placeholder} className={`w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${className}`} {...props}/>
    );
};