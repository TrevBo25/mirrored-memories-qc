import React from 'react'

const Footer = ({color, type}) => (
  <div className={`footer-${color}-${type}`}>
    <div className='footer-media'>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-yelp"></i>
        <i class="fab fa-pinterest-p"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-facebook-f"></i>
        <i class="far fa-envelope"></i>
    </div>
  </div>
)

export default Footer;