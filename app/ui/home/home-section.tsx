import Image from "next/image";
import Link from "next/link";
import home from "../../../public/home.png";

export const HomeSection = () => {
  return (
    <div id="home" className="w-full h-screen flex flex-col md:flex-row justify-center items-center gap-10 md:items-center md:justify-center">
      <div className="text-center md:text-left">
        <h1 className="text-bold text-5xl md:text-8xl text-gray-900">Joaquin Perez</h1>
        <p className="text-2xl md:text-4xl mt-5">Club De Voleibol</p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-4">
          <Link
            href="/login"
            className="flex items-center rounded-lg bg-blue-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500 md:text-base"
          >
            <span>Inicia Sesión</span>
          </Link>

          <Link
            href="/registrations"
            className="flex items-center rounded-lg bg-blue-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500 md:text-base"
          >
            <span>Inscríbete YA!</span>
          </Link>
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <Image 
          src={home}
          width={600}
          height={600}
          alt="Visual image of home introduction page"
        />
      </div>
    </div>
  );
};
