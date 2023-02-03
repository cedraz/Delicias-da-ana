import React from 'react'
import verenaImg from '../img/sobre.jpg'
import './Sobre.css'

function Sobre() {
  return (
    <div className='sobre-container'>
      <div className='sobre-row'>
        <div className='sobre__img-wrapper'>
          <img src={verenaImg} alt="verena" className='sobre-img' />
        </div>
        <div className='sobre__text-wrapper'>
          <h1>Olá me chamo Ana Verena</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat, 
            esse sed tenetur reprehenderit molestiae animi id repudiandae 
            fugiat totam eum nihil impedit veritatis?
            Tenetur nihil animi dolore odit nulla!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sobre