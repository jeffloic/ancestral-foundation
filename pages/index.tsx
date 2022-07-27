import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Banner from '../components/Banner'
import Stats from '../components/Stats'
import Info from '../components/Info'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Not 2 Busy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Features />
      <Banner />
      <Work />
      <Stats />
      <Info />
      <Contact />
      <Footer />

    </div>
  )
  }

export default Home
