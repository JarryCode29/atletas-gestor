import { Slider } from "@/app/ui/slyder/Slider";

export const Gallery = () => {
  return (
    <div id="gallery" className="w-full h-screen flex flex-col justify-center items-center sm:w-[30px]">
      <h1 className="text-bold text-7xl text-center">Eventos</h1>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-screen-md">
          {/* Establece el ancho máximo del slider según el tamaño de la pantalla */}
          <Slider />
        </div>
      </div>
    </div>
  );
};
