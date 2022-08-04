import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Card = ({ order, primary, textColor, buttonText, buttonBg, textWhite,buttonHov }) => {
  return (
    <div className={`${ primary ? 'bg-white' : 'bg-zinc-900' } lg:w-full md:w-3/4 w-full ${order} ${textColor} shadow-2xl rounded-large flex flex-col p-6 mb-6`}>
        <h3 className="text-4xl font-medium mb-6">$25</h3>
        <p className="text-sm font-medium mb-2">Paket pecel lele</p>
        <p className="text-xs mb-2 w-10/12 mb-7">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        <Link to="hero" spy={true} smooth={true} duration={700} className={`${buttonBg} hover:${buttonHov} cursor-pointer border border-transparent text-center duration-300 ${buttonText} hover:${textWhite} text-sm font-medium py-3 rounded-full mb-6 drop-shadow-xl`}>Buy now</Link>          
        <div className="flex justify-start items-center mb-2">
          <AiOutlineCheckCircle className="mr-2 text-lg" />
          <p className="text-xs">Lorem ipsum 12 dolor sit amet.</p>
        </div>
        <div className="flex justify-start items-center mb-2">
          <AiOutlineCheckCircle className="mr-2 text-lg" />
          <p className="text-xs">Lorem ipsum dolor sit amet consectetur lur.</p>
        </div>
        <div className="flex justify-start items-center mb-2">
          <AiOutlineCheckCircle className="mr-2 text-lg" />
          <p className="text-xs">Lorem ipsum dolor pramas amet.</p>
        </div>
        <div className="flex justify-start items-center mb-2">
          <AiOutlineCheckCircle className="mr-2 text-lg" />
          <p className="text-xs">Lorem ipsum dolor sit amet lorem 29.</p>
        </div>
        <div className="flex justify-start items-center mb-2">
          <AiOutlineCheckCircle className="mr-2 text-lg" />
          <p className="text-xs">Lorem ipsum dolor sit amet lorem 29.</p>
        </div>
        <div className="flex justify-start items-center mb-2">
          <AiOutlineCheckCircle className="mr-2 text-lg" />
          <p className="text-xs">Lorem ipsum dolor sit amet consectetur lur.</p>
        </div>
        <div className="flex justify-start items-center mb-2">
          <AiOutlineCheckCircle className="mr-2 text-lg" />
          <p className="text-xs">Lorem ipsum 12 dolor sit amet.</p>
        </div>
    </div>
  )
}

export default Card