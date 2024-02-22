import { Slider } from "@/app/ui/slider/Slider";

export const Gallery = () => {
  return (
    <div id="gallery" className="w-full h-screen flex flex-col justify-center items-center ">
      <h1 className="
      lg:cursor-pointer lg:hover:text-gray-700
      text-bold text-7xl text-center">Eventos</h1>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-screen-md lg:mac-w-screen-lg">
          {/* Establece el ancho máximo del slider según el tamaño de la pantalla */}
          <Slider />
        </div>
      </div>
    </div>
  );
};
