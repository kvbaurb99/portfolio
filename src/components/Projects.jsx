import React from 'react'
import projects from '../data/projects.json'
import Project from './utils/Project'

export default function Projects() {
  return (
    <div className='w-full h-full bg-stone-600 text-white py-[15%]'>
        <div className='w-[75%] mx-auto'>
            <div>
                <h2 className='text-3xl text-center xl:text-left xl:text-5xl font-bold tracking-wider mb-[4rem]'>My Projects</h2>
            </div>
            <div className='flex gap-[4rem] flex-wrap'>
                {projects.map(project => (
                    <Project
                        key={project.tag}
                        tag={project.tag}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}
