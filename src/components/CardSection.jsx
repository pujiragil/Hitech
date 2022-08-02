import React from 'react'
import Card from './fragments/card'
import { obj1, obj2, obj3 } from './fragments/cardObj'

const CardSection = () => {
  return (
    <div className='bg-zinc-900'>
      <div className="container h-fit lg:h-desk md:h-screen md:flex md:justify-center md:items-center md:flex-col mx-auto px-6">
        <h1 className="text-white text-3xl font-medium text-center py-10">Our Services</h1>
        <div className="flex justify-center items-center md:flex-row md:gap-x-3 flex-col pb-6">
          <Card {...obj1}/>
          <Card {...obj2}/>
          <Card {...obj3}/>
        </div>
      </div>
    </div>
  )
}

export default CardSection