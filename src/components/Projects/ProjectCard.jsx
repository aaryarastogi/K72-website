import React from 'react'

const ProjectCard = ({image1,image2}) => {
  return (
    <>
        <div className='relative lg:w-1/2 w-full group rounded-none transition-all hover:rounded-[50px] overflow-hidden h-full bg-green-900'>
            <img className='h-full w-full object-cover' src={image1}/>
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10'>
                <h2 className='uppercase text-3xl font-[font1] border-2 px-5 pt-3 text-white border-white rounded-full'>Vior le projet</h2>
            </div>
        </div>
        <div className='relative lg:w-1/2 w-full group rounded-none transition-all hover:rounded-[50px] overflow-hidden h-full bg-green-900'>
            <img className='h-full w-full object-cover' src={image2}/>
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10'>
                <h2 className='uppercase text-3xl font-[font1] border-2 px-5 pt-3 text-white border-white rounded-full'>Vior le projet</h2>
            </div>
        </div>
    </>
  )
}

export default ProjectCard
