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
            <div className="relative z-10 flex flex-col items-center justify-center pt-16 sm:pt-20 md:pt-28  px-4 sm:px-6 md:px-8">
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

                {/* Contenedor de mapa y plano */}
                <div className="w-full max-w-7xl mx-auto mt-12 px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* Mapa de Google */}
                        <div className="bg-gray-950 overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3559.4814980540636!2d-65.313917!3d-26.8564392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1740082894451!5m2!1ses-419!2sar"
                                width="600"
                                height="410"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        {/* Plano de ruta */}
                        <div className="bg-gray-950 overflow-hidden">
                            <img
                                src="/ubicacion/ruta38.jpg"
                                alt="Plano de ruta"
                                className="object-cover max-h-[410px] w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Caja de texto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-white bg-black p-3 md:p-8 max-w-7xl mx-auto mt-8 sm:my-12 md:my-16">
                    {/* Primera columna */}
                    <div className="space-y-6">
                        <div className="h-[200px] flex flex-col">
                            <h3 className="font-['Times_New_Roman'] font-bold text-2xl md:text-5xl mb-5 tracking-tighter" style={{lineHeight: "0.8"}}>Zona residencial<br/> en auge</h3>
                            <p className="text-gray-300 text-xl max-w-[70%] font-light leading-relaxed" style={{lineHeight: "1.2"}}>
                                Forma parte de un área con gran potencial de desarrollo, ideal para un proyecto de vida.
                            </p>
                        </div>
                        <div className="h-[200px] flex flex-col">
                            <h3 className="font-['Times_New_Roman'] font-bold text-2xl md:text-5xl mb-5 tracking-tighter" style={{lineHeight: "0.8"}}>Accesibilidad<br/> privilegiada</h3>
                            <p className="text-gray-300 text-xl max-w-[70%] font-light leading-relaxed" style={{lineHeight: "1.2"}}>
                                Su cercanía a Yerba Buena y conexión a través de la Ruta 339 aseguran un acceso rápido y conveniente.
                            </p>
                        </div>
                    </div>

                    {/* Segunda columna */}
                    <div className="space-y-6">
                        <div className="h-[200px] flex flex-col">
                            <h3 className="font-['Times_New_Roman'] font-bold text-2xl md:text-5xl mb-5 tracking-tighter" style={{lineHeight: "0.8"}}>Entorno<br/> exclusivo</h3>
                            <p className="text-gray-300 text-xl max-w-[70%] font-light leading-relaxed" style={{lineHeight: "1.2"}}>
                                Frente a una de las mejores canchas de golf de Tucumán, lo que suma un atractivo para los amantes de este deporte.
                            </p>
                        </div>
                        <div className="h-[200px] flex flex-col">
                            <h3 className="font-['Times_New_Roman'] font-bold text-2xl md:text-5xl mb-5 tracking-tighter" style={{lineHeight: "0.8"}}>Conexión con<br/> la naturaleza</h3>
                            <p className="text-gray-300 text-xl max-w-[70%] font-light leading-relaxed" style={{lineHeight: "1.2"}}>
                                Rodeado de un entorno residencial tranquilo y paisajes naturales al pie del cerro.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
