/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const slides = [
    {
        id: 1,
        image: "/Slider/1.jpg", 
        alt: "Imagen 1",
    },
    {
        id: 2,
        image: "/Slider/2.jpg", 
        alt: "Imagen 2",
    },
    {
        id: 3,
        image: "/Slider/3.jpg", 
        alt: "Imagen 3",
    },
    {
        id: 4,
        image: "/Slider/4.jpg", 
        alt: "Imagen 1",
    },
    {
        id: 5,
        image: "/Slider/5.jpg", 
        alt: "Imagen 2",
    },
    {
        id: 6,
        image: "/Slider/6.jpg", 
        alt: "Imagen 3",
    },
];

export default function Concepto() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0, mouseX: 0, mouseY: 0, width: 0, height: 0 });
    const [isPaused, setIsPaused] = useState(false);
    const [dragStart, setDragStart] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    // Autoplay
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setDirection(1);
                setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            }, 8000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const handlePrev = () => {
        setIsPaused(true);
        setDirection(-1);
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        setTimeout(() => setIsPaused(false), 10000);
    };

    const handleNext = () => {
        setIsPaused(true);
        setDirection(1);
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsPaused(false), 10000);
    };

    // Magnifying glass effect
    const handleMagnify = (e: React.MouseEvent<HTMLDivElement>) => {
        if (imageRef.current && !isMobile) {
            const rect = imageRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            setZoomPosition({
                x: x,
                y: y,
                mouseX: e.clientX - rect.left,
                mouseY: e.clientY - rect.top,
                width: rect.width,
                height: rect.height
            });
        }
    };

    const handleDragStart = (event: any, info: PanInfo) => {
        setDragStart(info.point.x);
        setIsPaused(true);
    };

    const handleDragEnd = (event: any, info: PanInfo) => {
        const diff = info.point.x - dragStart;
        const threshold = 50; // mínimo de píxeles para cambiar de slide

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Deslizar hacia la derecha - slide anterior
                setDirection(-1);
                setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
            } else {
                // Deslizar hacia la izquierda - siguiente slide
                setDirection(1);
                setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            }
        }

        setTimeout(() => setIsPaused(false), 10000);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            scale: 1.2,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            scale: 1,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            scale: 1.2,
            opacity: 0
        })
    };

    return (
        <section className="relative bg-black text-white font-sans pb-16 sm:pb-20 md:pb-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                {/* Título estilizado */}
                <div className="text-center pb-4 sm:pb-6 md:pb-8 mx-auto">
                    <img
                        src="/elegancia-title.png"
                        alt="Elegancia austera"
                        className="object-contain aspect-video mx-auto w-full max-w-[80%] sm:max-w-[70%] md:max-w-full"
                    />
                </div>

                {/* Slider */}
                <div className="relative w-full  mx-auto md:px-10 ">
                    <div 
                        ref={sliderRef}
                        className="relative bg-black text-white h-[600px] md:h-[900px] w-full mb-8 sm:mb-12 md:mb-16 overflow-hidden touch-pan-y"
                        onMouseMove={handleMagnify}
                    >
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentSlide}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                drag={isMobile ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd}
                                transition={{
                                    x: { type: "spring", stiffness: 200, damping: 30 },
                                    opacity: { duration: 0.5 },
                                    scale: { duration: 0.5 }
                                }}
                                className="absolute inset-0"
                                onMouseEnter={() => setIsZoomed(true)}
                                onMouseLeave={() => setIsZoomed(false)}
                            >
                                <img
                                    ref={imageRef}
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].alt}
                                    className={`w-full h-full object-cover ${!isMobile && isZoomed ? 'cursor-none' : ''}`}
                                />
                                
                                {/* Magnifying glass */}
                                {isZoomed && !isMobile && (
                                    <div
                                        className="absolute w-28 h-28 pointer-events-none"
                                        style={{
                                            left: `${zoomPosition.x}%`,
                                            top: `${zoomPosition.y}%`,
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <div className="relative w-full h-full">
                                            {/* Borde exterior */}
                                            <div className="absolute inset-0 rounded-full border-2 border-white/30 backdrop-blur-sm" />
                                            {/* Contenedor del zoom */}
                                            <div className="absolute inset-[2px] rounded-full overflow-hidden">
                                                <div
                                                    className="absolute w-full h-full"
                                                    style={{
                                                        backgroundImage: `url(${slides[currentSlide].image})`,
                                                        backgroundPosition: 'center',
                                                        backgroundSize: `${zoomPosition.width * 2}px ${zoomPosition.height * 2}px`,
                                                        backgroundPositionX: -zoomPosition.mouseX * 2 + 56,
                                                        backgroundPositionY: -zoomPosition.mouseY * 2 + 56,
                                                        filter: 'brightness(1.1) contrast(1.05)',
                                                        aspectRatio: '2880/1936'
                                                    }}
                                                />
                                            </div>
                                            {/* Líneas de guía */}
                                            <div className="absolute inset-0 rounded-full border border-white/20">
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-full h-[1px] bg-white/20" />
                                                </div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="h-full w-[1px] bg-white/20" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Flechas de navegación */}
                    <button
                        onClick={handlePrev}
                        className="absolute -left-8 sm:-left-12 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 hidden md:flex items-center justify-center bg-black/80 text-white rounded-full border border-white hover:bg-black transition-all z-10"
                        aria-label="Anterior"
                    >
                        <div className="relative w-7 flex items-center">
                            <div className="w-7 h-[1px] bg-white"></div>
                            <div className="absolute left-0 w-2 h-[1px] bg-white origin-left rotate-45"></div>
                            <div className="absolute left-0 w-2 h-[1px] bg-white origin-left -rotate-45"></div>
                        </div>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute -right-8 sm:-right-12 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 hidden md:flex items-center justify-center bg-black/80 text-white rounded-full border border-white hover:bg-black transition-all z-10"
                        aria-label="Siguiente"
                    >
                        <div className="relative w-7 flex items-center">
                            <div className="w-7 h-[1px] bg-white"></div>
                            <div className="absolute right-0 w-2 h-[1px] bg-white origin-right -rotate-45"></div>
                            <div className="absolute right-0 w-2 h-[1px] bg-white origin-right rotate-45"></div>
                        </div>
                    </button>

                    {/* Indicadores */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                        {slides.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`group cursor-pointer`}
                                onClick={() => {
                                    setDirection(index > currentSlide ? 1 : -1);
                                    setCurrentSlide(index);
                                    setIsPaused(true);
                                    setTimeout(() => setIsPaused(false), 10000);
                                }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className="relative">
                                    <div 
                                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 
                                        ${index === currentSlide 
                                            ? "bg-white scale-100" 
                                            : "bg-white/30 scale-75 hover:bg-white/50"
                                        }`}
                                    />
                                    <div 
                                        className={`absolute inset-0 rounded-full transition-all duration-300
                                        ${index === currentSlide 
                                            ? "ring-2 ring-white ring-offset-2 ring-offset-black" 
                                            : ""
                                        }`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Contenido adicional */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 md:px-10  mx-auto">
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
                            className="text-sm sm:text-base md:text-[14.2px] leading-relaxed"
                            style={{ fontFamily: "'Open Sans', sans-serif" }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar hac ridiculus mauris,
                            dignissim luctus libero ullamcorper risus fermentum duis blandit socios litora porttitor.
                            Pellentesque ligula sodales egestas primis fames tempus habitasse curae nostra accumsan
                            praesent class platea.
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
                            style={{ fontFamily: "'Open Sans', sans-serif" }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar hac ridiculus mauris,
                            dignissim luctus libero ullamcorper risus fermentum duis blandit socios litora porttitor.
                            Pellentesque ligula sodales egestas primis fames tempus habitasse curae nostra accumsan
                            praesent class platea.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
