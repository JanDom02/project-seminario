"use client"

export default function Presupuesto() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-8">Presupuesto</h2>
            
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Cantidad:</label>
                    <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Descripción del presupuesto:</label>
                    <textarea 
                        className="w-full p-2 border border-gray-300 rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <div className="flex justify-end mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
}