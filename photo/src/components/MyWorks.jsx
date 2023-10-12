import React from 'react'
import { Link } from 'react-router-dom'
import MyWorksCard from './MyWorksCard'
import family from '../img/works/family.png'
import abstraction from '../img/works/abstraction.png'
import work from '../img/works/work.png'
import interior from '../img/works/interior.png'
import Title from '../element/Title'

const MyWorks = () => {
  return (
    <div className="my-works">
      <div className="container">
        <div className="my-works__title">
          <Title title={'Подивитися мої роботи'} />
        </div>
        <div className="my-works__block">
          <Link to="/photo-family">
            <MyWorksCard image={family} title={'Сімейні 👆'} />
          </Link>
          <Link to="/photo-content">
            <MyWorksCard image={abstraction} title={'Контент 👆'} />
          </Link>
          <Link to="/photo-wedding">
            <MyWorksCard image={work} title={'Весілля 👆'} />
          </Link>
          <Link to="/photo-content">
            <MyWorksCard image={interior} title={'Контент 👆'} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MyWorks
