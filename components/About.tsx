import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <div className=''>

      <div className="py-24 bg-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <img className="clip-path-right-top transition ease-in duration-700" src="https://i.imgur.com/tsOwUq0.jpg" alt=""/>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="lg:pl-10 max-w-lg">
                <h2 className="mb-8 text-2xl font-bold text-white">The essence of African culture is built upon the strong ancestral roots that have been passed down through generations.</h2>
                <p className="text-lg text-gray-400 pb-12">In 2022, according to Forbes Magazine, there are now 2,668 billionaires in the world. Together, they're  worth a collective $12.7 trillion.</p>
                <p className="text-lg font-bold text-gray-300 pb-12">STILL, almost half of the world - over three billion people - live on less than $2.50 a day. In 2022,</p>
                <a className="inline-block px-12 py-4 text-yellow-500 font-bold border border-yellow-500 hover:bg-black rounded-full" href="#">Join and Support</a>
              </div>
            </div>
          </div>
        </div>
      </div> 

       <div className=" xl:py-20 bg-black overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4 mb-20">
            <div className="w-full lg:w-1/2 px-4 lg:py-12">
              <a href="#">
                <h2 className="max-w-xl mt-10 mb-14 text-5xl lg:text-6xl font-bold font-heading text-white">A Global Challenge</h2>
              </a>
                <p className="text-lg text-gray-400 pb-12">From the importance of family and community to the reverence for nature and the spiritual world, the ancestral foundation of African culture is a fundamental aspect of its identity.</p>
                <p className="text-lg font-bold text-gray-300 pb-12">It is through this foundation that African people have been able to maintain their cultural heritage and preserve their unique way of life, despite the challenges of modernization and globalization.</p>
                {/* <h2 className="mb-12 text-4xl font-bold text-white">WHAT WOULD YOU PAY?</h2> */}
                <a className="inline-block px-12 py-4 text-yellow-500 font-bold border border-yellow-500 hover:bg-black rounded-full" href="#">Join and Support</a>
            </div>
            <div className="relative w-full lg:w-1/2 px-4 mt-12 lg:mb-0">
              <a href="#">
                <img className=" lg:absolute right-0 top-0 lg:mr-6 2xl:-mr-32 w-full h-96 lg:h-full object-cover" src="https://i.imgur.com/oWGkn0w.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div> 

      {/* <div className="relative h-[500px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image 
        src="https://i.imgur.com/vuBYUsZ.jpg"
        layout="fill"
        objectFit="cover"
        />
        <div className="absolute w-full text-center justify-center">
          <div className='max-w-2xl mx-auto mt-5 p-2 bg-black bg-opacity-70'>
            <h2 className="text-center mb-14 text-5xl lg:text-6xl font-bold font-heading text-yellow-500">A Global Challenge</h2>
            <p className="max-w-lg mx-auto text-sm lg:text-lg text-center text-white">In 2022, according to Forbes Magazine, there are now 2,668 billionaires in the world. Together, they're  worth a collective <span className='text-yellow-500 font-bold text-xl'>$12.7 trillion</span>.</p>
            <p className="max-w-lg mx-auto text-sm lg:text-lg font-bold text-white pb-12">STILL, almost half of the world - over three billion people - live on less than $2.50 a day. In 2022,</p>
            <button className="inline-block px-12 py-4 text-yellow-500 font-bold border border-yellow-500 hover:bg-black rounded-full active:scale-90 transition duration-150">
              Join and Support
            </button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default About