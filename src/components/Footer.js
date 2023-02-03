import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className="column col__one">
        <p>
          Siga nosso Instagram
        </p>
        <ul>
          <li>
            <Link to='https://www.instagram.com/_deliciasda_ana/'
             className='footer__link-wrapper instagram' 
            >
            <i class="fa-brands fa-instagram"></i>
            <p>Instagram</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="column col__two">
        <p>Entre em contato com a gente</p>
        <ul>
          <li>
            <Link to='' className='footer__link-wrapper whatsapp' >
            <i class="fa-brands fa-whatsapp"></i>
            <p>Whatsapp</p>
            </Link>
          </li>
          <li>
            <Link to='' className='footer__link-wrapper email' >
              <i class="fa-solid fa-envelope"></i>  
              <p>Email</p>
            </Link>
          </li>
        </ul>
      </div>
      
    </footer>
  )
}
