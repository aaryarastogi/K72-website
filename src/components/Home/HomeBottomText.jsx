import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 text-white'>
        <p className='absolute lg:w-[20vw] w-64 lg:right-0 right-5 bottom-28  lg:bottom-38 font-[font1] lg:text-base text-xs leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center lg:h-24 lg:px-5 px-3 pt-3 border-white rounded-full uppercase'>
            <Link className='text-[6.5vw]' to='/projects'>Projects</Link>
        </div>
        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center lg:h-24 lg:px-5 px-3 pt-3 border-white rounded-full uppercase'>
            <Link className='text-[6.5vw]' to='/agence'>Agence</Link>
        </div>
    </div>
  )
}

export default HomeBottomText