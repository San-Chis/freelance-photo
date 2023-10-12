import React from 'react'
import Creative from '../components/Creative'
import MyWorks from '../components/MyWorks'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Creative />
      <Services />
      <MyWorks />
		<Footer/>
    </div>
  )
}

export default Home
