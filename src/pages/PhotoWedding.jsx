import React from 'react'
import Title from '../element/Title'
import Footer from '../components/Footer'
import SliderGallery from '../components/SliderGallery'

const PhotoWedding = () => {
  const folderRef = 'wedding'
  return (
    <div className="photo-wedding">
      <div className="container">
        <div className="photo-wedding__title">
          <Title title={'Фото весілля'} />
        </div>
        <div className="photo-wedding__body">
          <SliderGallery folderRef={folderRef} />
        </div>
        <div className="photo-wedding__footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PhotoWedding
