import React, { useState, useEffect } from 'react'
import * as firebase from 'firebase/app'
import { getStorage, listAll, ref, getDownloadURL } from 'firebase/storage'

import { Carousel } from 'react-carousel-minimal'
import Title from '../element/Title'

function SliderGallery({ folderRef }) {
  const [images, setImages] = useState([])

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyAj7FBehwdtA5mVdLq-3bNericug9F3Hqg',
      authDomain: 'freelance-photo-742ad.firebaseapp.com',
      databaseURL: 'https://freelance-photo-742ad-default-rtdb.firebaseio.com',
      projectId: 'freelance-photo-742ad',
      storageBucket: 'freelance-photo-742ad.appspot.com',
      messagingSenderId: '263933201297',
      appId: '1:263933201297:web:4fb8e5c4cfe42439332830',
    }

    const firebaseApp = firebase.initializeApp(firebaseConfig)
    const storage = getStorage(firebaseApp)

    const listRef = ref(storage, folderRef)
    listAll(listRef)
      .then(async (res) => {
        const { items } = res
        const urls = await Promise.all(
          items.map((item) => getDownloadURL(item))
        )
        setImages(urls)
      })
      .catch((error) => {
        console.error('Firebase Storage Error:', error.code, error.message)
        if (error.serverResponse) {
          console.log('Server Response:', error.serverResponse)
        }
      })
  }, [folderRef])

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }

  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <div className="slider-gallery">
      <div className="container">
        <div style={{ textAlign: 'start' }}>
          <Title />
          <div style={{}}>
            <div className="slider-gallery__carousel">
              {images.length && (
                <Carousel
                  data={images.map((image) => ({ image }))}
                  time={2200}
                  automatic={true}
                  width="1200px"
                  height="580px"
                  captionStyle={captionStyle}
                  radius="20px"
                  slideNumber={true}
                  slideNumberStyle={slideNumberStyle}
                  captionPosition="bottom"
                  dots={true}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="darkgrey"
                  overflow="hidden"
                  thumbnails={true}
                  thumbnailWidth="100px"
                  style={{
                    textAlign: 'center',
                    margin: '10px ',
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderGallery
