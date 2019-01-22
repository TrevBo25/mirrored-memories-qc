import React from 'react'
import logo from '../styles/assets/whiteNoBack.png';

const Landing = () => (
  <div className='landing'>
    <div className='landing-logo'>
        <img src={logo} alt='Mirrored Memories QC Logo' className='logo' />
    </div>
    <div className='landing-links'>
        <div className='holder about'>
            <div className='down'>
                <h3 className='title'>ABOUT</h3>
            </div>
            <div className='up'></div>
        </div>
        <div className='holder gallery'>
            <div className='down'>
                <h3 className='title'>GALLERY</h3>
            </div>
            <div className='up'></div>
        </div>
        <div className='holder quote'>
            <div className='down'>
                <h3 className='title'>REQUEST A QUOTE</h3>
            </div>
            <div className='up'></div>
        </div>
        <div className='holder packages'>
            <div className='down'>
                <h3 className='title'>PACKAGES</h3>
            </div>
            <div className='up'></div>
        </div>
        <div className='holder contact'>
            <div className='down'>
                <h3 className='title'>CONTACT US</h3>
            </div>
            <div className='up'></div>
        </div>
    </div>
  </div>
)

export default Landing;