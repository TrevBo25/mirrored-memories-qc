import React from 'react'

const AboutSection = ({flip, image, text}) => (
  <div className={flip ? 'section-flip' : 'section-flop'}>
    <div className='down'>
        <div className='image-holder'>
            <div className='image-cradle' style={{backgroundImage: `url(${image})`}}></div>
        </div>
    </div>
    <div className='up'></div>
    <div className='text-container'>{text}</div>
  </div>
)

export default AboutSection;