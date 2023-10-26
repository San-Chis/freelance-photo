import React from 'react'
import Title from '../element/Title'
import Footer from '../components/Footer'
import SliderGallery from '../components/SliderGallery'
import Tel from '../element/Tel'

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
        <div className="photo-wedding__tel">
          <Tel title={'Домовитися о зйомці'} />
        </div>
        <div className="photo-wedding__footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PhotoWedding
