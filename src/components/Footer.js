import React from 'react'
import {Link} from 'react-router-dom'

const Footer = ({color, update}) => color === 'white' ? (
  <div className={`footer-white`}>
    <div className='footer-media'>
      <a href="https://www.instagram.com/mirroredmemoriesphotoboothqc/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
      <a href="https://www.facebook.com/mirroredmemoriesqc" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
      <Link to='/contact' onClick={() => update('black')}><i class="far fa-envelope"></i></Link>
    </div>
  </div>
) : (
  <div className={`footer-black`}>
    <Link to='/'><h1 className='nav-header'>mirrored memories.</h1></Link>
    <div className='footer-media'>
      <a href="https://www.instagram.com/mirroredmemoriesphotoboothqc/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
      <a href="https://www.facebook.com/mirroredmemoriesqc" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
      <Link to='/contact' onClick={() => update('black')}><i class="far fa-envelope"></i></Link>
    </div>
  </div>
)

export default Footer;