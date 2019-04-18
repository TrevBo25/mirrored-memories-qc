import React from 'react'

import AboutSection from './AboutSection'

const About = () => (
  <div className="about-comp">
    <h1 className="about-title">about.</h1>
    <div className="about-subtitle">The first of its kind in the Quad Cities. The Mirrored Memories Photo Booth is a full-length touch screen interactive mirror experience featuring custom animations & state of the art technologies. With fun props & unlimited custom photo prints for your guests to take home. This photo booth will take any event to the next level.</div>
    <AboutSection flip={true} image={images.one} text={text.one} />
    <AboutSection flip={false} image={images.two} text={text.two} />
    <AboutSection flip={true} image={images.three} text={text.three} />
    <AboutSection flip={false} image={images.four} text={text.four} />
  </div>
),

text = {
  one: 'Walk the red carpet and step up to the Mirrored Memories full length mirror. Press the touch screen to begin the photo taking experience.',
  two: 'Strike a Pose! The mirror will display custom animations and a countdown before it takes your photo.',
  three: 'Personalize your photo with the touch of your finger. Sign your name, write a message or add an emoji to your picture.',
  four: 'Select how many prints you would like and collect them from the printer in no time at all! Want us to text or email you the photo as well, no problem!'
},

images = {
  one: 'https://s3.us-east-2.amazonaws.com/mirroredmemories/Diamond+Photo+1.jpg',
  two: 'https://s3.us-east-2.amazonaws.com/mirroredmemories/Diamond+Photo+2.jpg', 
  three: 'https://s3.us-east-2.amazonaws.com/mirroredmemories/Diamond+Photo+3.jpg',
  four: 'https://s3.us-east-2.amazonaws.com/mirroredmemories/Diamond+Photo+4.jpg'
}

export default About;