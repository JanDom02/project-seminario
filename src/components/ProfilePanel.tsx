"use client"
import {useState} from 'react'
import Modal from './Modal';
import PrincipleButton from "./PrincipleButton";
import InputComponent from './InputComponent';

export default function ProfilePanel() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="bg-white rounded-2xl shadow p-8 w-[90%] h-full mx-auto">
            <div className="flex justify-between items-start">
                <div className="flex flex-col items-center space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-30">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span className="text-sm text-gray-600">Foto de Perfil</span>
                <PrincipleButton title="Cambiar Foto de Perfil" className="bg-gray-500 rounded-sm cursor-pointer"/>
                </div>
                <div className="flex space-x-5">
                    <PrincipleButton 
                        title="Invitar Partido" 
                        className="bg-green-500 rounded-sm font-bold text-sm cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    /> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
                
            </div>

            <div className="mt-10 space-y-4 text-gray-800 text-sm">
                <div className="flex justify-between items-center">
                    <span> <strong>Nombre de usuareio:</strong> Pepe Perez</span>
                    <button className="text-blue-600 hover:underline">Cambiar Nombre</button>
                </div>
                <div className="flex justify-between items-center">
                    <span> <strong>Correo Electronico:</strong> example@example.com</span>
                </div>
                <div className="flex justify-between items-center">
                    <span> <strong>Contraseña:</strong> *******************</span>
                    <button className="text-blue-600 hover:underline">Cambiar Contraseña</button>
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="flex flex-col space-y-8 py-5">
                    <h3 className="text-black text-4xl font-bold">Invitacion Partidos</h3>
                    <InputComponent placeholder="Correo Electronico" className='text-gray-500'/>
                    <InputComponent placeholder="Partido o Candidato" className='text-gray-500'/>
                    <PrincipleButton title='Enviar' className='w-[30%] cursor-pointer'/>
                </div>
                
            </Modal>
        </div>
    );
};