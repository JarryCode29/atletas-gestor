  'use client'
  import Link from "next/link";
  import { useRef,useState, useEffect } from "react";
  import { usePathname } from "next/navigation";

  interface LinkItem {
    href: string;
    text: string;
  }


  export const NavHome = () => {

    const [isIntersecting, setIsIntersecting] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const navRef = useRef<HTMLDivElement>(null);

    const links: LinkItem[] = [
          {href: '#home', text: 'Inicio'},
          {href: '#about', text: 'Quienes Somos'},
          {href: '#vision', text: 'Vision del Club'},
          {href: '#gallery', text: 'Galeria'},
      ];

      useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { threshold: 0 }
        );
        const currentNavRef = navRef.current;

        if (currentNavRef) {
            observer.observe(currentNavRef);
        }

        return () => {
            if (currentNavRef) {
                observer.unobserve(currentNavRef);
            }
        };
    }, []);
    


      return (
        <>
        <nav
          ref={navRef}
          className={`h-[60px] ${isIntersecting ? 'fixed bg-red-500 opacity-90 w-full' : ''}`}
        >
          <div className="relative flex items-center justify-between">
            <Link href="/">
              <p className="text-white font-bold text-2xl mt-4 ml-3">JP</p>
            </Link>
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none mt-5"
                style={{ position: "relative",  zIndex: "999" }}
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
            isMenuOpen ? 'block absolute top-full right-0  lg:w-full' : 'hidden'
          } lg:flex lg:space-x-4 lg:items-center text-white bg-red-500 lg:bg-transparent`}
          
        >
              {links.map((link, page) => (
                <li
                  key={page}
                  className={`transition duration-300 px-2 py-1 rounded text-xl ${
                    pathname === link.href ? 'bg-gray-700' : ''
                  }`}
                >
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </>
      
      
      
      );
  };
