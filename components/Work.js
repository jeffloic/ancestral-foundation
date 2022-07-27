import React from 'react'
import Image from 'next/image'

function Work() {
  return (
    <div>

<section className="bg-black py-20 2xl:py-40 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto mb-12 lg:mb-28 text-center"><span className="text-lg text-yellow-500 font-semibold">Our Works</span>
            <h2 className="mt-8 text-5xl text-white font-bold font-heading">More than 20 years in helping make a difference</h2>
          </div>
          <div className="flex flex-wrap -mx-5">
            <div className="w-full lg:w-1/3 px-5 pt-10 lg:pt-20 pb-10">
              <ul>
                <li className="pb-5 border-b border-gray-500"><a className="inline-block py-6 px-12 bg-gray-600 rounded-lg text-lg text-white font-bold" href="#">Abstraction 3D</a></li>
                <li className="py-6 border-b border-gray-500"><a className="inline-block py-6 px-12 text-lg text-gray-300" href="#">Commercial</a></li>
                <li className="py-6 border-b border-gray-500"><a className="inline-block py-6 px-12 text-lg text-gray-300" href="#">Photography & Film</a></li>
                <li><a className="inline-block py-6 px-12 text-lg text-gray-300" href="#">All projects</a></li>
              </ul>
            </div>
            <div className="w-full lg:w-2/3 px-5">
              <div className="flex flex-wrap -px-4">
                <div className="w-full md:w-1/3 p-4">
                <Image
                      src='/../public/assets/work-1.jpg'
                      alt=''
                      className="h-96 w-full object-cover"
                      height={384}
                      width={200}
                    />
                    {/* <img className="h-96 w-full object-cover" src="/../public/assets/work-1.jpg" alt=""/> */}
                    </div>
                <div className="w-full md:w-2/3 p-4">
                <Image
                      src='/../public/assets/work-4.jpg'
                      alt=''
                      className="h-96 w-full object-cover"
                      height={384}
                      width={500}
                    />
                    {/* <img className="h-96 object-cover w-full" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=959&amp;q=80" alt=""/> */}
                    </div>
                <div className="w-full md:w-2/3 p-4">
                <Image
                      src='/../public/assets/work-6.jpg'
                      alt=''
                      className="h-96 w-full object-cover"
                      height={384}
                      width={500}
                    />
                    {/* <img className="h-96 object-cover w-full" src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1100&amp;q=80" alt=""/> */}
                    </div>
                <div className="w-full md:w-1/3 p-4">
                    <Image
                        src='/../public/assets/work-4.jpg'
                        alt=''
                        className="h-96 w-full object-cover"
                        height={384}
                        width={200}
                        />
                    {/* <img className="h-96 w-full object-cover" src="https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=959&amp;q=80" alt=""/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

    </div>
  )
}

export default Work