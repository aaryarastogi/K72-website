import React, { useRef } from 'react'

const SimpleNavbar = ({setNavOpen}) => {
  const navGreenRef = useRef(null);
  
  return (
    <div 
        onMouseEnter={()=>{
        navGreenRef.current.style.height = '100%'
        }} 
        onMouseLeave={()=>{
        navGreenRef.current.style.height='0%'
        }}
        onClick={()=>{
        setNavOpen(true)
        }}
        className='lg:h-14 h-12 bg-black relative lg:w-[16vw] w-44 text-white cursor-pointer'>
        <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-full w-full'></div>
            <div className='relative flex flex-col lg:gap-2 gap-1 items-end justify-center h-full lg:px-12 px-8'>
                <div className='lg:w-18 w-12 h-0.5 bg-white'></div>
                <div className='lg:w-10 w-6 h-0.5 bg-white'></div>
            </div>
    </div>
  )
}

export default SimpleNavbar