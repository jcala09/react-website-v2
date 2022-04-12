// navigator bar
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'
function Navbar() {
  const [click,setClick]=useState(false);
  const [button,setButton]= useState(true);

  const handleClick =() => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => { //the button is gonna show if the window is a specific size 
    if(window.innerWidth <= 960)
    {
      setButton(false);
    }
    else{
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);
  return (
    
    <>
    <nav className="navbar">
        <div classname="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
            JeromeHub<i className="fas fa-cloud"/> 
            </Link> 
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
          </div>
          <ul className= {click ? 'nav-menu active' : 'nav-menu'}>

            <li classname= 'nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
              </li>

              <li classname= 'nav-item'>
              <Link to='/Projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
                </Link>
              </li>

              <li classname= 'nav-item'>
              <Link to='/social-media' className='nav-links' onClick={closeMobileMenu}>
                Socials
                </Link>
              </li>

              <li classname= 'nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
                </Link>
              </li>

            </ul>
      {/*button && <Button buttonStyle= 'btn--outline'> Sign up</Button>*/}
            
    </nav>
    </>
  )
}

export default Navbar
