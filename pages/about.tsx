import React from 'react'
import { AboutHero, AboutText, Footer, Navbar } from '../components'

const about = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutText />
      <Footer />
    </div>
  )
}

export default about