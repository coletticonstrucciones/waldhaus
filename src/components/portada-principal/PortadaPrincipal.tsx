/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState, useRef } from 'react';

export default function PortadaPrincipal() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Iniciar la animación de la imagen
        setTimeout(() => {
            setIsLoaded(true);
            // Mostrar el contenido después de que la imagen termine su animación
            setTimeout(() => {
                setShowContent(true);
            }, 1000); // Este tiempo debe coincidir con la duración de la animación de la imagen
        }, 100);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (sectionRef.current) {
            const { width, height } = sectionRef.current.getBoundingClientRect();
            const { clientX, clientY } = e;
            
            const x = (clientX / width - 0.5) * 2;
            const y = (clientY / height - 0.5) * 2;
            
            setMousePosition({ x, y });
        }
    };

    return (
        <section 
            ref={sectionRef}
            id="concepto" 
            className="relative h-screen text-white font-sans overflow-hidden bg-black"
            onMouseMove={handleMouseMove}
        >
            {/* Contenedor de la imagen con escala aumentada para evitar bordes */}
            <div 
                className={`
                    absolute inset-0 z-0 scale-[1.1] 
                    transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isLoaded ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                    transform: `
                        scale(${isLoaded ? '1.1' : '2.2'})
                        translate(
                            calc(${mousePosition.x * -20}px + ${isLoaded ? '0px' : '150px'}),
                            calc(${mousePosition.y * -20}px + ${isLoaded ? '0px' : '-100px'})
                        )
                        rotateX(${isLoaded ? mousePosition.y * -5 : -15}deg)
                        rotateY(${isLoaded ? mousePosition.x * 5 : 10}deg)
                        translateZ(${isLoaded ? '0px' : '200px'})
                    `,
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                    filter: `blur(${isLoaded ? '0px' : '12px'})`
                }}
            >
                <img
                    src="/Slider/1.jpg"
                    alt="Fondo principal"
                    className="w-full h-full object-cover brightness-[0.6]"
                />
                {/* Overlay oscuro para mejorar contraste */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Gradientes superpuestos */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute inset-x-0 bottom-0 h-32 sm:h-36 md:h-40 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-40 sm:h-44 md:h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Contenido principal */}
            <div 
                className={`
                    relative z-30 flex flex-col items-center justify-center h-full px-4 text-center mx-auto max-w-[90%] sm:max-w-2xl md:max-w-4xl
                    transition-all duration-1000 ease-out
                    ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
            >
                {/* Efecto de spotlight detrás del logo */}
                <div 
                    className="hidden md:block pointer-events-none absolute"
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
