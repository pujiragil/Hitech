import React from 'react'

const Testi = () => {
  return (
    <div className="flex flex-col px-4 py-10 w-full md:w-10/12 shadow-xl rounded-large mb-6 bg-white">
      <p className="text-base text-zinc-900 tracking-wide leading-relaxed mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequatur sed recusandae!</p>
      <div className="border-b mb-6 border-zinc-200"></div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start justify-center">
          <p className="text-sm font-bold text-zinc-900 mb-2">Jokowi Banteng</p>
          <p className="text-xs text-zinc-500">presiden wakanda</p>
        </div>
        <img className="object-cover w-12 h-12 rounded-full mx-2" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="" />
      </div>
    </div>
  )
}

export default Testi