import React from 'react'
import Title from '../element/Title'
import Footer from '../components/Footer'
import SliderGallery from '../components/SliderGallery'
import Tel from '../element/Tel'

const PhotoPortrait = () => {
  const folderRef = 'portrait'
  return (
    <div className="photo-portrait">
      <div className="container">
        <div className="photo-portrait__title">
          <Title title={'Фото портрети'} />
        </div>
        <div className="photo-portrait__body">
          <SliderGallery folderRef={folderRef} />
        </div>
        <div className="photo-portrait__tel">
          <Tel title={'Домовитися о зйомці'} />
        </div>
        <div className="photo-portrait__footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PhotoPortrait
