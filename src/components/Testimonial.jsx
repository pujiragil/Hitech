import React from 'react'
import Testi from './fragments/testi'

const Testimonial = () => {
  return (
    <div className="container mx-auto px-6 font-open">
      <div className="flex flex-col">
        <h1 className="text-center text-3xl text-zinc-900 font-medium py-10">Our Testimonials</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Testi />
          <Testi />
          <Testi />
        </div>
      </div>
    </div>
  )
}

export default Testimonial