'use client'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneSquareAlt } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import { MdLocationOn } from 'react-icons/md';
import { useState } from 'react';

interface EmailProps {
  email: string
}




const EmailComponent: React.FC<EmailProps> = ({email})=>{
const handleEmailClick = () =>{
  window.location.href =  `mailto:${email}`;
}
return (
  <div 
  onClick={handleEmailClick}
  className='flex items-center text-xl mr-3 gap-3 text-indigo-50  hover:text-zinc-700'>
  <FaEnvelope /> <p>juaquinperez@email.com</p>
  </div>
)
}

export const Footer = () => {
  const [isPhoneCopy, setIsPhoneCopy] = useState(false)

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/oL6Tp9qxziCrEntC8', '_blank')
  }

  const handleIgClick = () => {
    window.open('https://www.instagram.com/club_joaquin_perez/', '_blank')
  }

  const handlePhoneCopy = () =>{
    
    const phoneNumber = '+1 +1 (829) 750-9632'
    navigator.clipboard.writeText(phoneNumber)
    .then(() => {
      setIsPhoneCopy(true)
      setTimeout(() => {}
      ,200)
    }).catch((error) => {
      console.log( 'Error al copiar numero de telefono',error)
    })
  }
  return (
    <>
    <h2 className='flex justify-center text-bold text-5xl md:text-7xl text-center hover:animate-bounce hover:text-sky-500 cursor-pointer'>Contáctanos</h2>
    <div className='h-auto md:h-40 w-full bg-slate-900 flex flex-wrap justify-center items-center cursor-pointer p-5 md:p-0 sm:w-full'>
      <EmailComponent email="juaquinperez@gmail.com" />
      <div
        onClick={handleLocationClick}
        className='flex items-center text-base sm:text-xl md:text-2xl lg:text-3xl gap-3 mr-3 text-indigo-50 hover:text-zinc-700'>
        <MdLocationOn /> <p>Dirección</p>
      </div>
      <div
        onClick={handlePhoneCopy}
        className='flex items-center text-base sm:text-xl md:text-2xl lg:text-3xl gap-3 mr-3 text-indigo-50 hover:text-zinc-700'>
        <FaPhoneSquareAlt /> <p>{isPhoneCopy ? 'Copiado' : '+1 (829) 750-9632'}</p>
      </div>
      <div
        onClick={handleIgClick}
        className='flex items-center text-base sm:text-xl md:text-2xl lg:text-3xl gap-3 mr-3 text-indigo-50 hover:text-zinc-700'>
        <TiSocialInstagram /> <p>@club_joaquin_perez</p>
      </div>
    </div>
  </>
  )
}
