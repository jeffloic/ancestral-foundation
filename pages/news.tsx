import React from 'react'
import { Footer, Info, Navbar, NewsHero } from '../components'

const news = () => {
  return (
    <div>
      <Navbar />
      <NewsHero />
      <Info />
      <Footer />
    </div>
  )
}

export default news