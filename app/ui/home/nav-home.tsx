'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";



export const NavHome = () => {
  const pathname = usePathname();
    const links = [
        {href: '#home', text: 'Inicio'},
        {href: '#about', text: 'Quienes Somos'},
        {href: '#vision', text: 'Vision'},
        {href: '#gallery', text: 'Galeria'},
    ];

    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-black p-4 ">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <p className="text-white font-bold text-xl ">JP</p>
                    </Link>
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <ul
                        className={`${
                            isMenuOpen ? 'block' : 'hidden'
                        } lg:flex lg:space-x-4 lg:items-center text-white`}
                    >
                        {links.map((link, page) => (
                            <li key={page} className={`transition duration-300 px-2 py-1 rounded ${
                              pathname === link.href ? 'hover:bg-gray-700': ''
                              }`}>
                                <Link href={link.href}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};
