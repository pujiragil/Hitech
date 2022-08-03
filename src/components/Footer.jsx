import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="bg-zinc-800">
      <div className="container mx-auto px-6">
        <div className="flex sm:flex-row flex-col text-white justify-between items-center py-8">
          <h1 className="text-2xl font-roboto font-black mb-4">Hitech</h1>
          <p className="text-sm mb-3">Copyright © 2022 Puji Ragil</p>
          <ul className="flex justify-center items-center">
            <li className="px-2 text-xl"><a href="https://github.com/pujiragil" target="_blank"><AiFillGithub className="cursor-pointer hover:text-zinc-900 duration-300" /></a></li>
            <li className="px-2 text-xl"><a href="https://instagram.com/ragilsg_164" target="_blank"><AiFillInstagram className="cursor-pointer hover:text-zinc-900 duration-300" /></a></li>
            <li className="px-2 text-xl"><a href="https://facebook.com/" target="_blank"><AiFillFacebook className="cursor-pointer hover:text-zinc-900 duration-300" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer