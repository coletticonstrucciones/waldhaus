'use client';
/* eslint-disable @next/next/no-img-element */

export default function Ubicacion() {

    return (
        <section id="ubicacion" className="relative text-white font-sans min-h-screen bg-black">
            {/* Imagen de fondo con degradado */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 to-black">
                <img
                    src="/cielo-naranja.webp"
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

                {/* Coordenadas estáticas */}
                <div className="text-center font-light mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-8 md:mb-12">
                    {/* Latitud */}
                    <div className="flex items-center justify-center text-[40px] sm:text-[70px] md:text-[111px] tracking-[1.5rem] sm:tracking-[2rem] md:tracking-[2.5rem]  lg:tracking-[3.5rem] xl:tracking-[5rem] leading-tight">
                        <span className="mr-4">-</span>
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
                    <div className="flex items-center justify-center text-[40px] sm:text-[70px] md:text-[111px] tracking-[1.5rem] sm:tracking-[2rem] md:tracking-[2.5rem] lg:tracking-[3.5rem] xl:tracking-[5rem]  leading-tight relative">
                        <span className="mr-4">-</span>
                        <span>6</span>
                        <span>5</span>
                        <span>.</span>
                        <span>2</span>
                        <span>2</span>
                        <span>2</span>
                        <span className="relative">
                            6
                            <div className="absolute bottom-0 left-1/2 transform translate-x-1/2 w-8 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-white"></div>
                        </span>
                    </div>
                </div>

                {/* Texto en dos columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 text-sm md:text-base text-gray-200 bg-black p-4 sm:p-6 md:p-7 shadow-lg max-w-5xl mx-auto mt-8 sm:mt-12 md:mt-16">
                    {/* Primera columna */}
                    <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-600 pb-6 md:pb-0 md:pr-6">
                        <p className="leading-relaxed mb-4 sm:mb-6 md:mb-8">
                            Woods Bagot - International architecture firm based in Adelaide, South Australia. Specializes in the design and planning of buildings in a wide variety of sectors and disciplines.
                        </p>
                        <p className="leading-relaxed">
                            The main problem of the current site is that it does not reflect high level of competence and modernity of this architectural bureau. The content is not well structured for quick and easy reading. The challenge was to correct these shortcomings.
                        </p>
                    </div>

                    {/* Segunda columna */}
                    <div className="flex flex-col justify-between pt-6 md:pt-0">
                        <p className="leading-relaxed mb-4 sm:mb-6 md:mb-8">
                            Woods Bagot is now established worldwide, with studios in six regions: Southeast Asia, China, Australia & NZ, Europe, the Middle East, and North America.
                        </p>
                        <p className="leading-relaxed">
                            The design is made in a minimalist style, with work done with accents. Layouts are designed with dark modern style by default and the ability to switch to light mode. These solutions were chosen to complete the main task.
                        </p>
                    </div>
                </div>

                {/* Video con botón de reproducción */}
                <div className="relative mt-8 sm:mt-12 md:mt-16 w-full max-w-5xl">
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
