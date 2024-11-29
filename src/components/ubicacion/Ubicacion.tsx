'use client';
/* eslint-disable @next/next/no-img-element */

export default function Ubicacion() {
    // Coordenadas estáticas
    const latitude = -26.82414;
    const longitude = -65.22226;

    return (
        <section className="relative text-white font-sans min-h-screen bg-black">
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
            <div className="relative z-10 flex flex-col items-center justify-center pt-28 pb-16 px-4">
                {/* Título */}
                <h2
                    className="text-sm md:text-3xl uppercase tracking-[.5em] mb-8"
                    style={{
                        fontFamily: "'Helvetica Now', sans-serif",
                        color: "#FFFFFF",
                    }}
                >
                    Ubicación
                </h2>

                {/* Coordenadas estáticas */}
                <div className="text-center text-[111px] font-light tracking-[5rem] leading-tight mb-12 mt-16">
                    {/* Latitud */}
                    <div className="block">
                        {latitude.toFixed(5)}
                    </div>

                    {/* Longitud */}
                    <div className="block">
                        {longitude.toFixed(4)}
                    </div>
                    <div className="mt-2 w-16 h-1 bg-white ms-auto mr-36"></div>
                </div>

                {/* Texto en dos columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-base text-gray-200 bg-black p-7 shadow-lg max-w-5xl mx-auto mt-16">
                    {/* Primera columna */}
                    <div className="flex flex-col justify-between border-r border-gray-600 pr-6">
                        <p className="leading-relaxed mb-8">
                            Woods Bagot - International architecture firm based in Adelaide, South Australia. Specializes in the design and planning of buildings in a wide variety of sectors and disciplines.
                        </p>
                        <p className="leading-relaxed">
                            The main problem of the current site is that it does not reflect high level of competence and modernity of this architectural bureau. The content is not well structured for quick and easy reading. The challenge was to correct these shortcomings.
                        </p>
                    </div>

                    {/* Segunda columna */}
                    <div className="flex flex-col justify-between">
                        <p className="leading-relaxed mb-8">
                            Woods Bagot is now established worldwide, with studios in six regions: Southeast Asia, China, Australia & NZ, Europe, the Middle East, and North America.
                        </p>
                        <p className="leading-relaxed">
                            The design is made in a minimalist style, with work done with accents. Layouts are designed with dark modern style by default and the ability to switch to light mode. These solutions were chosen to complete the main task.
                        </p>
                    </div>
                </div>

                {/* Video con botón de reproducción */}
                <div className="relative mt-16 ">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <button className="w-16 h-16 bg-white/70 rounded-full flex items-center justify-center hover:bg-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-black"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                    <video
                        src="URL_DE_TU_VIDEO"
                        poster="URL_DE_LA_IMAGEN_POSTER"
                        controls
                        className="min-w-full h-[600px] object-cover rounded-lg bg-black"
                    >
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                </div>
            </div>
        </section>
    );
}
