import Image from "next/image";
import Link from "next/link";
import home from "../../../public/home.png";

export const HomeSection = () => {
  return (
    <div id="home" className="
    flex flex-col justify-center items-center mt-20
    lg:flex lg:flex-row lg:ml-5 lg:h-screen lg:mt-0
    ">
     <div className="lg:flex flex-col items-center ">
     <h1 className="text-bold text-5xl md:text-8xl text-gray-900 lg:cursor-pointer lg:hover:text-gray-700">Joaquin Perez</h1>
        <p className="text-2xl md:text-4xl mt-5 lg:cursor-pointer lg:hover:text-gray-500">Club De Voleibol</p>
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
       
     

      <div className="mt-10 ">
        <Image 
          src={home}
          width={600}
          height={600}
          alt="Visual image of home introduction page"
          className="
          lg:cursor-pointer lg:animate-pulse lg:transition-colors"
        />
      </div>
    </div>
  );
};
