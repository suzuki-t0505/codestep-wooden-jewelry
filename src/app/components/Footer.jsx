import Image from "next/image";
import logo from '../../../public/logo.svg';

export const Footer = () => {
  return (
    <footer className='mb-6 flex items-center justify-between max-w-[1000px] sm:max-w-full mx-auto sm:mx-[4%]'>
      <Image src={logo} alt='log image' className='max-w-[110px]' />
      <p className='text-sm'>&copy; 2023 Wooden Jewelry</p>
    </footer>
  )
}