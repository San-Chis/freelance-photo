import React from 'react'

const ServicesCard = ({ image, title, text, price }) => {
  return (
    <div className="services-card">
      <div className="services-card__image">
        <img src={image} alt="" />
      </div>
      <div className="services-card__title">
        <h2>{title}</h2>
      </div>
      <div className="services-card__text">
        <p>{text}</p>
      </div>
      <div className="services-card__price">
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ServicesCard
