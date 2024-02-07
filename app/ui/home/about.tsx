import Image from "next/image"
import about from "../../../public/about.png"
export const About = () => {
  return (
    <div id="about" className="w-full h-screen flex flex-row-reverse justify-center items-center gap-10">
        <div>
          
          <h1 className="text-bold text-7xl">Quienes somos</h1>
          <p className="text-1xl mt-4">Somos un club de voleibol con mas de un año de experiencia entrenando atletas
            con <br></br>el proposito de hacerlos personas de bien. Estamos ubicado en Sabana Grande de 
            palenque S.C. <br/>Si esta interesado, Que esperas inscribete ya?
          </p>
          
        </div>
        <Image 
          alt="This to image of about club"
          src={about}
          width={794}
          height={763}
          />
    </div>
  )
}
