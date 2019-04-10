import React from 'react'

const AboutSection = ({flip, image, text}) => (
  <div className={flip ? 'section-flip' : 'section-flop'}>
    <div className='image-container-outer'>
        <div className='image-container-inner'>
            <div className='image-holder'>
                <img className='image' src='' alt='' />
            </div>
        </div>
    </div>
    <div className='text-container'>{text}</div>
  </div>
)

export default AboutSection;