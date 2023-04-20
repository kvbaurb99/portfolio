import React, { useRef } from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiNextdotjs, SiNodedotjs, SiExpress, SiSocketdotio, SiMongodb, SiMysql, SiFigma } from 'react-icons/si'
import { motion, useInView } from 'framer-motion'
import { skillsVariants } from '@/framer'

export default function SkillsContainer() {

    const ref = useRef()

    const isInView = useInView(ref, { once: true })

  return (
    <motion.div initial='hidden' animate={isInView ? 'visible' : 'hidden'} ref={ref} variants={skillsVariants} className='w-[90%] xl:w-[30%] 2xl:w-[20%] text-3xl xl:text-5xl flex flex-wrap gap-[2rem] items-center justify-center md:text-5xl md:justify-center 2xl:justify-normal xl:py-0 py-[4rem]'>
        <div className='p-4 hover:bg-red-600 rounded-lg hover:text-white duration-1000'>
            <SiHtml5 />
        </div>
        <div className='p-4 hover:bg-yellow-500 rounded-lg hover:text-white duration-1000'>
            <SiCss3 />
        </div>
        <div className='p-4 hover:bg-yellow-500 rounded-lg hover:text-white duration-1000'>
            <SiJavascript />
        </div>
        <div className='p-4 hover:bg-blue-600 rounded-lg hover:text-white duration-1000'>
            <SiReact />
        </div>
        <div className='p-4 hover:bg-purple-600 rounded-lg hover:text-white duration-1000'>
            <SiRedux />
        </div>
        <div className='p-4 hover:bg-black rounded-lg hover:text-white duration-1000'>
            <SiNextdotjs />
        </div>
        <div className='p-4 hover:bg-green-600 rounded-lg hover:text-white duration-1000'>
            <SiNodedotjs />
        </div>
        <div className='p-4 hover:bg-blue-600 rounded-lg hover:text-white duration-1000'>
            <SiExpress />
        </div>
        <div className='p-4 hover:bg-blue-600 rounded-lg hover:text-white duration-1000'>
            <SiSocketdotio />
        </div>
        <div className='p-4 hover:bg-green-600 rounded-lg hover:text-white duration-1000'>
            <SiMongodb />
        </div>
        <div className='p-4 hover:bg-blue-600 rounded-lg hover:text-white duration-1000'>
            <SiMysql />
        </div>
        <div className='p-4 hover:bg-purple-500 rounded-lg hover:text-white duration-1000'>
            <SiFigma />
        </div>
    </motion.div>
  )
}
