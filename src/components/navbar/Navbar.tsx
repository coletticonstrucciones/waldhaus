/* eslint-disable @next/next/no-img-element */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const navItems = [
    { name: 'concepto', href: 'concepto' },
    { name: 'ubicación', href: 'ubicacion' },
    { name: 'proyecto', href: 'proyecto' },
    { name: 'unidades', href: 'unidades' },
    { name: "estudio", href: 'estudio' },
    { name: 'contacto', href: 'contacto' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Desktop Navigation */}
            <nav className={`hidden md:block fixed top-0 left-0 w-full py-4 z-[60] font-sans transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-0' : ''}`}>
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    <div className="w-48">
                        <Image
                            src='/colleti-logo.png'
                            width={150}
                            height={150}
                            alt='Logo'
                        />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <ul className="flex justify-center items-center gap-10 uppercase">
                            {navItems.map((item) => (
                                <li key={item.name} className="relative text-white text-lg cursor-pointer">
                                    <Link
                                        to={item.href}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={1000}
                                        className="relative group"
                                        activeClass="text-gray-300"
                                    >
                                        {/* Texto del ítem */}
                                        <span className="hover:text-gray-300 transition-colors duration-200">
                                            {item.name}
                                        </span>

                                        {/* Efecto de resplandor */}
                                        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 bg-white blur-xl transition-all duration-300"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-48"></div> {/* Empty div for balance */}
                </div>
            </nav>

            {/* Mobile Navigation Button */}
            <motion.button
                className={`md:hidden fixed right-6 z-[70] w-10 h-10 flex flex-col justify-center items-center rounded-full transition-all duration-300 ${scrolled
                    ? 'top-8 bg-black/80 backdrop-blur-md'
                    : 'top-4 bg-black'
                    }`}
                onClick={toggleMenu}
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                <motion.div className="relative w-6 h-3">
                    <motion.span
                        className="absolute top-0 left-0 w-6 h-0.5 bg-white origin-center"
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: 45, y: 6 },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <motion.span
                        className="absolute top-[6px] left-0 w-6 h-0.5 bg-white"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        className="absolute top-[12px] left-0 w-6 h-0.5 bg-white origin-center"
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: -45, y: -6 },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                </motion.div>
            </motion.button>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay de fondo */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed md:hidden inset-0 bg-black/60 backdrop-blur-sm z-30"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className={`fixed md:hidden top-0 right-0 w-full sm:w-80 h-full z-40 flex items-center justify-center ${scrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-black'
                                }`}
                        >
                            <motion.ul
                                className="flex flex-col items-center gap-8 uppercase w-full px-8"
                                initial="closed"
                                animate="open"
                                variants={{
                                    open: {
                                        transition: {
                                            staggerChildren: 0.1,
                                        },
                                    },
                                    closed: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            staggerDirection: -1,
                                        },
                                    },
                                }}
                            >
                                {navItems.map((item) => (
                                    <motion.li
                                        key={item.name}
                                        className="w-full text-center"
                                        variants={{
                                            open: { y: 0, opacity: 1 },
                                            closed: { y: 20, opacity: 0 },
                                        }}
                                    >
                                        <Link
                                            to={item.href}
                                            spy={true}
                                            smooth={true}
                                            offset={-80}
                                            duration={1000}
                                            className="text-white text-2xl hover:text-gray-300 transition-colors duration-200 block w-full py-2"
                                            onClick={() => setIsOpen(false)}
                                            activeClass="text-gray-300"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
