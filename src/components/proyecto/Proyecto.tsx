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
                <div className='flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 px-0 sm:px-4 md:px-8 lg:px-20'>
                    <img
                        src="/proyecto-portada.png"
                        alt="proyecto"
                        className="w-full lg:w-[60%] xl:w-[800px] aspect-[5/4] object-cover"
                    />
                    <img
                        src="/Proyecto/boceto-firma.png"
                        alt="boceto-colleti"
                        className="w-full lg:w-[35%] xl:w-[700px] aspect-[368/243] object-cover"
                    />
                </div>
                <article className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 leading-relaxed text-sm sm:text-base font-extralight md:text-[14.2px] max-w-[960px] me-auto">
                    <p>
                        Waldhaus se emplaza sobre un terreno con características únicas, combinando accesibilidad y privacidad. Waldhausfrente a la Ruta 339 y conectado también por un camino vecinal más íntimo, el proyecto aprovecha esta dualidad para ofrecer una experiencia equilibrada entre lo práctico y lo exclusivo.
                    </p>
                    <br />
                    <p>Dos volúmenes simétricos, dispuestos de manera rotada y organizados por un eje central, dividen el terreno en áreas funcionales. Al sur, se encuentra el acceso peatonal y vehicular que conduce a un amplio estacionamiento subterráneo. Al norte, un espacio dedicado al esparcimiento, con jardines y una piscina, crea un entorno relajado y armónico.
                    </p>
                    <br />
                    <p>
                        Cada torre está rodeada de amplias terrazas con asadores privados, proporcionando un estilo de vida que combina confort y diseño superior. Waldhaus es el lugar ideal para quienes valoran la buena arquitectura, una elegancia discreta y materiales de alta calidad.
                    </p>
                </article>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 sm:mt-12 md:mt-16 px-4 sm:px-8 md:px-12 lg:px-20">
                    {/* Tarjetas de imágenes inferiores */}
                    <div className="flex flex-col items-center sm:items-start">
                        <img
                            src="/Proyecto/1.png"
                            alt="Vistas"
                            className="w-full aspect-[25/37] object-cover"
                        />
                        <p className="mt-4 text-xl sm:text-2xl md:text-3xl tracking-widest text-center w-full">vistas</p>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <img
                            src="/Proyecto/2.png"
                            alt="Paisajismo"
                            className="w-full aspect-[25/37] object-cover"
                        />
                        <p className="mt-4 text-xl sm:text-2xl md:text-3xl tracking-widest text-center w-full">
                            paisajismo
                        </p>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <img
                            src="/Proyecto/3.png"
                            alt="Gym & Spa"
                            className="w-full aspect-[25/37] object-cover"
                        />
                        <p className="mt-4 text-xl sm:text-2xl md:text-3xl tracking-widest text-center w-full">gym & spa</p>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <img
                            src="/Proyecto/4.png"
                            alt="Estacionamiento Subterráneo"
                            className="w-full aspect-[25/37] object-cover"
                        />
                        <p className="mt-4 text-xl sm:text-2xl md:text-3xl tracking-widest text-center w-full">
                            estacionamiento
                            <br />
                            subterráneo
                        </p>
                    </div>
                </div>
                <div className="flex justify-end px-4 sm:px-8 md:px-12 lg:px-20 mt-6 sm:mt-8 md:mt-10">
                    <img
                        src='/colleti-logo.png'
                        alt='Colleti Logo'
                        className='w-[160px] sm:w-[180px] md:w-[220px] object-cover'
                    />
                </div>
            </div>
        </section>
    )
}
