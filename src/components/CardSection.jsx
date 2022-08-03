import React from 'react'
import Card from './fragments/card'
import { obj1, obj2, obj3 } from './fragments/cardObj'

const CardSection = () => {
  return (
    <div id="service" className='bg-zinc-900'>
      <div className="container h-fit lg:h-desk md:flex md:justify-center md:items-center md:flex-col mx-auto px-6">
        <h1 className="text-white text-3xl font-medium text-center py-10 font-roboto">Our Services</h1>
        <div className="flex justify-center md:w-full items-center lg:flex-row md:gap-x-3 lg:w-10/12 flex-col pb-8">
          <Card {...obj1}/>
          <Card {...obj2}/>
          <Card {...obj3}/>
        </div>
      </div>
    </div>
  )
}

export default CardSection