import React from 'react'
import Image from 'next/image'

const VolunteerHero = () => {
  return (
    <div>
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
                    <a className="mt-10 inline-block px-12 py-4 text-black bg-yellow-500 font-bold hover:bg-yellow-600 rounded-full" href="#">Start volunteer</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 flex flex-col items-center justify-center">
                <div className="relative">
                    <img
                      src='https://i.imgur.com/eeVf0j4.jpg'
                      alt=''
                      className="h-auto w-full max-w-lg object-cover "
                    />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default VolunteerHero