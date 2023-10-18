import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../element/Logo'

const Header = () => {
  const [isSpoilerOpen, setSpoilerOpen] = useState(false)
  const [menuMobile, setMenuMobile] = useState(false)
  const [logoMobile, setLogoMobile] = useState(false)
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const location = useLocation()

  const closeMobileMenu = () => {
    setMenuMobile(false)
    setLogoMobile(false)
  }

  useEffect(() => {
    closeMobileMenu()
  }, [location])

  useEffect(() => {
    window.addEventListener('resize', handleResize, false)
  }, [])

  useEffect(() => {
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow =
        menuMobile && dimensions.width < 750 ? 'hidden' : 'unset'
    }
  }, [menuMobile, dimensions.width])

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  const toggleMobileMenu = () => {
    setMenuMobile(!menuMobile)
    setLogoMobile(!logoMobile)
  }

  const toggleSpoiler = () => {
    setSpoilerOpen(!isSpoilerOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className={`header__body ${menuMobile ? 'active' : ''}`}>
          <div className={`header__logo ${logoMobile ? 'active' : ''}`}>
            <Logo />
          </div>
          <div className="header__navigation navigation-header">
            <ul
              className={`navigation-header__list ${
                menuMobile ? 'active' : ''
              }`}
            >
              <li className="navigation-header__link">
                <Link to="/">Головна</Link>
              </li>
              <li className="navigation-header__link" onClick={toggleSpoiler}>
                Мої роботи
                {isSpoilerOpen ? (
                  <ul className="navigation-header-sub__list">
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
          <div
            className={`menu-btn ${menuMobile ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
