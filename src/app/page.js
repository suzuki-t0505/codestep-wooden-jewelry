import Image from 'next/image';
import mainvisual from '../../public/mainvisual.jpg';
import logo from '../../public/logo.svg';
import concept from '../../public/concept.jpg';
import work from '../../public/work.jpg';
import { Header } from './components/Header';
import { Mainvisual } from './components/Mainvisual';
import { Footer } from './components/Footer';
import { Concept } from './components/Concept';
import { Work } from './components/Work';

// ブレークポイントは767px

export default function Home() {
  return (
    <div>
      <Mainvisual />
      <Header />
      <main className='max-w-[1000px] sm:max-w-full mx-auto sm:mx-[4%] mb-20'>
        <Concept id='concept' />
        <Work id='work' />
      </main>
      <Footer />
    </div>
  )
}
