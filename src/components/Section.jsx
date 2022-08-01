const Section = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6">
        <div className="font-open h-screen lg:h-desk flex lg:flex-row flex-col justify-evenly items-center">
          <div className="shrink flex flex-col">
            <p className="sm:text-lg text-xs border-b-2 font-bold border-zinc-900 text-zinc-900 w-fit uppercase medium:mb-4 mb-3">Acess Forever</p>
            <h2 className="sm:text-5xl text-zinc-900 text-3xl font-bold mb-4">Get everything for free</h2>
            <p className="sm:text-xl text-zinc-900 sm:font-medium sm:w-3/4 text-base w-11/12 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae aliquam exercitationem animi tempore natus iusto delectus</p>
            <button className="bg-zinc-900 text-base hover:bg-zinc-700 duration-300 font-bold w-fit text-white medium:px-10 px-9 medium:py-4 py-3 rounded-full drop-shadow-xl">See More</button>
          </div>
          <div className="flex relative sm:justify-end justify-center items-center">
              <img className="relative grayscale cursor-pointer hover:grayscale-0 duration-300 lg:w-full sm:w-3/4 w-full sm:shadow-tab shadow-phone" src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section