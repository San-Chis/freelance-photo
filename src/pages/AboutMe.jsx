import React from 'react'
import myphoto from '../img/about-me/myphoto.jpg'
import Title from '../element/Title'
import Footer from '../components/Footer'
import Tel from '../element/Tel'

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="container">
        <div className="about-me__title">
          <Title title={'Про мене'} />
        </div>
        <div className="about-me__body body-about-me">
          <div className="body-about-me__image">
            <img src={myphoto} alt="" />
          </div>
          <div className="body-about-me__text">
            <p>
              Я фотограф Ксенія вітаю вас на своєму сайті! Рада провести для вас
              тематичну фотосесію в Києві.
            </p>
            <p>
              Я роблю все, щоб після моєї роботи залишалися лише задоволені
              клієнти.
            </p>
            <p>
              Якщо ви хочете мене запросити як фотографа, то зателефонуйте або
              напишіть мені у соц сіті для уточнення зайнятості на вашу дату. Я
              буду рада відповісти на всі питання, що вас цікавлять.
            </p>
          </div>
        </div>
        <div className="about-me__tel">
          <Tel title={"Зв'язатся зі мною"} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default AboutMe
