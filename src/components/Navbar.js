import React, {useState} from 'react';
// import './Navbar.css';
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)

  return (
    <>
      <nav className='nav'>
        <Link to='/' className='navbar-logo' >
          <i className='fa fa-birthday-cake' />
        </Link>

        <div>
          <ul className={click ? 'navbar active' : 'navbar'} >
            <li>
              <Link to='/' className='nav-item'>
                <i class="fa fa-home"/>
                Início
              </Link>
            </li>
            <li>
              <Link to='/produtos' className='nav-item'>
              <i class="fa-solid fa-cart-shopping"></i>
                Produtos
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-item'>
              <i class="fa fa-circle-info"></i>
                Sobre
              </Link>
            </li>
            <li>
              <Link to='https://wa.me/71999440083' className='wpp nav-item'>
              <i class="fa-brands fa-whatsapp"></i>
                Contato
              </Link>
            </li>
              
          </ul>
        </div>

        <div className='mobile' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </nav>
    </>
  )
}

export default Navbar