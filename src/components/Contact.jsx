import React from 'react'
import Computer from '../assets/image.png'
import Image from 'next/image'
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { containerVariants, skillsVariants } from '@/framer'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

export default function Contact() {

    const ref = useRef()

    const isInView = useInView(ref, { once: true })

  return (
    <div className='wave-container-projects relative z-20'>
        <div className='absolute xl:top-[5%] md:left-[25%] xl:left-[20%] flex xl:flex-row flex-col'>
        <motion.div variants={containerVariants} ref={ref} initial='hidden' animate={isInView ? 'visible' : 'hidden'}>
        <Image
            src={Computer}
            width={600}
            className='xl:w-[600px] lg:w-[500px]'
            alt='contact'
        />
        </motion.div>
        <motion.div variants={skillsVariants} ref={ref} initial='hidden' animate={isInView ? 'visible' : 'hidden'} className='mt-[10%] ml-5'>
            <h2 className='text-white text-5xl tracking-wider'>Get <span className='font-bold'>in Touch</span></h2>
            <div className='flex text-3xl text-white mt-6 gap-8 xl:gap-5 justify-center'>
                <a href="mailto:kvbaurbanski2@gmail.com"><AiOutlineMail className='hover:text-white/80 hover:scale-110 duration-1000 cursor-pointer' /></a>
                <a href="https://github.com/kvbaurb99" target='_blank'><AiOutlineGithub className='hover:text-white/80 hover:scale-110 duration-1000 cursor-pointer' /></a>
                <a href="https://www.linkedin.com/in/jakub-urba%C5%84ski-74903524a/" target='_blank'><AiOutlineLinkedin className='hover:text-white/80 hover:scale-110 duration-1000 cursor-pointer' /></a>
            </div>
        </motion.div>
        </div>
    </div>
  )
}
