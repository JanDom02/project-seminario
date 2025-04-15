import InputComponent from "@/components/InputComponent";
import LoginButton from "@/components/LoginButton";

import Link from "next/link";

type AuthFormProps = {
    isLogin?: boolean;
}

export default function AuthForm({isLogin = true}: AuthFormProps) {
    return(
        <div className=" flex flex-col justify-center items-center border-2 border-black rounded-lg p-8 w-full max-w-md text-black">
            <h3 className="text-4xl font-bold mb-15 py-5">{isLogin ? "Iniciar Sesion" : "Crear Cuenta"}</h3>

            {!isLogin && (
                <>
                    <InputComponent placeholder="Nombre" className="mb-10"/>
                    <InputComponent placeholder="Apellido" className="mb-10"/>
                </>
            )}
            <InputComponent placeholder="Correo Electronico" className="mb-10"/>
            <InputComponent placeholder="Contraseña" className="mb-10"/>

            <LoginButton title={isLogin ? "Iniciar Sesion" : "Registrarse"} className="w-[90%]"/>
            
            <hr className="w-full border-t border-gray-600 my-10"/>

            <div className="mt-6 text-center">
                <p className="font-bold text-md">{isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}</p>
                <Link href={isLogin ? "/auth/Registro" : "/auth/Login"} className="hover:underline text-sm">{isLogin ? "Crear una cuenta" : "Iniciar Sesion"}</Link>
            </div>
        </div>         
    )
}