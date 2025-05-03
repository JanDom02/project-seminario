"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from './Modal';
import PrincipleButton from "./PrincipleButton";
import InputComponent from './InputComponent';
import Presupuesto from './tabs/Presupuesto';
import Visuales from './tabs/Visuales';
import InformacionGeneral from './tabs/InformacionGeneral';
import Propuestas from './tabs/Propuestas';

export default function ProfilePanel() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [invitationLink, setInvitationLink] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'perfil' | 'presupuesto' | 'visuales' | 'informacion' | 'propuestas'>('perfil');

    const router = useRouter();
    
    // Simulación de estas funciones - reemplazar con las implementaciones reales
    const useUserRole = () => {
        return { 
            role: "admin", 
            user: { id: "123" }, 
            loading: false 
        };
    };

    const useInvitationForm = (userId: string) => {
        const [email, setEmail] = useState("");
        const [tipo, setTipo] = useState("");
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState<{message: string} | null>(null);

        const handleSubmit = async () => {
            setLoading(true);
            // Simulación de API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setLoading(false);
            
            // Simulación de respuesta exitosa
            return { 
                data: [{ token: "invitation-token-123" }], 
                error: null 
            };
        };

        return {
            email, tipo,
            setEmail, setTipo,
            handleSubmit,
            loading, error
        };
    };

    const generateInvitationLink = (token: string) => {
        return `https://ejemplo.com/invitacion/${token}`;
    };

    const { role, user, loading: roleLoading } = useUserRole();

    const {
        email, tipo,
        setEmail, setTipo,
        handleSubmit,
        loading: invitationLoading, error
    } = useInvitationForm(user?.id ?? "");

    const handleInvitationSubmit = async () => {
        const { data, error } = await handleSubmit();
        if (data) {
            const token = data[0].token; 
            const link = generateInvitationLink(token);
            setInvitationLink(link); 
        } else {
            console.error(error);
        }
    };

    const copyToClipboard = () => {
        if (invitationLink) {
            navigator.clipboard.writeText(invitationLink).then(() => {
                alert("Enlace copiado al portapapeles");
            });
        }
    };

    // Sidebar item component
    const SidebarItem = ({ title, isActive, onClick }: { title: string, isActive: boolean, onClick: () => void }) => (
        <div 
            className={`p-2 cursor-pointer ${isActive ? 'bg-blue-100 text-blue-600 font-medium' : 'hover:bg-gray-100'}`}
            onClick={onClick}
        >
            {title}
        </div>
    );

    // Renders the content based on active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'propuestas':
                return <Propuestas />;
            case 'presupuesto':
                return <Presupuesto />;
            case 'visuales':
                return <Visuales />;
            case 'informacion':
                return <InformacionGeneral />;
            case 'perfil':
            default:
                return (
                    <div className="mt-10 space-y-4 text-gray-800 text-sm">
                        <div className="flex justify-between items-center">
                            <span><strong>Nombre de usuario:</strong> Pepe Perez</span>
                            <button className="text-blue-600 hover:underline">Cambiar Nombre</button>
                        </div>
                        <div className="flex justify-between items-center">
                            <span><strong>Correo Electrónico:</strong> example@example.com</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span><strong>Contraseña:</strong> *******************</span>
                            <button className="text-blue-600 hover:underline">Cambiar Contraseña</button>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="flex h-screen bg-gray-100 text-black">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-4 font-bold text-lg border-b">
                    <h3>Transparencia <br/>Política</h3>
                </div>

                <div className="p-4 border-t mt-auto">
                    <button
                        onClick={() => router.push('/')}
                        className="flex items-center text-sm text-blue-600 hover:underline"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10h4v-6h8v6h4V10" />
                        </svg>
                        Volver al Inicio
                    </button>
                </div>

                {/* Perfil Button - NUEVO */}
                <div className="p-4 border-b">
                    <SidebarItem 
                        title="Perfil" 
                        isActive={activeTab === 'perfil'} 
                        onClick={() => setActiveTab('perfil')} 
                    />
                </div>
                
                {/* Partido Section */}
                <div className="p-4 border-b">
                    <div className="flex items-center justify-between font-medium">
                        <span>Partidos</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div className="ml-4 mt-2 space-y-1">
                        <SidebarItem 
                            title="Propuestas" 
                            isActive={activeTab === 'propuestas'} 
                            onClick={() => setActiveTab('propuestas')} 
                        />
                        <SidebarItem 
                            title="Presupuesto" 
                            isActive={activeTab === 'presupuesto'} 
                            onClick={() => setActiveTab('presupuesto')} 
                        />
                        <SidebarItem 
                            title="Visuales" 
                            isActive={activeTab === 'visuales'} 
                            onClick={() => setActiveTab('visuales')} 
                        />
                        <SidebarItem 
                            title="Información general" 
                            isActive={activeTab === 'informacion'} 
                            onClick={() => setActiveTab('informacion')} 
                        />
                    </div>
                </div>
                
                {/* Candidato Section */}
                <div className="p-4">
                    <div className="flex items-center justify-between font-medium">
                        <span>Candidato</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div className="ml-4 mt-2 space-y-1">
                        <SidebarItem 
                            title="Propuestas" 
                            isActive={false} 
                            onClick={() => setActiveTab('propuestas')}
                        />
                        <SidebarItem 
                            title="Presupuesto" 
                            isActive={false} 
                            onClick={() => console.log('Presupuesto candidato clicked')} 
                        />
                        <SidebarItem 
                            title="Visuales" 
                            isActive={false} 
                            onClick={() => console.log('Visuales candidato clicked')} 
                        />
                        <SidebarItem 
                            title="Información general" 
                            isActive={false} 
                            onClick={() => console.log('Info candidato clicked')} 
                        />
                    </div>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 p-8 overflow-auto">
                <div className="bg-white rounded-2xl shadow p-8 w-[90%] h-full mx-auto">
                    {/* User Profile Header */}
                    {activeTab === 'perfil' && (
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col items-center space-y-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <span className="text-sm text-gray-600">Foto de Perfil</span>
                                <PrincipleButton title="Cambiar Foto de Perfil" className="bg-gray-500 rounded-sm cursor-pointer"/>
                            </div>
                            <div className="flex space-x-5">
                                <PrincipleButton 
                                    title="Invitar Partido" 
                                    className="bg-green-500 rounded-sm font-bold text-sm cursor-pointer"
                                    onClick={() => {
                                        setIsModalOpen(true)
                                        setInvitationLink(null);
                                    }}
                                /> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                        </div>
                    )}
                    
                    {/* Dynamic Content */}
                    {renderContent()}
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="flex flex-col space-y-8 py-5">
                    <h3 className="text-black text-4xl font-bold">{role === "partido" ? "Invitar Candidato" : "Invitar Partido/Candidato"}</h3>
                    <InputComponent 
                        placeholder="Correo Electronico" className='text-gray-500'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {!roleLoading && (
                        <select 
                            className="w-full px-4 py-2 border text-gray-500 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                            disabled={role === "partido"} 
                        >
                            <option value="">Selecciona un rol</option>
                            {role === "partido" && <option value="candidato">Candidato</option>}
                            {role === "admin" && (
                                <>
                                    <option value="partido">Partido</option>
                                    <option value="candidato">Candidato</option>
                                </>
                            )}
                        </select>
                    )}

                    {error && <p className="text-red-500">{error.message}</p>}
                    
                    <PrincipleButton 
                        title={invitationLoading ? 'Enviando...' : 'Enviar'} className='w-[30%] cursor-pointer'
                        disabled={invitationLoading}
                        onClick={handleInvitationSubmit}
                    />

                    {/*Mostrar el enlace generado*/}
                    {invitationLink && (
                        <div className="mt-4 space-y-2">
                            <span><strong>Enlace de invitación:</strong></span>
                            <div className="flex space-x-2">
                                <InputComponent
                                    placeholder="Link de invitación"
                                    className="text-gray-500"
                                    value={invitationLink}
                                    readOnly
                                />
                                <button onClick={copyToClipboard}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
}