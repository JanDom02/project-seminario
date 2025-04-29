"use client"
import InputComponent from "@/components/InputComponent";
import Link from "next/link";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { createClient } from "../../../../utils/supabase/client";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useAuth();
    const router = useRouter();

    const supabase = createClient();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        const { data, error } = await signUp(email, password);
        if (error) {
            alert("Error al registrarse: " + error.message);
            return;
        }

        const userId = data.user?.id;
        if (!userId) return;

        const rol = email.includes("partido") ? "Partido" : "Candidato"; // Opcional: personaliza cómo determinas el rol
        const { error: insertError } = await supabase.from("profiles").insert({
            id: userId,
            nombre,
            apellido,
            rol
        });

        if (insertError) {
            alert("Error al guardar perfil: " + insertError.message);
            return;
        }

        router.push("/");
    };

    return(
        <div className="max-h-screen flex justify-center">
            <form onSubmit={handleRegister} className=" flex flex-col items-center relative border-2 border-black rounded-lg p-8 w-full max-w-md text-black">
                <Link href="/" className="absolute left-4 top-3  text-gray-700 hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </Link>

                <h3 className="text-4xl font-bold mb-15 mt-5 py-5">Registro</h3>

                <InputComponent 
                    placeholder="Nombre" className="mb-10"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <InputComponent 
                    placeholder="Apellido" className="mb-10"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
                <InputComponent 
                    placeholder="Correo Electronico" className="mb-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputComponent 
                    placeholder="Contraseña" className="mb-10" type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="text-white bg-blue-500 py-3 px-8 rounded-sm" type="submit">Registrarse</button>

                <hr className="w-full border-t border-gray-600 my-10"/>

                <div className="mt-6 text-center">
                    <p className="font-bold text-md">¿Ya tienes una cuenta?</p>
                    <Link href="/login" className="hover:underline text-sm">
                        Iniciar Sesion
                    </Link>
                </div>
            </form>
        </div>
    );
}