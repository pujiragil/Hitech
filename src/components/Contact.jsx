import React from 'react'
import contactSvg from '../assets/contact.svg'

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col font-open text-zinc-900 py-6">
          <div className="bg-white drop-shadow-2xl mb-10 px-6 py-4 rounded-large">
            <h1 className="font-roboto text-lg font-bold">Have Some Question?</h1>
            <p className="text-sm">Thank you for your interest in our services. Please fill out the form below or e-mail us at <a className="text-zinc-500" href="https://google.com" target="_blank">email@gmail.com</a> and we will get back to you promptly regarding your request.</p>
          </div>
          <div className="flex mx-6">
            <img className="hidden" src={contactSvg} alt="svg" />
            <div className="flex flex-col bg-zinc-900 p-6 w-full rounded-large text-white drop-shadow-2xl">
              <div className="field flex flex-col">
                <label className="text-sm mb-2" htmlFor="firstname">First Name *</label>
                <input className="text-sm px-4 py-3 rounded-lg text-zinc-900 focus:outline-none focus:border-none mb-2" type="text" name="firstname" placeholder="e.g John" />
              </div>
              <div className="field flex flex-col">
                <label className="text-sm mb-2" htmlFor="lastname">Last Name *</label>
                <input className="text-sm px-4 py-3 rounded-lg text-zinc-900 focus:outline-none focus:border-none mb-2" type="text" name="lastname" placeholder="e.g Doe" />
              </div>
              <div className="field flex flex-col">
                <label className="text-sm mb-2" htmlFor="email">Email *</label>
                <input className="text-sm px-4 py-3 rounded-lg text-zinc-900 focus:outline-none focus:border-none mb-2" type="email" name="email" placeholder="Email..." />
              </div>
              <div className="field flex flex-col">
                <label className="text-sm mb-2" htmlFor="message">Message</label>
                <input className="text-sm px-4 py-3 rounded-lg text-zinc-900 focus:outline-none focus:border-none mb-2" type="text" name="message" placeholder="Message..." />
              </div>
              <input className="mt-4 mb-4 text-sm font-roboto font-bold bg-transparent border-2 border-white rounded-lg px-4 py-3 cursor-pointer hover:bg-white hover:text-zinc-900 duration-300" type="submit" value="SEND MESSAGE" />
              <p className="text-xs text-center text-zinc-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact