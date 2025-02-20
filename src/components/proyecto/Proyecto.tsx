/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Proyecto() {
    return (
        <section id="proyecto" className="relative text-white font-sans min-h-screen bg-black">
            <div className='px-4 sm:px-8 md:px-12 lg:px-20 mx-auto'>
                <h2
                    className="text-base sm:text-xl md:text-3xl uppercase tracking-[.3em] sm:tracking-[.4em] md:tracking-[.5em] mb-4 sm:mb-6 md:mb-8 text-center pt-16 sm:pt-20  pb-8 sm:pb-12 md:pb-8"
                    style={{
                        fontFamily: "'Helvetica Now', sans-serif",
                        color: "#FFFFFF",
                    }}
                >
                    Proyecto
                </h2>
                <div className='flex justify-between items-center px-0 sm:px-4 md:px-8 lg:px-20 max-w-5xl mx-auto'>
                    <img
                        src="/Proyecto/boceto-firma.svg"
                        alt="boceto-colleti"
                        className="w-full object-cover"
                    />
                </div>
                <article className="px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-24 leading-relaxed text-base sm:text-lg font-light md:text-xl max-w-4xl mx-auto text-center">
                    <p className='text-gray-300 text-lg md:text-xl w-full font-light leading-relaxed'>
                        Dos volúmenes simétricos de manera rotada y organizados por un eje central, dividen el terreno en áreas funcionales. Al sur, se encuentra el acceso peatonal y vehicular que conduce a un amplio estacionamiento subterráneo. Al norte, un espacio dedicado al esparcimiento con jardines y una piscina, crea un entorno relajado y armónico.
                    </p>
                    <br />
                    <p className='text-gray-300 text-lg md:text-xl w-full font-light leading-relaxed'>Cada torre está rodeada de amplias terrazas con asadores privados, proporcionando un estilo de vida que combina confort y diseño superior. Waldhaus es el lugar ideal para quienes valoran la buena arquitectura, una elegancia austera y materiales de alta calidad.
                    </p>
                </article>
                {/* Contenido adicional */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12  w-full max-w-7xl mx-auto mt-12">
                    {/* Sección 1: Texto e Imagen */}
                    <div className="flex flex-col justify-between space-y-4 sm:space-y-6">
                        <h2
                            className="font-['Times_New_Roman'] font-bold text-2xl md:text-5xl mb-5 tracking-tighter"
                            style={{lineHeight: "0.8"}}
                        >
                            about&nbsp;&nbsp;&nbsp;the
                            <br />
                            <span>view</span>
                        </h2>

                        <p
                            className="text-gray-300 text-xl font-light leading-relaxed"
                            style={{lineHeight: "1.2"}}
                        >
                            La naturaleza se despliega como un lienzo vivo. Waldhaus Residences se emplaza estratégicamente al pie del cerro, donde las montañas envuelven el día con su serenidad y belleza. Todas las unidades cuentan con balcones amplios y confortables para admirar estas vistas únicas.
                        </p>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0">
                        <img
                            src="/about-the-view.png"
                            alt="Vista secundaria"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Sección 2: Imagen y Texto */}
                    <div className="flex items-center order-2 md:order-1">
                        <img
                            src="about-the-services.png"
                            alt="Servicios secundarios"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-between space-y-4 sm:space-y-6 order-1 md:order-2">
                        <h2
                            className="font-['Times_New_Roman'] font-bold text-2xl md:text-5xl mb-5 tracking-tighter"
                            style={{lineHeight: "0.8"}}
                        >
                            about&nbsp;&nbsp;&nbsp;the
                            <br />
                            <span>services</span>
                        </h2>
                        <p
                            className="text-gray-300 text-xl font-light leading-relaxed"
                            style={{lineHeight: "1.2"}}
                        >
                            Waldhaus Residences redefine el concepto de vida Premium en el eje Yerba Buena-San Pablo. Con accesibilidad privilegiada, vistas abiertas y diseño superior, ofrece unidades luminosas con terrazas, áreas comunes exclusivas y materiales de alta calidad, ideales para quienes valoran la elegancia en los detalles.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 my-8 sm:my-12 md:my-16 max-w-7xl mx-auto">
                    {/* Tarjetas de imágenes */}
                    <div className="relative group h-[50vh] sm:h-[60vh] md:h-[70vh]">
                        <img
                            src="/Proyecto/1.png"
                            alt="Vistas"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <p className="text-white text-lg sm:text-xl md:text-2xl uppercase tracking-[.3em]">vistas</p>
                        </div>
                    </div>
                    <div className="relative group h-[50vh] sm:h-[60vh] md:h-[70vh]">
                        <img
                            src="/Proyecto/2.png"
                            alt="Paisajismo"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <p className="text-white text-lg sm:text-xl md:text-2xl uppercase tracking-[.3em]">paisajismo</p>
                        </div>
                    </div>
                    <div className="relative group h-[50vh] sm:h-[60vh] md:h-[70vh]">
                        <img
                            src="/Proyecto/3.png"
                            alt="Gym & Spa"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <p className="text-white text-lg sm:text-xl md:text-2xl uppercase tracking-[.3em]">gym & spa</p>
                        </div>
                    </div>
                    <div className="relative group h-[50vh] sm:h-[60vh] md:h-[70vh]">
                        <img
                            src="/Proyecto/4.png"
                            alt="Estacionamiento Subterráneo"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <p className="text-white text-lg sm:text-xl md:text-2xl uppercase tracking-[.3em] text-center">
                                estacionamiento<br />subterráneo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
