
import Image from "next/image"
import vision from "../../../public/vision.png"
export const Vision = () => {
  return (
    <div id="vision" className="w-full h-screen flex justify-center items-center">
     <div>
        <h1 className="text-bold text-7xl" >Vision del Club</h1>
        <p className="text-1xl mt-4" >Nuestra vision es desarrollar atletas competentes en sus area <br/>
        que nos puedan representar tanto a nivel nacional como internacional.
        </p>
     </div>
     <Image
     alt="the image of vision"
     src={vision}
     width={1000}
     height={720}
     />
    </div>
  )
}
