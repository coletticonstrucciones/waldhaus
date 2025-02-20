/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Proyecto() {
    return (
        <section id="proyecto" className="relative text-white font-sans min-h-screen bg-black">
            <div className='px-4 sm:px-8 md:px-12 lg:px-20 mx-auto'>
                <h2
                    className="text-base sm:text-xl md:text-3xl uppercase tracking-[.3em] sm:tracking-[.4em] md:tracking-[.5em] mb-4 sm:mb-6 md:mb-8 text-center pt-16 sm:pt-20 md:pt-28 pb-8 sm:pb-12 md:pb-16"
                    style={{
                        fontFamily: "'Helvetica Now', sans-serif",
                        color: "#FFFFFF",
                    }}
                >
                    Proyecto
                </h2>
                <div className='flex justify-between items-center px-0 sm:px-4 md:px-8 lg:px-20'>
                    <img
                        src="/Proyecto/boceto-firma.png"
                        alt="boceto-colleti"
                        className="w-full  aspect-[368/243] object-cover"
                    />
                </div>
                <article className="px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-24 leading-relaxed text-sm sm:text-base font-extralight md:text-[14.2px]">
                    <p>
                        Dos volúmenes simétricos de manera rotada y organizados por un eje central, dividen el terreno en áreas funcionales. Al sur, se encuentra el acceso peatonal y vehicular que conduce a un amplio estacionamiento subterráneo. Al norte, un espacio dedicado al esparcimiento con jardines y una piscina, crea un entorno relajado y armónico.
                    </p>
                    <br />
                    <p>Cada torre está rodeada de amplias terrazas con asadores privados, proporcionando un estilo de vida que combina confort y diseño superior. Waldhaus es el lugar ideal para quienes valoran la buena arquitectura, una elegancia austera y materiales de alta calidad.
                    </p>
                </article>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-8 sm:mt-12 md:mt-16">
                    {/* Tarjetas de imágenes */}
                    <div className="relative group h-[50vh] sm:h-[60vh] md:h-[70vh]">
                        <img
                            src="/Proyecto/1.png"
                            alt="Vistas"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <p className="text-white text-2xl sm:text-3xl md:text-4xl uppercase tracking-[.3em]">vistas</p>
                        </div>
                    </div>
                    <div className="relative group h-[50vh] sm:h-[60vh] md:h-[70vh]">
                        <img
                            src="/Proyecto/2.png"
                            alt="Paisajismo"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <p className="text-white text-2xl sm:text-3xl md:text-4xl uppercase tracking-[.3em]">paisajismo</p>
                        </div>
                    </div>
                    <div className="relative group h-[50vh] sm:h-[60vh] md:h-[70vh]">
                        <img
                            src="/Proyecto/3.png"
                            alt="Gym & Spa"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <p className="text-white text-2xl sm:text-3xl md:text-4xl uppercase tracking-[.3em]">gym & spa</p>
                        </div>
                    </div>
                    <div className="relative group h-[50vh] sm:h-[60vh] md:h-[70vh]">
                        <img
                            src="/Proyecto/4.png"
                            alt="Estacionamiento Subterráneo"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <p className="text-white text-2xl sm:text-3xl md:text-4xl uppercase tracking-[.3em] text-center">
                                estacionamiento<br />subterráneo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
