import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  CalendarIcon,
  UserIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';

export default function RegistrationsForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl text-center lg:flex lg:justify-center`}>
        Bienvenido
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="name"
            >
              Nombre Completo
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="name"
                name="name"
                placeholder="Nombre Completo"
                required
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

      <div className="mt-4">
      <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="birthday">
        Fecha de nacimiento
      </label>
      <div className="relative">
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          id="birthday"
          type="date"
          name="birthday"
          required
        />
    
        <CalendarIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
      </div>
    </div>

    <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Numero de telefono
            </label>
            <div className="relative">
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="name"
                name="name"
                placeholder="Numero de telefono"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

    <div className="mt-4">
      <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="gender">
        Género
      </label>
      <div className="flex items-center">
        <input
          className="h-4 w-4 rounded-md border border-gray-200 bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition-colors duration-200 mr-2"
          id="male"
          type="radio"
          name="gender"
          value="male"
       
        />
        <label className="text-xs font-medium text-gray-900" htmlFor="male">
          Masculino
        </label>
      </div>
      <div className="flex items-center mt-2">
        <input
          className="h-4 w-4 rounded-md border border-gray-200 bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition-colors duration-200 mr-2"
          id="female"
          type="radio"
          name="gender"
          value="female"
        
        />
        <label className="text-xs font-medium text-gray-900" htmlFor="female">
          Femenino
        </label>
      </div>
    </div>


    <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Direccion (munisipio, provincia y sector) 
            </label>
            <div className="relative">
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="name"
                name="name"
                placeholder="Direccion"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>



          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Nombre completo del padre 
            </label>
            <div className="relative">
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="name"
                name="name"
                placeholder="Nombre del padre"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Numero de telefono del padre
            </label>
            <div className="relative">
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="name"
                name="name"
                placeholder="Contacto del padre"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Nombre completo de la madre 
            </label>
            <div className="relative">
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="name"
                name="name"
                placeholder="Nombre de la madre"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>


          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Numero de telefono de la madre
            </label>
            <div className="relative">
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="name"
                name="name"
                placeholder="Contacto de la Madre"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>


          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Nombre completo del tutor
            </label>
            <div className="relative">
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="name"
                name="name"
                placeholder="Nombre del tutor"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>


          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Numero de telefono del tutor
            </label>
            <div className="relative">
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="name"
                name="name"
                placeholder="Contacto del tutor"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <RegistrationButton />
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}

function RegistrationButton() {
  return (
    <Button className="mt-4 w-full">
      Confirmar <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
