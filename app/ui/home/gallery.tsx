import {Slider} from "@/app/ui/slyder/Slider"

export const Gallery = () => {
  return (
    <div id="gallery"className="w-full h-screen flex flex-col justify-center items-certer">
        <h1 className="text-bold text-7xl text-center">Eventos</h1>
         <div className="flex justify-center items-center">
         <Slider />

         </div>
        
    </div>
  )
}
