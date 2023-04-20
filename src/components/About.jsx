import React, { useState, useEffect } from 'react'
import Town from '../assets/valley.jpg'
import River from '../assets/river.jpg'
import Forest from '../assets/forest.jpg'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useRef } from 'react'

export default function About() {

    const photos = [Town, River, Forest];
    const ref = useRef()
    const isInView = useInView(ref, { once: true})
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentPhotoIndex(
        (currentPhotoIndex - 1 + photos.length) % photos.length
      );
    };
  
    const handleNext = () => {
      setCurrentPhotoIndex((currentPhotoIndex + 1) % photos.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
          handleNext();
        }, 15000);
        return () => clearTimeout(timer);
      }, [currentPhotoIndex, handleNext]);


  return (
    <div className='w-full h-full justify-center items-center flex 2xl:flex-row flex-col gap-[5rem] py-[4rem] 2xl:py-[6rem]'>
      <div className='flex gap-3 relative md:w-[63%] w-[90%] 2xl:w-[35%] md:flex md:justify-center'>
        <motion.div
          ref={ref}
          key={currentPhotoIndex}
          initial={{ opacity: 0 }}
          animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src={photos[currentPhotoIndex]} width={650}className='object-cover rounded-xl shadow-lg shadow-black md:hidden 2xl:block' alt='photo' />
          <Image src={photos[currentPhotoIndex]} width={800}className='object-cover rounded-xl shadow-lg shadow-black 2xl:hidden hidden md:block' alt='photo' />
        </motion.div>
        <div onClick={handlePrev} className='absolute top-[50%] left-5 p-1 bg-black/50 rounded-full cursor-pointer hover:bg-black/80 duration-1000'>
          <MdKeyboardArrowLeft className='text-2xl text-white' />
        </div>
        <div onClick={handleNext} className='absolute top-[50%] right-5 p-1 bg-black/50 rounded-full cursor-pointer hover:bg-black/80 duration-1000'>
          <MdKeyboardArrowRight className='text-2xl text-white' />
        </div>
      </div>
        <motion.div ref={ref} initial={{opacity: 0, x: 25}} animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: 25}} transition={{ duration: 1, delay: 0.5}}>
            <h2 className='text-3xl xl:text-5xl font-bold tracking-wider text-center 2xl:text-left md:text-5xl'>About me</h2>
            <p className='mt-6 max-w-[90%] mx-auto xl:max-w-2xl text-center 2xl:text-left text-lg tracking-wide leading-[1.7] md:text-2xl md:leading-[1.8]'>Hi, my name is Jakub and I come from the beautiful mountainous region of southern Poland. As a self-taught front-end developer with one year of experience, I have a passion for building stunning and user-friendly websites that leave a lasting impression. When I&apos;m not busy with coding, I love to indulge in my hobbies, such as playing video games and exploring different parts of the world through travel.</p>
            <div className='flex md:gap-8 gap-6 xl:gap-6 mt-6 justify-center 2xl:justify-normal'>
                <a target='_blank' href='https://www.linkedin.com/in/jakub-urba%C5%84ski-74903524a/'><div className='md:p-5 p-3 xl:p-3 bg-blue-600 rounded-full cursor-pointer hover:scale-110 duration-1000 hover:bg-blue-500'>
                    <SiLinkedin className='md:text-3xl xl:text-2xl text-xl  text-white' />
                </div></a>
                <a href="https://github.com/kvbaurb99" target='_blank'><div className='md:p-5 p-3 xl:p-3 bg-blue-600 rounded-full cursor-pointer hover:scale-110 duration-1000 hover:bg-blue-500'>
                    <SiGithub className='md:text-3xl xl:text-2xl text-xl text-white' />
                </div></a>
            </div>
        </motion.div>
    </div>
  )
}
