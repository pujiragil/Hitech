const Hero = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col px-6 font-roboto justify-center items-center font-open h-md lg:h-desk">
          <h1 className="text-5xl sm:text-6xl sm:w-11/12 xl:w-1/2 font-bold leading-tight text-center">Make <span className="rounded drop-shadow-2xl leading-tight bg-zinc-900 px-2 text-white">your</span> dream come <span className="drop-shadow-2xl rounded bg-zinc-900 px-2 leading-tight text-white">true</span></h1>
          <p className="text-center text-xl sm:text-2xl sm:w-10/12 xl:w-7/12 font-medium mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis autem porro debitis ullam.</p>
          <button className="px-10 py-4 sm:px-12 sm:py-4 rounded-full border-2 text-xl border-zinc-900 mt-6 hover:bg-zinc-900 hover:text-white hover:drop-shadow-2xl duration-300">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero