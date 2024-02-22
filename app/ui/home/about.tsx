import Image from "next/image";
import about from "../../../public/about.png";

export const About = () => {
  return (
    <div id="about" className="
    w-full h-full flex flex-col justify-center items-center 
    lg:flex-row-reverse lg:justify-center lg:items-start
    ">
      <div className="
      text-center
      lg:w-full lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center">
        <h1  className="
        text-bold text-5xl 
        lg:cursor-pointer lg:hover:text-gray-700
        ">Quiénes somos</h1>
        <p className="
        lg:cursor-pointer lg:hover:text-gray-500
        text-base mt-4">
          Somos un club de voleibol con más de un año de experiencia entrenando atletas con el propósito de hacerlos personas de bien. Estamos ubicados en Sabana Grande de Palenque, S.C. Si estás interesado, ¿qué esperas? ¡Inscríbete ya!
        </p>
      </div>
      <div className="
      h-full w-full flex justify-center items-center mt-[100px] mb-[100px]
      lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center">
        <Image 
          alt="This to image of about club"
          src={about}
          width={794}
          height={763}
          className="
          lg:cursor-pointer lg:animate-pulse lg:transition-colors
          "
        />
      </div>
    </div>
  );
};
