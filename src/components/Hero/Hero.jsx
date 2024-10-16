import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Education for a better world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum neque esse cupiditate at velit, odit vero voluptatem minus sunt eveniet, assumenda excepturi, consectetur totam exercitationem quia similique placeat sapiente.</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /> </button>
        </div>

    </div>
  )
}

export default Hero