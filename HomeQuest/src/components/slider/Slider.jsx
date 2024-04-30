import React, { useState } from 'react'
import './style.scss'

const Slider = ({ images }) => {

  const [imageIndex, setImageIndex] = useState(null)

  const changeSlide = (direction) => {
    // if (direction === 'left') {
    //   if (imageIndex === 0) {
    //     setImageIndex(images.length - 1);
    //   } else {
    //     setImageIndex(imageIndex - 1);
    //   }
    // } else {
    //   if (imageIndex === images.length - 1) {
    //     setImageIndex(0)
    //   } else {
    //     setImageIndex(imageIndex + 1)
    //   }
    // }
    setImageIndex(direction === 'left' 
    ? (imageIndex === 0 ? images.length - 1 : imageIndex - 1) 
    : (imageIndex === images.length - 1 ? 0 : imageIndex + 1));
  }

  return (
    <div className='slider'>
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide('left')}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide('right')}>
            <img src="/arrow.png" className='right' alt="" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>X</div>
        </div>
      )}
      <div className="bigImg" onClick={() => setImageIndex(0)}>
        <img src={images[0]} />
      </div>
      <div className="smallImg">
        {/* get rid of the 1st item from the image array, we use slice and then map through the rest of the items */}
        {images.slice(1).map((img, index) => (
          <img src={img} alt='' key={index} onClick={() => setImageIndex(index+1)}/>
        ))}
      </div>
    </div>
  )
}

export default Slider
