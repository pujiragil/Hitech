import React from 'react'

const Contact = ({ icon, text }) => {
  return (
    <div className="flex justify-start items-center text-zinc-500 w-full mb-2">
      {icon}
      <p className="ml-4">{text}</p>
    </div>
  )
}

export default Contact