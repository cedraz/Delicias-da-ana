import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Herosection.css';

function Herosection({description, src, alt, buttonLabel}) {
  return (
    <>
      <div className="container">
        <div className='hero-row'>
          <div className='col'>
            <div className="hero-text-wrapper">
              <p className='hero-subtitle'>
                  {description}
                </p>
                <Link to='/produtos' className='hero-button-wrapper'>
                  <Button>
                    {buttonLabel}
                  </Button>
                </Link>
            </div>
          </div>
          <div className="col">
            <div className="hero-img-wrapper">
              <img src={src} alt={alt}  className='hero-img' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Herosection;