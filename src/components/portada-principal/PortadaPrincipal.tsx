/* eslint-disable @next/next/no-img-element */
export default function PortadaPrincipal() {
    return (
        <section id="concepto" className="relative h-screen text-white font-sans">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 z-0 bg-black">
                <img
                    src="URL_DE_TU_IMAGEN" // Reemplaza con la URL de tu imagen
                    alt="Fondo principal"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Gradientes superpuestos */}
            <div className="absolute inset-0 z-30 pointer-events-none">
                {/* Gradiente hacia arriba y abajo */}
                <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 md:h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-32 sm:h-36 md:h-44 bg-gradient-to-b from-black via-black/30 to-transparent" />

                {/* Gradiente hacia los costados */}
                <div className="absolute inset-y-0 left-0 w-8 sm:w-10 md:w-12 bg-gradient-to-r from-black via-black/50 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-8 sm:w-10 md:w-12 bg-gradient-to-l from-black via-black/50 to-transparent" />
            </div>

            {/* Contenido principal */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 text-center mx-auto max-w-[90%] sm:max-w-2xl md:max-w-4xl">
                {/* Título principal */}
                <h1 className="text-[40px] sm:text-[60px] md:text-[90px] tracking-[0.5rem] sm:tracking-[2rem] md:tracking-[3.5rem] font-extralight leading-none">
                    WALDHAUS
                </h1>
                {/* Subtítulo */}
                <h2 className="text-[18px] sm:text-[22px] md:text-[28px] tracking-[0.5rem] sm:tracking-[0.7rem] md:tracking-[1rem] font-light mt-2">
                    RESIDENCES
                </h2>
                {/* Descripción */}
                <p className="text-sm sm:text-base max-w-full mt-6 sm:mt-8 leading-relaxed px-2 sm:px-4 md:px-8">
                    Con una inmejorable ubicación y accesibilidad, Waldhaus forma parte de una nueva propuesta residencial sobre el eje Yerba Buena - San Pablo, una de las zonas de mayor crecimiento y potencial del sector Oeste de Tucumán.
                    <br />
                    <br />
                    Waldhaus está compuesto por dos torres de cinco pisos Bajo nuestra linea Premium, con departamento mono, 1 y 2 dormitorios amplios, luminosos y confortables, diseñados siempre dentro de un concepto de categoría superior que caracteriza a los edificios COLETTI, todas ellos con grandes terrazas y asadores incorporados.
                    Con acceso sobre la Ruta 339, frente a una de las mejores canchas de Golf de la provincia y su cercanía con Yerba Buena, hacen de esta ubicación un óptimo punto para desarrollar un proyecto de vida.
                </p>
            </div>
        </section>
    );
}
