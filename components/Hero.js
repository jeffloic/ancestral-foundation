import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div>
        <div className="bg-black pt-12 lg:pt-10 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-lg mx-auto lg:mx-0">
                    <h2 className="mb-3 text-5xl lg:text-7xl text-white font-bold">
                      WE'RE NOT
                    </h2>
                    <h2 className="mb-3 text-5xl lg:text-7xl text-white font-bold">
                      TOO BUSY
                    </h2>
                    <h2 className="mb-3 text-5xl lg:text-7xl text-white font-bold">
                      TO END
                    </h2>
                    <h3 className="mb-3 text-3xl lg:text-4xl font-bold text-yellow-500">Racial Inequality &amp; Poverty</h3>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-gray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                    <div>
                    <a className="inline-block px-12 py-4 text-black bg-yellow-500 font-bold hover:bg-yellow-600 rounded-full" href="#">Start donating</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
                <div className="relative">
                    <Image
                      src='/../public/assets/hero1.jpg'
                      alt=''
                      className="h-96 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
                      height={500}
                      width={500}
                    />
                    {/* <img className="h-96 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" /> */}
                    <img className="hidden md:block absolute greenDarkUp" src="" alt="" />
                    <img className="hidden md:block absolute wingGreen" src="../public/assets/onboarding_2.png" alt="" />
                    <style jsx>{`
                      .wingGreen {
                        bottom: 2rem;
                        right: 2rem;
                        z-index: -1;
                      }
                    `}</style>
                    <img className="hidden md:block absolute" src="atis-assets/elements/bullets-dark-right.svg" alt="" />
                    <img className="hidden md:block absolute"  alt="" /> 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mr-for-radius">
          <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-600" viewBox="0 0 10 10" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
          </svg>
        </div> */}

    </div>

  )
}

export default Hero