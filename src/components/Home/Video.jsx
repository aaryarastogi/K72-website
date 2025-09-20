import React from 'react'
import video from "../../../public/video.mp4"

const Video = () => {
  return (
    <div>
      <video src={video} autoPlay loop muted className='h-full w-full object-cover'/>
    </div>
  )
}

export default Video
