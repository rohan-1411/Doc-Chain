import React from 'react'
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import FeatureService from '../FeatureService/FeatureService';
import Footer from '../Footer/Footer';
import Contacts from '../Contacts/Contacts';




const Home = () => {
  return (
      <>
      <Header />
      <Hero />
      <main id="main">
        <FeatureService />
        <About />
        <Contacts/>
        <Footer />
      </main>
      </>
  )
}

export default Home