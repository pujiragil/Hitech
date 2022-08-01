import { Link } from "react-router-dom"

const Sidebar = ({ active, toggle }) => {
  return (
    <div onClick={toggle} className={`${active ? 'top-0' : '-top-[1300px]'} rounded-md z-40 cursor-pointer duration-700 absolute left-0  h-screen bg-white w-full md:hidden`}>
      <ul className="w-full h-full flex flex-col justify-center items-center">
        <li onClick={toggle} className="text-zinc-900 flex justify-center items-center w-full w-full"><Link className="flex py-7 rounded text-base hover:bg-zinc-100 hover:text-zinc-700 ease-in-out duration-300 justify-center items-center w-11/12 text-center" to="/">Home</Link></li>
        <li onClick={toggle} className="text-zinc-900 flex justify-center items-center w-full w-full"><Link className="flex py-7 rounded text-base hover:bg-zinc-100 hover:text-zinc-700 ease-in-out duration-300 justify-center items-center w-11/12 text-center" to="about">About</Link></li>
        <li onClick={toggle} className="text-zinc-900 flex justify-center items-center w-full w-full"><Link className="flex py-7 rounded text-base hover:bg-zinc-100 hover:text-zinc-700 ease-in-out duration-300 justify-center items-center w-11/12 text-center" to="contact">Contact</Link></li>
        <li onClick={toggle} className="text-zinc-900 flex justify-center items-center w-full w-full"><Link className="flex py-7 rounded text-base hover:bg-zinc-100 hover:text-zinc-700 ease-in-out duration-300 justify-center items-center w-11/12 text-center" to="profile">Profile</Link></li>
        <li onClick={toggle} className="text-zinc-900 flex justify-center items-center w-full"><Link className="flex py-6 mt-4 rounded-md text-base border-2 border-transparent hover:border-zinc-900 duration-300 justify-center items-center w-11/12 text-center" to="login">Login</Link></li>
        <li onClick={toggle} className="text-white flex justify-center items-center w-full"><Link className="flex py-6 mt-4 rounded-md text-base border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-800 duration-300 bg-zinc-900 justify-center items-center w-11/12 text-center" to="register">Register</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar