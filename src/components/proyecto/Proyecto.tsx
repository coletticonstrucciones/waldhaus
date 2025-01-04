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
                <article className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 leading-relaxed space-y-4 leading-relaxed text-sm sm:text-base font-extralight">
                    <p>
                        Waldhaus se desarrolla sobre un terreno irregular.<br />
                        Tiene la particularidad de estar frente a la ruta 339, pero también sobre un camino vecinal más privado, más íntimo por el cual se puede ingresar.<br />
                        Se tomó un sector del terreno y bajo un eje ordenador se ubicaron dos volúmenes iguales, pero rotados.<br />
                        Este eje y las dos torres desplazadas permite generar dos sectores claramente definidos.<br />
                        Por un lado el sector de acceso peatonal y vehicular, por el que se accede a un gran estacionamiento subterráneo y por otro lado un ámbito de esparcimiento, jardines y pileta.<br />
                        Las torres están rodeadas de grandes terrazas con asadores privados.<br />
                        Creo que para quienes desean vivir en un ámbito de buena arquitectura, de una elegancia austera, y fundamentalmente de mucha calidad, este es probablemente el lugar indicado.
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
