import memojiImage from '@/assets/images/memoji- notebook.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import SpaceshipIncon from '@/assets/icons/space-ship-space-svgrepo-com.svg'
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
  <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
    <div className="absolute inset-0 -z-30 opacity-5"
     style={{
      backgroundImage: `url(${grainImage.src})`,
    }}></div>

    <div className="size-[620px] hero-ring"></div>
    <div className="size-[820px] hero-ring"></div>
    <div className="size-[1020px] hero-ring"></div>
    <div className="size-[1220px] hero-ring"></div>
    <HeroOrbit size={800} rotation={0}>
      <SpaceshipIncon className="size-28 fill-current text-gray-100"/>
      </HeroOrbit>
    <div className="container">
      <div className="flex flex-col items-center">
      <Image src={memojiImage} className="size-[100px]" alt='lucas usando notebook' />
      <div className="bg-gray-900 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
        <div className="absolute bg-green-400 size-2.5 animate-ping rounded-full opacity-75"></div>
        <div className="bg-green-500 size-2.5 rounded-full"></div>
        <div className="text-sm font-medium">Disponível para trabalhos</div>
      </div>
      </div>

      <div className="max-w-lg mx-auto">
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
        Transformando Idéias em Realidade
        </h1>
      <p className="mt-4 text-center text-white/60 md:text-lg">
        Estou aqui pra tirar seus sonhos do papel e transformar em
        aplicaçõess de qualidade. Vamos conversar sobre seu novo projeto.
      </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore Meu Portifólio</span>
          <ArrowDown className="size-4"/>
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>👋</span>
          <span className="font-semibold">Vamos Conversar</span>
        </button>
      </div>
    </div>
  </div>
  );
};
