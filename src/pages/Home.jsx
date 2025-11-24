import React from 'react'
import { Hero } from '../compponents/Hero'
import { FeaturedSection } from '../compponents/FeaturedSection'
import { Banner } from '../compponents/Banner'
import { Testimonial } from '../compponents/Testimonial'
import Newsletter from '../compponents/Newsletter'
import { Footer } from '../compponents/Footer'

export const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedSection></FeaturedSection>
      <Banner></Banner>
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
      
    </>
  )
}
