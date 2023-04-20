import React from 'react';
import Discord from '../../assets/discord.png';
import GPT from '../../assets/GPT.png';
import Finder from '../../assets/Finder.png'
import Image from 'next/image';
import Kanban from '../../assets/kanban.png';
import Audiophile from '../../assets/audiophile.png'
import { animationVariant } from '@/framer';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Project({ tag, description, link }) {
  let imageSrc = null;

  const ref = useRef()

  const isInView = useInView(ref, { once: true })

  if (tag === 'discord') {
    imageSrc = Discord;
  } else if (tag === 'gpt') {
    imageSrc = GPT;
  } else if (tag === 'kanban') {
    imageSrc = Kanban;
  } else if (tag === 'audiophile') {
    imageSrc = Audiophile;
  } else if (tag === 'finder') {
    imageSrc = Finder;
  }

  return (
    <motion.div variants={animationVariant} ref={ref} initial='hidden' animate={isInView ? 'visible' : 'hidden'} className='w-full mx-auto xl:w-[45%] py-[3rem] xl:py-0 xl:h-[500px] rounded-2xl bg-stone-300 flex flex-col shadow-lg shadow-black items-center justify-center'>
      {imageSrc && (
        <Image
          src={imageSrc}
          width={500}
          height={600}
          className='object-cover'
          alt='project'
        />
      )}
      <a href={link} target='_blank' className='bg-blue-600 w-[50%] md:w-[40%] mt-2 xl:mt-0 2xl:w-[30%] rounded-full py-1 text-sm xl:text-lg md:text-lg hover:bg-blue-500 hover:scale-110 duration-1000 text-center'><button>Live Demo</button></a>
      <p className='text-gray-700 text-sm mt-8 text-center w-[90%]'>Technologies: <span className='text-black font-bold tracking-wide'>{description}</span></p>
    </motion.div>
  );
}
