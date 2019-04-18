import React from 'react'
import logo from '../styles/assets/whiteNoBack.png'
import {Link} from 'react-router-dom'

const Nav = ({color, update}) => color === 'white' ? (
  <div className={`nav-white`} >
    <h1 className='nav-header'>mirrored memories.</h1>
  </div>
) : (
  <div className={`nav-black`} >
    <Link to='/' onClick={() => update('white')}>
      <div className='nav-logo'>
        <img src={logo} alt='' />
      </div>
    </Link>
    <Link to='/about' ><div className='nav-link' >ABOUT</div></Link>
    <Link to='/gallery' ><div className='nav-link' >GALLERY</div></Link>
    <Link to='/packages' ><div className='nav-link' >PACKAGES</div></Link>
    <Link to='/quote' ><div className='nav-link' >REQUEST A QUOTE</div></Link>
    <Link to='/contact' ><div className='nav-link' >CONTACT US</div></Link>
  </div>
)

export default Nav;