import React from 'react';
import { Metadata } from 'next';
import RegistrationsForm from '@/app/ui/registrations-form';

export const metadata: Metadata = {
    title: 'Registrations',
}
export default function RegistrationsPage() {
    
  return (
    <main className="
    flex items-center justify-center w-full full
    lg:flex lg:items-center lg:justify-center
    ">
      <div className="relative mx-auto flex w-full h-full lg:max-w-[800px] flex-col space-y-2.5 p-4 ">
        <div className="flex h-full w-full items-end rounded-lg bg-red-500 p-3 md:h-36">
          <div className="w-full text-white lg:flex lg:justify-center lg:w-full">
         
            <h1 className="text-center lg:text-[25px]">Formulario de Inscricion de atletas</h1>
          </div>
        </div>
        <RegistrationsForm />
      </div>
    </main>
  );
}
