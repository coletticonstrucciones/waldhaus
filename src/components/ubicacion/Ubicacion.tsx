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

                {/* Contenedor de mapa y plano */}
                <div className="w-full max-w-7xl mx-auto mt-12 px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* Mapa de Google */}
                        <div className="aspect-[4/3] bg-gray-950 overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.4024741001837!2d-65.22226!3d-26.82414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ5JzI3LjAiUyA2NcKwMTMnMjAuMiJX!5e0!3m2!1ses!2sar!4v1645564271058!5m2!1ses!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Plano de ruta */}
                        <div className="aspect-[4/3] bg-gray-950 overflow-hidden">
                            <img
                                src="/ubicacion/ruta38.jpg"
                                alt="Plano de ruta"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Caja de texto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 text-sm md:text-base text-gray-200 bg-black p-4 sm:p-6 md:p-7 shadow-lg max-w-5xl mx-auto mt-8 sm:my-12 md:my-16">
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

                {/* Contenido adicional */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12  w-full max-w-7xl mx-auto mt-12 px-4 sm:px-6 md:px-8">
                    {/* Sección 1: Texto e Imagen */}
                    <div className="flex flex-col justify-between space-y-4 sm:space-y-6">
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                            style={{ fontFamily: "'Helvetica Now', sans-serif" }}
                        >
                            about&nbsp;&nbsp;&nbsp;the
                            <br />
                            <span>view_</span>
                        </h2>

                        <p
                            className=" md:text-[14.2px] leading-relaxed text-sm sm:text-base"

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
                            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                            style={{ fontFamily: "'Helvetica Now', sans-serif" }}
                        >
                            about&nbsp;&nbsp;&nbsp;the
                            <br />
                            <span>services_</span>
                        </h2>
                        <p
                            className="text-sm sm:text-base md:text-[14.2px] leading-relaxed"

                        >
                            Waldhaus Residences redefine el concepto de vida Premium en el eje Yerba Buena-San Pablo. Con accesibilidad privilegiada, vistas abiertas y diseño superior, ofrece unidades luminosas con terrazas, áreas comunes exclusivas y materiales de alta calidad, ideales para quienes valoran la elegancia en los detalles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
