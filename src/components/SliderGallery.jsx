import React, { useState } from 'react'
import { Carousel } from 'react-carousel-minimal'
import Title from '../element/Title'

import dasha from '../img/portrets/dasha.jpg'

function SliderGallery() {
  const [zoomed, setZoomed] = useState(false) // Стан для відстеження зумування
  const [activeSlideIndex, setActiveSlideIndex] = useState(0) // Стан для відстеження активного слайда

  const data = [
    {
      image: dasha,
    },
    {
      image: dasha,
    },
    {
      image: dasha,
    },
    {
      image: dasha,
    },
    {
      image: dasha,
    },
    {
      image: dasha,
    },
    {
      image: dasha,
    },
    {
      image: dasha,
    },
    {
      image: dasha,
    },
    {
      image: dasha,
    },
  ]

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }

  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  function handleZoomClick() {
    setZoomed(!zoomed) // Змінюємо стан зумування
  }

  function handleSlideChange(index) {
    setActiveSlideIndex(index) // Оновлюємо індекс активного слайда
  }

  return (
    <div className="slider-gallery">
      <div className="container">
        <div style={{ textAlign: 'start' }}>
          <Title />
          <div style={{}}>
            <div className="slider-gallery__carousel">
              <Carousel
                data={data}
                time={2200}
                width="800px"
                height="450px"
                captionStyle={captionStyle}
                radius="20px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                //  automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                overflow="hidden"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: 'center',
                  margin: '50px auto',
                }}
                onClick={handleZoomClick} // Додана обробка кліку
                onSlideChange={handleSlideChange} // Додана обробка зміни слайда
              />
              {zoomed && (
                <div className="zoomed-image-container">
                  <img
                    src={data[activeSlideIndex].image}
                    alt="Zoomed"
                    className="zoomed-image"
                  />
                  <button onClick={handleZoomClick}>Закрити зум</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderGallery
