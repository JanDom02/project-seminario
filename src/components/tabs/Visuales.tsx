"use client"

export default function Visuales() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-8">Visuales</h2>
            
            <div className="mt-8">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <p className="text-sm text-center text-gray-400">Arrastre una imagen aquí o haga clic</p>
                </div>
                
                <div className="flex justify-end mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Subir Imagen
                    </button>
                </div>
            </div>
        </div>
    );
}