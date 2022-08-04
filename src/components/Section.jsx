import { Link } from "react-scroll"

const Section = ({ imgFirst, subtitle, title, text, textButton, linkTo, imgLink }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6">
        <div className="font-open h-screen lg:h-desk flex lg:flex-row flex-col justify-evenly items-center">
          <div className={`${imgFirst ? 'order-2 text-right items-end' : 'order-1'} shrink flex flex-col`}>
            <p className="sm:text-lg text-xs border-b-2 font-bold border-zinc-900 text-zinc-900 w-fit uppercase medium:mb-4 mb-3">{subtitle}</p>
            <h2 className="sm:text-5xl text-zinc-900 text-3xl font-bold mb-4">{title}</h2>
            <p className="sm:text-xl text-zinc-900 sm:font-medium sm:w-3/4 text-base w-11/12 mb-5">{text}</p>
            <Link to={linkTo} spy={true} smooth={true} duration={700} className="bg-zinc-900 cursor-pointer text-base hover:bg-zinc-700 duration-300 font-bold w-fit text-white medium:px-10 px-9 medium:py-4 py-3 rounded-full drop-shadow-xl">{textButton}</Link>
          </div>
          <div className={`${imgFirst ? 'order-1 sm:justify-start' : 'order-2 sm:justify-end'} flex relative justify-center items-center`}>
              <img className="relative grayscale cursor-pointer hover:grayscale-0 hover:shadow-none duration-300 lg:w-full sm:w-3/4 w-full sm:shadow-tab shadow-phone" src={imgLink} alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section