import React from 'react'
import { Raleway } from 'next/font/google'
import SkillsContainer from './SkillsContainer'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { containerVariants } from '@/framer'

const roboto = Raleway({ subsets: ['latin'], weight: '500' })

export default function Skills() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
 




  return (
    <div className='w-full 2xl:min-h-[700px] bg-white flex xl:flex-row flex-col items-center justify-around py-[4rem] xl:py-[4rem] 2xl:py-0'>
        <motion.div variants={containerVariants} ref={ref} initial='hidden' animate={isInView ? 'visible' : 'hidden'} className='text-[16px] md:text-[20px] xl:text-[18px] w-[90%] xl:w-[40%] text-center xl:text-left'>
            <p className={`${roboto.className} tracking-wider leading-[1.6]`}>When creating websites, I focus on both aesthetics and functionality. I utilize the latest front-end technologies, mainly React, to create an attractive and interactive website. I also pay attention to content optimization, ensuring that the website loads quickly and delivers the best user experience possible.</p>
            <p className={`mt-4 ${roboto.className} tracking-wider leading-[1.6]`}>When it comes to the backend, I utilize Node.js and MongoDB to create server-side functionality and databases for web applications. Additionally, I use Socket.io for real-time features, allowing users to interact with the website in real-time. By combining these technologies, I am able to create dynamic and responsive web applications that provide a seamless user experience.</p>
        </motion.div>
        <SkillsContainer />
    </div>
  )
}
