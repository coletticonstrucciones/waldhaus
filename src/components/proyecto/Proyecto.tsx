/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Proyecto() {
    return (
        <section className="relative text-white font-sans min-h-screen bg-black">
            <div className='px-20 mx-auto'>
                <h2
                    className="text-sm md:text-3xl uppercase tracking-[.5em] mb-8 text-center pt-28 pb-16"
                    style={{
                        fontFamily: "'Helvetica Now', sans-serif",
                        color: "#FFFFFF",
                    }}
                >
                    Proyecto
                </h2>
                <div className='flex justify-between items-end px-20'>
                    <img src="/proyecto-portada.png" alt="proyecto" className="w-[800px] aspect-[5/4] object-cover" />
                    <img src="/maqueta.png" alt="maqueta-colleti" className="w-[500px]  object-cover" />
                </div>
                <article className="px-20 py-24 leading-relaxed">
                    <p>Waldhaus se desarrolla sobre un terreno irregular.</p>
                    <p>
                        Tiene la particularidad de estar frente a la ruta 339, pero también sobre un
                        camino vecinal más privado, más íntimo por el cual se puede ingresar.
                    </p>
                    <p>
                        Se tomó un sector del terreno y bajo un eje ordenador se ubicaron dos
                        volúmenes iguales, pero rotados.
                    </p>
                    <p>
                        Este eje y las dos torres desplazadas permite generar dos sectores
                        claramente definidos.
                    </p>
                    <p>
                        Por un lado el sector de acceso peatonal y vehicular, por el que se accede
                        a un gran estacionamiento subterráneo y por otro lado un ámbito de
                        esparcimiento, jardines y pileta.
                    </p>
                    <p>Las torres están rodeadas de grandes terrazas con asadores privados.</p>
                    <p>
                        Creo que para quienes desean vivir en un ámbito de buena arquitectura, de
                        una elegancia austera, y fundamentalmente de mucha calidad, este es
                        probablemente el lugar indicado.
                    </p>
                </article>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 px-20">
                    {/* Tarjetas de imágenes inferiores */}
                    <div className="flex flex-col items-start">
                        <img
                            src="/vistas.png"
                            alt="Vistas"
                            className="w-full aspect-[3/4] object-cover"
                        />
                        <p className="mt-4 text-center text-3xl tracking-widest">vistas</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <img
                            src="/paisajismo.png"
                            alt="Paisajismo"
                            className="w-full aspect-[3/4] object-cover"
                        />
                        <p className="mt-4 text-center text-3xl tracking-widest">
                            paisajismo
                        </p>
                    </div>
                    <div className="flex flex-col items-start">
                        <img
                            src="/gym-spa.png"
                            alt="Gym & Spa"
                            className="w-full aspect-[3/4] object-cover"
                        />
                        <p className="mt-4 text-center text-3xl tracking-widest">gym & spa</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <img
                            src="/estacionamiento.png"
                            alt="Estacionamiento Subterráneo"
                            className="w-full aspect-[3/4] object-cover"
                        />
                        <p className="mt-4 text-center text-3xl tracking-widest">
                            estacionamiento
                            <br />
                            subterráneo
                        </p>
                    </div>
                </div>
                <img src='/colleti-logo.png' alt='Colleti Logo' className='w-[220px] object-cover ms-auto mt-10 ' />
            </div>
        </section>
    )
}
