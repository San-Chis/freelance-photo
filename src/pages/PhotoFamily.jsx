import React from 'react'
import Title from '../element/Title'
import Footer from '../components/Footer'
import SliderGallery from '../components/SliderGallery'

const PhotoFamily = () => {
  return (
    <div className="photo-family">
      <div className="container">
        <div className="photo-family__title">
          <Title title={'Фото сімейні'} />
        </div>
        <div className="photo-family__body">
          <SliderGallery />
        </div>
        <div className="photo-family__footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PhotoFamily
