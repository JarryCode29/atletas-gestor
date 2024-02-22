import Image from "next/image";
import vision from "../../../public/vision.png";

export const Vision = () => {
  return (
    <div id="vision" className="
    w-full h-full flex flex-col justify-center items-center mt-[150px]
   lg:h-screen lg:flex-row lg:justify-center lg:items-start
   ">
      
      <div className="
      text-center 
      lg:w-full lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center
      ">
        <h1 className="
        lg:cursor-pointer lg:hover:text-gray-700
        text-bold text-5xl 
        ">Visión del Club</h1>
        <p className="
        lg:cursor-pointer lg:hover:text-gray-500
        text-base  mt-4">
          Nuestra visión es desarrollar atletas competentes en sus áreas que nos puedan representar tanto a nivel nacional como internacional.
        </p>
      </div>
      <div className="
      h-full w-full flex justify-center items-center mt-[100px] mb-[100px]
      lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center
      ">
        <Image
          alt="the image of vision"
          src={vision}
          width={1000}
          height={720}
          className="lg:cursor-pointer lg:animate-pulse lg:transition-colors"
        />
      </div>
    </div>
  );
};
