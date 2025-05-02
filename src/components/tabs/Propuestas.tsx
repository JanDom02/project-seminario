"use client"
import { useState } from 'react';

export default function Propuestas() {
    const [propuesta, setPropuesta] = useState("");
    const [categoria, setCategoria] = useState("");
    const [presupuestoNecesario, setPresupuestoNecesario] = useState("");
    const [propuestas, setPropuestas] = useState<Array<{
        id: number,
        propuesta: string,
        categoria: string,
        presupuestoNecesario: string
    }>>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (propuesta.trim() && categoria.trim()) {
            const nuevaPropuesta = {
                id: Date.now(),
                propuesta,
                categoria,
                presupuestoNecesario
            };
            
            setPropuestas([...propuestas, nuevaPropuesta]);
            
            // Limpiar el formulario
            setPropuesta("");
            setCategoria("");
            setPresupuestoNecesario("");
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-8">Propuestas</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Propuesta:</label>
                    <textarea 
                        value={propuesta}
                        onChange={(e) => setPropuesta(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describa su propuesta..."
                        required
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Categoría:</label>
                    <input 
                        type="text"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej: Educación, Salud, Infraestructura..."
                        required
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Presupuesto necesario:</label>
                    <input 
                        type="text"
                        value={presupuestoNecesario}
                        onChange={(e) => setPresupuestoNecesario(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Cantidad estimada para implementar la propuesta"
                    />
                </div>
                
                <div className="flex justify-end mt-4">
                    <button 
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Guardar Propuesta
                    </button>
                </div>
            </form>
            
            {propuestas.length > 0 && (
                <div className="mt-10">
                    <h3 className="text-lg font-medium mb-4">Propuestas guardadas:</h3>
                    <div className="space-y-4">
                        {propuestas.map((item) => (
                            <div key={item.id} className="p-4 border rounded-lg bg-gray-50">
                                <div className="flex justify-between">
                                    <h4 className="font-medium">{item.categoria}</h4>
                                    <button 
                                        onClick={() => setPropuestas(propuestas.filter(p => p.id !== item.id))}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="mt-2 text-gray-700">{item.propuesta}</p>
                                {item.presupuestoNecesario && (
                                    <p className="mt-1 text-sm text-gray-500">
                                        Presupuesto: {item.presupuestoNecesario}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}