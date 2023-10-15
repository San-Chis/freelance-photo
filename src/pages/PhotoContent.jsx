import React from 'react'
import Title from '../element/Title'
import Footer from '../components/Footer'
import SliderGallery from '../components/SliderGallery'

const PhotoContent = () => {
  return (
    <div className="photo-content">
      <div className="container">
        <div className="photo-content__title">
          <Title title={'Фото контент'} />
        </div>
        <div className="photo-content__body">
          <SliderGallery />
        </div>
        <div className="photo-content__footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PhotoContent
