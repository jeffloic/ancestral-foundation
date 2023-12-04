import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { About, Banner, Contact, Features, Footer, Hero, Info, Moore, More, Navbar, Stats, Work } from '../components'


const Home = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Ancestral Foundation</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <Navbar />
      <More />
      {/* <Hero /> */}
      <About />
      {/* <Moore /> */}
      {/* <Banner /> */}
      <Features />
      <Work />
      {/* <Stats /> */}
      <Info />
      <Contact />
      <Footer />

    </div>
  )
  }

export default Home
