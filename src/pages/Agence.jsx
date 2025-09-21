import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]
  
  useGSAP(function(){
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger: imageDivRef.current, 
        start: 'top 23.2%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: function(elem){
          let imageIndex;
          if(elem.progress < 1){
            imageIndex = Math.floor(elem.progress * imageArray.length);
          }
          else{
            imageIndex = imageArray.length-1;
          }
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    })
  })

  return (
    <div className='bg-white'>
      <div className='relative py-1'>
        <div ref={imageDivRef} 
        className="absolute lg:w-[15vw] w-[25vw] lg:rounded-4xl rounded-xl lg:h-[20vw] h-[20vw] overflow-hidden left-[30vw] -top-3/12">
          <img ref={imageRef}
          className='h-full w-full object-cover'
          src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"/>
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[40vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[17vw] '>
              Soixan7e <br/> Douze
            </h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-2 p-3'>
            <p className='lg:text-5xl leading-tight text-xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence