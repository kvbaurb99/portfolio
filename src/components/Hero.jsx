import React from 'react'
import Image from 'next/image'
import HeroImage from '../assets/hero.gif'
import { motion } from 'framer-motion'
import { animationVariant } from '@/framer'

export default function Hero() {


  return (
    <div className='h-screen w-full bg-blue-600 flex flex-col-reverse lg:flex-row xl:flex-row items-center justify-center lg:justify-around xl:justify-around md:gap-[5rem] lg:gap-0 gap-[3rem] xl:gap-0'>
        <motion.div variants={animationVariant} initial='hidden' animate='visible' className='text-white md:text-6xl lg:text-5xl text-4xl w-[95%] lg:w-auto xl:w-auto xl:text-6xl tracking-wide text-center xl:text-left lg:text-left md:w-full lg:ml-6 xl:ml-6 2xl:ml-0'> 
            <h1>Hello!</h1>
            <p className='xl:max-w-3xl lg:max-w-3xl md:max-w-[80%] mx-auto mt-3 leading-[1.4] xl:leading-[1.2]'>I am creating <span className='font-bold'>Interactive</span> and <span className='font-bold'>Responsive</span> websites.</p>
        </motion.div>
        <div>
            <Image
                src={HeroImage}
                width={650}
                className='object-cover'
                alt='hero'
            />
        </div>
    </div>
  )
}
