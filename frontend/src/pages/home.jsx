import React from 'react'
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks ';
import FeaturedCars from '../components/FeaturedCars';
import LendYourCar from '../components/LendYourCar';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ ';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
         <Hero />
              <HowItWorks />
              <FeaturedCars />
              <LendYourCar />
              <Testimonials />
              <FAQ />
              <Footer />
      
    </div>
  )
}

export default Home
