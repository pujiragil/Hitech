import AboutSvg from '../assets/about.svg'
import { AiOutlineWhatsApp, AiOutlineFacebook, AiOutlineGithub, AiOutlineYoutube } from 'react-icons/ai'

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid gap-4 justify-items-center content-center lg:grid-cols-2 grid-cols-1 lg:min-h-0 lg:h-desk min-h-md">
        <img className="hover:rotate-180 duration-700 ease-in-out cursor-pointer" src={AboutSvg} alt="about" />
        <div className="flex justify-center md:w-9/12 flex-col text-zinc-900 items-center font-open p-6 bg-white drop-shadow-2xl mb-4 rounded-large">
          <h1 className="text-2xl mb-4">About Us</h1>
          <p className="text-base md:text-lg leading-relaxed mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis voluptatum quaerat error. Lorem ipsum dolor sit amet consectetur. Lorem, ipsum.</p>
          <div className="flex justify-evenly w-full text-3xl">
            <AiOutlineWhatsApp className="cursor-pointer"/>
            <AiOutlineFacebook className="cursor-pointer"/>
            <AiOutlineGithub className="cursor-pointer"/>
            <AiOutlineYoutube className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage