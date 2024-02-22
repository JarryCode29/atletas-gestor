import { Metadata } from 'next';
import RegistrationsForm from '@/app/ui/registrations-form';

export const metadata: Metadata = {
    title: 'Registrations',
}
export default function LoginPage() {
    
  return (
    <main className="
    flex items-center justify-center w-full h-full
    lg:flex lg:items-center lg:justify-center lg:w-full
    ">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-red-500 lg:bg-white p-3 md:h-36">
          <div className="w-full text-white lg:flex lg:justify-center lg:w-full">
         
            <h1 className="text-center lg:hidden">Formulario de Inscricion de atletas</h1>
          </div>
        </div>
        <RegistrationsForm />
      </div>
    </main>
  );
}