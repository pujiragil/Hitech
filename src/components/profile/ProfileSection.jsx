import React from 'react'
import Contact from './contact'
import { AiOutlineMail, AiOutlinePhone, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai'

const ProfileSection = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex min-h-md w-full relative justify-center items-center">
        <div className="absolute top-0 left-0 bg-zinc-900 h-80 w-full"></div>
        <div className="relative flex h-fit flex-col font-open bg-white shadow-2xl rounded-large justify-between p-4 items-center w-11/12 my-6">
          <img className="w-full h-80 object-cover rounded-large mb-8" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="profile" />
          <div className="flex flex-col justify-start items-start w-full">
            <h1 className="text-zinc-900 text-2xl font-roboto font-bold mb-2">Puji Ragil</h1>
            <p className="text-zinc-500 text-sm mb-2">Pengennya Fullstack</p>
            <p className="text-zinc-900 mb-2">Occaecat consequat excepteur aliquip aliquip ea non. Ipsum minim occaecat nisi aliqua tempor irure commodo enim.</p>
            <Contact icon={<AiOutlineMail />} text="iniemail@gmail.com" />
            <Contact icon={<AiOutlinePhone />} text="+62 856 5579 4465" />
            <Contact icon={<AiOutlineGithub />} text="github.com/pujiragil" />
            <Contact icon={<AiOutlineMail />} text="iniemail@gmail.com" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection