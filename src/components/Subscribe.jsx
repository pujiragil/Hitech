import React from 'react'

const Subscribe = () => {
  return (
    <div className="bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-white font-open h-80 py-6 flex lg:flex-row flex-col justify-center items-center">
          <div className="flex w-full sm:items-start sm:justify-start justify-center items-center flex-col">
            <h1 className="text-3xl sm:w-4/6 lg:w-8/12 font-roboto mb-4">Subscribe For More Information</h1>
            <p className="text-base sm:w-4/6 lg:w-8/12 mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit.</p>
          </div>
          <div className="flex justify-between sm:justify-end w-full">
            <div className="sm:w-10/12 lg:w-full flex w-full justify-between border-2 border-white rounded-full">
              <input className="bg-transparent text-white w-full text-base truncate pl-8 rounded-full focus:outline-none focus:border-none" type="text" placeholder="isert your email..." />
              <button className="bg-white text-zinc-900 m-1 p-4 rounded-full hover:bg-zinc-400 duration-300">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe