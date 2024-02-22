import { Metadata } from 'next';
import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';
import Logo from '@/public/Captura de pantalla 2024-02-22 a la(s) 9.46.37 a. m..png';


export const metadata: Metadata = {
    title: 'Login',
}
export default function LoginPage() {
    
  return (
    <main className="
    flex items-center justify-center w-full h-screen
    lg:flex lg:items-center lg:justify-center lg:w-full
    ">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-red-500 lg:bg-white p-3 md:h-36">
          <div className="w-full text-white lg:flex lg:justify-center lg:w-full">
            <Image 
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
            className='hidden lg:block'
            />
            <h1 className="text-center lg:hidden">Administradores</h1>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}