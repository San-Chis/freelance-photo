import React from 'react'
import instagram from '../img/footer/instagram.svg'
import facebook from '../img/footer/facebook.svg'
import twiter from '../img/footer/twiter.svg'
import frame from '../img/footer/frame.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__image">
          <img src={frame} alt="" />
        </div>
        <div className="footer__title">
          <h2>
            Ми в соцмережах чекаємо на вас <span>📸</span>
          </h2>
        </div>
        <div className="footer__network network-footer">
          <a
            className="network-footer__link"
            target="_blank"
            href={'https://www.instagram.com/'}
          >
            <img src={instagram} alt="інстаграм" />
          </a>

          <a
            className="network-footer__link"
            target="_blank"
            href={'https://uk-ua.facebook.com/'}
          >
            <img src={facebook} alt="файсбук" />
          </a>

          <a
            className="network-footer__link"
            target="_blank"
            href={'https://twitter.com/?lang=uk'}
          >
            <img src={twiter} alt="твітер" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
