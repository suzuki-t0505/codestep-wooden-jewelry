import Image from "next/image";
import mainvisual from '../../../public/mainvisual.jpg';

export const Mainvisual = () => {
  return (
    <div id='mainvisual' className='max-w-[90vw] sm:max-w-full mx-auto mt-[4%] sm:mt-0 '>
      <Image
        src={mainvisual}
        alt='mainvisual'
        className='max-w-full sm:object-cover sm:h-[50vh]'
      />
    </div>
  )
}