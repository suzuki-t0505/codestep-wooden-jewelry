import Image from "next/image";

export const MainContentImage = (props) => {
  return (
    <div className='w-1/2 sm:w-full'>
      <Image src={props.src} alt={props.alt} className='max-w-full align-bottom' />
    </div>
  )
}