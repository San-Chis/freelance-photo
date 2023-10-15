import React from 'react'

const MyWorksCard = ({ image, title }) => {
  return (
    <div className="myworks-card">
      <div className="myworks-card__block block-card-myworks">
        <div className="block-card-myworks__image">
          <img src={image} alt="" />
        </div>
        <div className="block-card-myworks__title">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  )
}

export default MyWorksCard
