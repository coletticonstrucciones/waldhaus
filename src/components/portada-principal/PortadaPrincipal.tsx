/* eslint-disable @next/next/no-img-element */
'use client'

export default function PortadaPrincipal() {
    return (
        <section 
            id="concepto" 
            className="relative h-screen text-white font-sans overflow-hidden"
        >
            {/* Imagen de fondo */}
            <div className="absolute inset-0 z-0 bg-black">
                <img
                    src="/home.jpg"
                    alt="Fondo principal"
                    className="w-full h-full object-cover brightness-[0.6]"
                />
                {/* Overlay oscuro para mejorar contraste */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Gradientes superpuestos */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Gradiente hacia arriba y abajo */}
                <div className="absolute inset-x-0 bottom-0 h-32 sm:h-36 md:h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-40 sm:h-44 md:h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Contenido principal */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 text-center mx-auto max-w-[90%] sm:max-w-2xl md:max-w-4xl">
                {/* Efecto de spotlight detrás del logo */}
                <div 
                    className="pointer-events-none absolute"
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        background: `radial-gradient(circle 400px at center, rgba(255,255,255,0.1), transparent 100%)`,
                        mixBlendMode: 'overlay'
                    }}
                />
                {/* Logo principal */}
                <img
                    src="/marca-waldhause.svg"
                    alt="WALDHAUS RESIDENCES"
                    className="w-[300px] sm:w-[400px] md:w-[500px] relative z-10 drop-shadow-2xl"
                />
                {/* Descripción */}
                <p className="text-sm sm:text-base max-w-[800px] mt-8 sm:mt-10 leading-relaxed font-extralight">
                    Con una inmejorable ubicación y accesibilidad, Waldhaus forma parte de una nueva propuesta residencial sobre el eje Yerba Buena - San Pablo, una de las zonas de mayor crecimiento y potencial del sector Oeste de Tucumán.
                    <br />
                    <br />
                    Waldhaus está compuesto por dos torres de cinco pisos Bajo nuestra linea Premium, con departamento mono, 1 y 2 dormitorios amplios, luminosos y confortables, diseñados siempre dentro de un concepto de categoría superior que caracteriza a los edificios COLETTI, todas ellos con grandes terrazas y asadores incorporados. Con acceso sobre la Ruta 339, frente a una de las mejores canchas de Golf de la provincia y su cercanía con Yerba Buena, hacen de esta ubicación un óptimo punto para desarrollar un proyecto de vida.
                </p>
            </div>
        </section>
    );
}
