import Image from "next/image";
import about from "../../../public/about.png";

export const About = () => {
  return (
    <div id="about" className="w-full h-screen flex flex-col md:flex-row justify-center items-center gap-10">
      <div className="text-center md:text-left">
        <h1 className="text-bold text-5xl md:text-7xl">Quiénes somos</h1>
        <p className="text-base md:text-lg mt-4">
          Somos un club de voleibol con más de un año de experiencia entrenando atletas con el propósito de hacerlos personas de bien. Estamos ubicados en Sabana Grande de Palenque, S.C. Si estás interesado, ¿qué esperas? ¡Inscríbete ya!
        </p>
      </div>
      <div>
        <Image 
          alt="This to image of about club"
          src={about}
          width={794}
          height={763}
        />
      </div>
    </div>
  );
};
