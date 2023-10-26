import React from 'react'

const Tel = ({ title }) => {
  return (
    <>
      <a className="telefon" href="tel:+38067777777777 ">
        <span>{title}</span>
      </a>
    </>
  )
}

export default Tel
