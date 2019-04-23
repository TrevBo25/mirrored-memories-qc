import React from 'react';
import Gallery from "react-photo-gallery";

const GalleryComponent = () => (
  <div className="gallery-comp">
    <h1 className="gallery-title">Gallery.</h1>
    <div className="gallery-holder">
      <Gallery photos={images} direction={"column"} />
    </div>
  </div>
)

const images = [
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+1.jpg",
    width: 3,
    height: 3,
  },
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+2.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+3.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+4.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+5.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+6.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+7.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+8.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+9.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+10.jpg",
    width: 2,
    height: 4,
  },
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+11.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+12.JPG",
    width: 5,
    height: 3,
  },
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+13.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://s3.us-east-2.amazonaws.com/mirroredmemories/Gallery+14.jpg",
    width: 4,
    height: 3,
  }
];

export default GalleryComponent;