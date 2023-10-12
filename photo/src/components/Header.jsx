import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  // Встановлення початкового стану спойлера на закритий
  const [isSpoilerOpen, setSpoilerOpen] = useState(false)

  // Функція для відкриття або закриття спойлера
  const toggleSpoiler = () => {
    setSpoilerOpen(!isSpoilerOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <div className="header__logo">
            <h2>Photo</h2>
          </div>
          <div className="header__navigation navigation-header">
            <ul className="navigation-header__item">
              <li className="navigation-header__link">
                <Link to="/">Головна</Link>
              </li>
              <li className="navigation-header__link" onClick={toggleSpoiler}>
                Мої роботи
                {isSpoilerOpen ? (
                  <ul className="navigation-header-sub__item">
                    <li className="navigation-header-sub__link">
                      <Link to="/photo-portrait">портрети</Link>
                    </li>
                    <li className="navigation-header-sub__link">
                      <Link to="/photo-family">сімейні</Link>
                    </li>
                    <li className="navigation-header-sub__link">
                      <Link to="/photo-wedding">весілля</Link>
                    </li>
                    <li className="navigation-header-sub__link">
                      <Link to="/photo-content">контент</Link>
                    </li>
                  </ul>
                ) : null}
              </li>
              <li className="navigation-header__link">
                <Link to="/about-me">Про мене</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
