import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="relative pt-10 text-center bg-black bg-cover overflow-hidden">
    <img className="md:hidden w-full h-96 " src="https://i.imgur.com/vuBYUsZ.jpg" alt=""  />
  <img className="hidden md:block bg-opacity-50 md:object-cover w-full h-96" src="https://i.imgur.com/vuBYUsZ.jpg" alt=""/>

   
  {/* <div className="absolute top-0 bottom-0 -left-1/4 -right-1/4 flex items-center justify-center"></div> */}
  <div className="absolute w-full md:max-w-6xl py-10 px-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <span className="text-md md:text-lg text-white font-semibold uppercase">WE DELIVER GLOBAL SUPPLY CHAIN SOLUTIONS.</span>
      <h2 className="mt-8 mb-8 text-white text-3xl lg:text-5xl font-bold ">It's not a package. It's a promise.</h2>
      {/* <a className="inline-block w-3/4 md:w-auto px-10 py-4 text-sm font-bold uppercase text-white border-2 md:border-white md:border-transparent md:hover:border-transparent bg-blue-600 hover:bg-blue-700 transition cursor-pointer duration-500" href="#">{buttonText}</a> */}
      <a className="inline-block cursor-pointer w-full md:w-auto px-10 py-4 text-sm font-bold uppercase text-white border-2 border-white hover:border-transparent hover:bg-lemon transition duration-200" href="/label">Find A Doctor</a>
  </div>

</div>    

  )
}

export default Hero


{/* <div>
        <div className="mt-20 md:mt-5 bg-black pt-12 lg:pt-10 pb-20 lg:pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 z-10 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-3xl mx-auto lg:mx-0">
                    <h2 className="mb-5 text-3xl lg:text-5xl text-white font-bold">
                      Ending Poverty Is
                    </h2>
                    <h2 className="mb-5 text-5xl lg:text-8xl text-yellow-500 font-bold">
                      A Mindset.
                    </h2>
                    <h2 className="mb-5 text-5xl lg:text-5xl text-white font-bold">
                      Not A Challenge.
                    </h2>
                    <h3 className="mb-3 text-3xl lg:text-4xl font-bold text-yellow-500">Racial Inequality &amp; Poverty</h3>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-gray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                    <div>
                    <a className="mt-10 inline-block px-12 py-4 text-black bg-yellow-500 font-bold hover:bg-yellow-600 rounded-full" href="#">Start donating</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 flex flex-col items-center justify-center">
                <div className="relative">
                    <Image
                      src='https://i.imgur.com/vuBYUsZ.jpg'
                      alt=''
                      className="h-96 w-full max-w-lg object-cover "
                      height={500}
                      width={700}
                    />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}