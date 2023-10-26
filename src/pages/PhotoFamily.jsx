import React from 'react'
import Title from '../element/Title'
import Footer from '../components/Footer'
import SliderGallery from '../components/SliderGallery'
import Tel from '../element/Tel'

const PhotoFamily = () => {
  const folderRef = 'family'
  return (
    <div className="photo-family">
      <div className="container">
        <div className="photo-family__title">
          <Title title={'Фото сімейні'} />
        </div>
        <div className="photo-family__body">
          <SliderGallery folderRef={folderRef} />
        </div>
        <div className="photo-family__tel">
          <Tel title={'Домовитися о зйомці'} />
        </div>
        <div className="photo-family__footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PhotoFamily
