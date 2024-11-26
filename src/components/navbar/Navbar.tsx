'use client';

import { usePathname } from "next/navigation";

const navItems = [
    { name: 'concepto', href: '#concepto' },
    { name: 'ubicación', href: '#ubicacion' },
    { name: 'proyecto', href: '#proyecto' },
    { name: 'unidades', href: '#unidades' },
    { name: "estudio", href: '#estudio' },
    { name: 'contacto', href: '#contacto' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full py-14 px-3 z-50 font-sans">
            <ul className="flex max-w-7xl mx-auto justify-center gap-10 uppercase">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <li key={item.name} className="relative text-white text-lg cursor-pointer">
                            <a
                                href={item.href}
                                className={`relative group ${isActive ? 'text-gray-300' : 'text-white'
                                    }`}
                            >
                                {/* Texto del ítem */}
                                <span className="hover:text-gray-300 transition-colors duration-200">
                                    {item.name}
                                </span>

                                {/* Efecto de resplandor */}
                                <span
                                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 bg-white blur-xl transition-all duration-300"
                                ></span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
