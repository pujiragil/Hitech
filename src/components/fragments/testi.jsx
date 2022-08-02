import React from 'react'

const Testi = ({ comment, name, job , imgLink}) => {
  return (
    <div className="flex flex-col px-4 py-10 w-full h-fit lg:w-full md:w-9/12 shadow-xl rounded-large bg-white">
      <p className="text-base text-zinc-900 tracking-wide leading-relaxed mb-6">{comment}</p>
      <div className="border-b mb-6 border-zinc-200"></div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start justify-center">
          <p className="text-sm font-bold text-zinc-900 mb-2">{name}</p>
          <p className="text-xs text-zinc-500">{job}</p>
        </div>
        <img className="object-cover w-12 h-12 rounded-full mx-2" src={imgLink} alt="profile" />
      </div>
    </div>
  )
}

export default Testi