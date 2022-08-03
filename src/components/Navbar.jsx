import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"

const Navbar = () => {
  const [active, setActive] = useState(false)
  
  const toggle = () => {
    setActive(!active)
  }

  useEffect(() => {
    function toggleScroll() {
      if(scrollY >= 80) {
        setActive(false)
      }
    }
    window.addEventListener('scroll', toggleScroll)
  }, [])

  return ( 
    <div className="container mx-auto relative font-roboto bg-white">
      <Sidebar active={active} toggle={toggle}/>
      <nav className="flex z-50 relative items-center justify-between h-20 bg-white px-6">
        <Link to="/" onClick={active ? toggle : undefined} className="navlogo cursor-pointer md:text-3xl text-2xl font-bold text-zinc-900 font-roboto">Hitech</Link>
        <div onClick={toggle} className="toggle-bar cursor-pointer md:hidden">
          <span className={`w-6 h-1 duration-300 my-1 ${active ? 'translate-y-2 origin-center rotate-45' : ''} rounded bg-zinc-900 block md:hidden`}></span>
          <span className={`w-6 h-1 duration-300 my-1 ${active ? 'opacity-0' : 'opacity-100'} rounded bg-zinc-900 block md:hidden`}></span>
          <span className={`w-6 h-1 duration-300 my-1 ${active ? '-translate-y-2 origin-center -rotate-45' : ''} rounded bg-zinc-900 block md:hidden`}></span>
        </div>
        <ul className="list-none md:block md:flex md:items-center md:justify-center hidden">
          <li><Link className="px-4 pb-1 hover:border-b hover:border-zinc-900 hover:shadow-md duration-300" to="/">Home</Link></li>
          <li><Link className="px-4 pb-1 hover:border-b hover:border-zinc-900 hover:shadow-md duration-300" to="about">About</Link></li>
          <li><Link className="px-4 pb-1 hover:border-b hover:border-zinc-900 hover:shadow-md duration-300" to="contact">Contact</Link></li>
          <li><Link className="px-4 pb-1 hover:border-b hover:border-zinc-900 hover:shadow-md duration-300" to="profile">Profile</Link></li>
        </ul>
        <ul className="hidden md:block md:flex md:justify-center md:items-center">
          <li><Link className="px-6 py-3 mr-4 border border-transparent hover:border-zinc-900 hover:rounded-full duration-300" to="login">Login</Link></li>
          <li><Link className="px-6 py-3 bg-zinc-900 rounded-full text-white border border-transparent hover:bg-zinc-700 duration-300" to="register">Register</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar