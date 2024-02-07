
import Image from "next/image"
import Link from "next/link"
import home from "../../../public/home.png"
export const HomeSection = () => {
  return (
    <div id="home" className="w-full  h-screen flex justify-center items-center" >
     <div className="gap-20">
         <h1 className="text-bold text-8xl text-gray-900">Joaquin Perez</h1>
         <p className="text-4xl text-center mt-5">Club De Voleibol</p>
         <div className="  flex justify-center gap-4 mt-4">
         <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500 md:text-base"
          >
            <span>Inicia Secion</span>
          </Link>

          <Link
            href="/registrations"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500 md:text-base"
          >
            <span>Inscribete YA!</span>
          </Link>
         </div>
     </div>

    <div>
        <Image 
        src={home}
        width={600}
        height={600}
        alt="Visual image of home introdution page"
    />
    </div>
    </div>
  )
}
