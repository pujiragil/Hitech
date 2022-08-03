import React from 'react'
import Testi from './fragments/testi'
import { obj1, obj2, obj3, obj4, obj5, obj6 } from './fragments/testiObj'

const Testimonial = () => {
  return (
    <div id="testimonials" className="container mx-auto px-6 font-open">
      <div className="flex flex-col">
        <h1 className="text-center text-3xl text-zinc-900 font-medium py-10 font-roboto">Our Testimonials</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-y-6 mb-8">
            <Testi {...obj1} />
            <Testi {...obj2} />
          </div>
          <div className="flex flex-col items-center gap-y-6 mb-8">
            <Testi {...obj3} />
            <Testi {...obj4} />
          </div>
          <div className="flex flex-col items-center gap-y-6 mb-8">
            <Testi {...obj5} />
            <Testi {...obj6} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial