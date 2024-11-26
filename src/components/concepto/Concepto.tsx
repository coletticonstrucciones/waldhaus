/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from "react";

const slides = [
    {
        id: 1,
        image: "/concepto-slide.png", // Reemplaza con tus URLs de imágenes
        alt: "Imagen 1",
    },
    {
        id: 2,
        image: "/concepto-slide.png", // Reemplaza con tus URLs de imágenes
        alt: "Imagen 2",
    },
    {
        id: 3,
        image: "/concepto-slide.png", // Reemplaza con tus URLs de imágenes
        alt: "Imagen 3",
    },
];

export default function Concepto() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative bg-black text-white font-sans pb-28 ">
            <div className="max-w-7xl mx-auto">
                {/* Título estilizado */}
                <div className="text-center  pb-8 mx-auto">
                    {/* <h1 className="text-[104px] font-light italic tracking-wide" style={{ fontFamily: "'Hello January', cursive" }}>
                        Elegancia austera
                    </h1> */}
                    <img
                    src="/elegancia-title.png"
                    alt="Elegancia austera"
                    className="object-contain aspect-video mx-auto"
                    />
                </div>

                {/* Slider */}
                <div className="relative bg-black text-white h-[600px] w-full mb-16 ">
                    <div className="relative h-full overflow-hidden max-w-5xl mx-auto">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-transform duration-700 ${index === currentSlide ? "translate-x-0" : "translate-x-full"
                                    }`}
                                style={{
                                    transform:
                                        index === currentSlide
                                            ? "translateX(0)"
                                            : index < currentSlide
                                                ? "translateX(-100%)"
                                                : "translateX(100%)",
                                }}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Flechas de navegación */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200"
                    >
                        &#8249;
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200"
                    >
                        &#8250;
                    </button>

                    {/* Indicadores */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full cursor-pointer ${index === currentSlide ? "bg-white" : "bg-gray-500"
                                    }`}
                                onClick={() => setCurrentSlide(index)}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Contenido adicional */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Sección 1: Texto e Imagen */}
                    <div className="flex flex-col justify-between">
                        <h2
                            className="text-5xl font-bold mb-4 leading-tight"
                            style={{ fontFamily: "'Helvetica Now', sans-serif" }}
                        >
                            about&nbsp;&nbsp;&nbsp;the
                            <br />
                            <span>view_</span>
                        </h2>

                        <p
                            className="text-[14.2px] leading-relaxed"
                            style={{ fontFamily: "'Open Sans', sans-serif" }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipiscing elit pulvinar hac ridiculus mauris,
                            dignissim luctus libero ullamcorper risus fermentum duis blandit socios litora porttitor.
                            Pellentesque ligula sodales egestas primis fames tempus habitasse curae nostra accumsan
                            praesent class platea.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <img
                            src="/about-the-view.png"
                            alt="Vista secundaria"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Sección 2: Imagen y Texto */}
                    <div className="flex items-center">
                        <img
                            src="about-the-services.png"
                            alt="Servicios secundarios"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <h2
                            className="text-5xl font-bold mb-4"
                            style={{ fontFamily: "'Helvetica Now', sans-serif" }}
                        >
                            about&nbsp;&nbsp;&nbsp;the
                            <br />
                            <span>services_</span>
                        </h2>
                        <p
                            className="text-[14.2px] leading-relaxed"
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
