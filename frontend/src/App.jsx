import React from 'react'
import './App.css'

import Hero from './assets/Components/Hero'
import Service from './assets/Components/Service'
import Menu from './assets/Components/Menu'
import Reservationform from './assets/Components/Reservationform'
import Footer from './assets/Components/footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <Service/>
      <Menu/>
      <Reservationform/>
      <Footer/>
     
    </div>
  )
}

export default App
