import Image from "next/image";
import vision from "../../../public/vision.png";

export const Vision = () => {
  return (
    <div id="vision" className="w-full h-screen flex flex-col md:flex-row justify-center items-center gap-10">
      <div className="text-center md:text-left">
        <h1 className="text-bold text-5xl md:text-7xl">Visión del Club</h1>
        <p className="text-base md:text-lg mt-4">
          Nuestra visión es desarrollar atletas competentes en sus áreas que nos puedan representar tanto a nivel nacional como internacional.
        </p>
      </div>
      <div>
        <Image
          alt="the image of vision"
          src={vision}
          width={1000}
          height={720}
        />
      </div>
    </div>
  );
};
