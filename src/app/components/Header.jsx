import Image from "next/image";
import logo from '../../../public/logo.svg';

export const Header = () => {
  return (
    <header className='max-w-[90vw] sm:max-w-full flex items-center pt-[32px] mx-auto sm:mx-[4%]'>
      <h1 className='max-w-[110px] mr-12'>
        <a href='#mainvisual'>
          <Image src={logo} alt='logo image' />
        </a>
      </h1>
      <nav>
        <ul className='flex text-sm gap-x-8'>
          <li><a href='#concept'>Concept</a></li>
          <li><a href='#work'>Work</a></li>
          <li><a href='mailto:info@sample.com?subject=お問い合わせ'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}