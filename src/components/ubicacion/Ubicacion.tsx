'use client';
/* eslint-disable @next/next/no-img-element */

export default function Ubicacion() {
    return (
        <section id="ubicacion" className="relative text-white font-sans min-h-screen bg-black">
            {/* Contenedor para la imagen de fondo y el degradado */}
            <div className="absolute inset-0 z-0 h-[calc(100vh-200px)]">
                <img
                    src="/cielo.png"
                    alt="Fondo ubicación"
                    className="w-full h-full object-cover"
                />
                {/* Degradado negro */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col items-center justify-center pt-16 sm:pt-20 md:pt-28 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
                {/* Título */}
                <h2
                    className="text-base sm:text-xl md:text-3xl uppercase tracking-[.3em] sm:tracking-[.4em] md:tracking-[.5em] mb-4 sm:mb-6 md:mb-8"
                    style={{
                        fontFamily: "'Helvetica Now', sans-serif",
                        color: "#FFFFFF",
                    }}
                >
                    Ubicación
                </h2>

                {/* Coordenadas */}
                <div className="text-center font-light mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-8 md:mb-12">
                    {/* Latitud */}
                    <div
                        className="flex items-center justify-center text-[22px] sm:text-[70px] md:text-[111px] tracking-[1.5rem] sm:tracking-[2rem] md:tracking-[2.5rem]  lg:tracking-[3.5rem] xl:tracking-[5rem] leading-tight"
                        style={{
                            fontFamily: 'NowAlt, sans-serif',
                            fontWeight: 100,
                        }}
                    >
                        <span className="md:mr-4">-</span>
                        <span>2</span>
                        <span>6</span>
                        <span>.</span>
                        <span>8</span>
                        <span>2</span>
                        <span>4</span>
                        <span>1</span>
                        <span>4</span>
                    </div>

                    {/* Longitud */}
                    <div
                        className="flex items-center justify-center text-[22px] sm:text-[70px] md:text-[111px] tracking-[1.5rem] sm:tracking-[2rem] md:tracking-[2.5rem] lg:tracking-[3.5rem] xl:tracking-[5rem]  leading-tight relative"
                        style={{
                            fontFamily: 'NowAlt, sans-serif',
                            fontWeight: 100,
                        }}
                    >
                        <span className="md:mr-4">-</span>
                        <span>6</span>
                        <span>5</span>
                        <span>.</span>
                        <span>2</span>
                        <span>2</span>
                        <span>2</span>
                        <span className="relative">
                            6
                            <div className="absolute bottom-0 left-1/2 transform translate-x-1/2 w-6 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-white"></div>
                        </span>
                    </div>
                </div>

                {/* Caja de texto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 text-sm md:text-base text-gray-200 bg-black p-4 sm:p-6 md:p-7 shadow-lg max-w-5xl mx-auto mt-8 sm:mt-12 md:mt-16">
                    {/* Primera columna */}
                    <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-600 pb-6 md:pb-0 md:pr-6 leading-relaxed text-sm sm:text-base font-extralight  md:text-[14.2px]">
                        <p className="mb-4 sm:mb-6 md:mb-8">
                            <b>_Zona residencial en auge:</b> Forma parte de un área con gran potencial de desarrollo, ideal para un proyecto de vida.
                        </p>
                        <p>
                            <b>_Accesibilidad privilegiada:</b> Su cercanía a Yerba Buena y conexión a través de la Ruta 339 aseguran un acceso rápido y conveniente.
                        </p>
                    </div>

                    {/* Segunda columna */}
                    <div className="flex flex-col justify-between border-gray-600 pb-6 md:pb-0 md:pr-6 leading-relaxed text-sm sm:text-base font-extralight  md:text-[14.2px]">
                        <p className="mb-4 sm:mb-6 md:mb-8">
                            <b>_Entorno exclusivo:</b> Frente a una de las mejores canchas de golf de Tucumán, lo que suma un atractivo para los amantes de este deporte.
                        </p>
                        <p>
                            <b>_Conexión con la naturaleza:</b> Rodeado de un entorno residencial tranquilo y paisajes naturales al pie del cerro.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contenedor del video */}
            <div className="relative z-10 bg-black pt-8 sm:pt-12 md:pt-16 pb-16">
                <div className="relative w-full max-w-5xl mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <button className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/70 rounded-full flex items-center justify-center hover:bg-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                    <video
                        src="URL_DE_TU_VIDEO"
                        poster="URL_DE_LA_IMAGEN_POSTER"
                        controls
                        className="min-w-full h-[300px] sm:h-[450px] md:h-[600px] object-cover rounded-lg bg-black"
                    >
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                </div>
            </div>
        </section>
    );
}
