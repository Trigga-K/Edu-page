import React from 'react'
import './VideoPlayer.css'
import vidz from '../../assets/vidz.mp4'

const VideoPlayer = () => {
  return (
    <div className='video-player hide'>
         <video src={vidz} autoPlay muted controls>

         </video>
    </div>
  )
}

export default VideoPlayer