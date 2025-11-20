import React from 'react'
import { Hero } from '../compponents/Hero'
import { FeaturedSection } from '../compponents/FeaturedSection'
import { Banner } from '../compponents/Banner'
import { Testimonial } from '../compponents/Testimonial'

export const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedSection></FeaturedSection>
      <Banner></Banner>
      <Testimonial></Testimonial>
    </>
  )
}
