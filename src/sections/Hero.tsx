import memojiImage from '@/assets/images/memoji- notebook.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import SpaceshipIncon from '@/assets/icons/space-ship-space-svgrepo-com.svg';
import UfoImage from '@/assets/icons/noun-ufo-6642260.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
  <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
     <div className='absolute inset-0 [mask-image:linear-gradient(to-bottom,transparent,black_10%,black_70%,transparent)]'>
    <div className="absolute inset-0 -z-30 opacity-5"
     style={{
      backgroundImage: `url(${grainImage.src})`,
    }}></div>

    <div className="size-[620px] hero-ring"></div>
    <div className="size-[820px] hero-ring"></div>
    <div className="size-[1020px] hero-ring"></div>
    <div className="size-[1220px] hero-ring"></div>
    <HeroOrbit size={720} rotation={-72}>
      <SpaceshipIncon className="size-16 fill-current text-teal-300"/>
      </HeroOrbit>
    <HeroOrbit size={550} rotation={-14}>
      <SpaceshipIncon className="size-12 fill-current text-teal-300/75"/>
      </HeroOrbit>
    <HeroOrbit size={590} rotation={102}>
      <SpaceshipIncon className="size-8 fill-current text-teal-300/70"/>
      </HeroOrbit>
    <HeroOrbit size={430} rotation={10}>
      <UfoImage className="size-8 fill-current text-emerald-300/20"/>
      </HeroOrbit>
    <HeroOrbit size={440} rotation={74}>
      <UfoImage className="size-5 fill-current text-emerald-300/20 rotate-180"/>
      </HeroOrbit>
    <HeroOrbit size={530} rotation={180}>
      <UfoImage className="size-10 fill-current text-emerald-300/20 -rotate-45"/>
      </HeroOrbit>
    <HeroOrbit size={710} rotation={136}>
      <UfoImage className="size-14 fill-current text-emerald-300/20"/>
      </HeroOrbit>
    <HeroOrbit size={720} rotation={85}>
      <div className="size-3 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
    <HeroOrbit size={520} rotation={-41}>
      <div className="size-2 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
    <HeroOrbit size={650} rotation={-5}>
      <div className="size-3 rounded-full bg-emerald-300/20"/>
      </HeroOrbit>
      </div>



    <div className="container">
      <div className="flex flex-col items-center">
      <Image src={memojiImage} className="size-[100px]" alt='lucas usando notebook' />
      <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
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
