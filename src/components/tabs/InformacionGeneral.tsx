"use client"
import { useState } from 'react';

export default function InformacionGeneral() {
    const [objetivos, setObjetivos] = useState<string[]>([]);
    const [nuevoObjetivo, setNuevoObjetivo] = useState("");

    const agregarObjetivo = () => {
        if (nuevoObjetivo.trim()) {
            setObjetivos([...objetivos, nuevoObjetivo]);
            setNuevoObjetivo("");
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-8">Información General</h2>
            
            <div className="space-y-8">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Historia:</label>
                    <textarea 
                        className="w-full p-2 border border-gray-300 rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Escriba la historia del partido/candidato..."
                    />
                </div>
                
                <div className="space-y-4">
                    <div className="flex items-center">
                        <label className="block text-sm font-medium text-gray-700 mr-2">Objetivos:</label>
                        <button 
                            onClick={agregarObjetivo}
                            className="p-1 rounded-full hover:bg-gray-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                    
                    <input 
                        type="text"
                        value={nuevoObjetivo}
                        onChange={(e) => setNuevoObjetivo(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Agregar nuevo objetivo..."
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                agregarObjetivo();
                            }
                        }}
                    />
                    
                    <div className="space-y-2 mt-2">
                        {objetivos.map((objetivo, index) => (
                            <div key={index} className="p-2 border rounded flex justify-between items-center">
                                <span>{objetivo}</span>
                                <button 
                                    onClick={() => setObjetivos(objetivos.filter((_, i) => i !== index))}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="flex justify-end mt-8">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Guardar Información
                    </button>
                </div>
            </div>
        </div>
    );
}