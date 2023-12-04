import React from 'react'
import Image from 'next/image'

function Moore() {
  return (
    <div className='pb-20 flex flex-col'>
        <div className="relative h-[500px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image 
              src="https://i.imgur.com/vuBYUsZ.jpg"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-1/4 w-full text-center justify-center">
              <h2 className="max-w-4xl mx-auto text-center mb-14 text-5xl lg:text-6xl font-bold font-heading text-white">Global Action</h2>

              <p className="max-w-xl mx-auto text-sm lg:text-lg font-bold text-white pb-12">he 2030 Agenda by the UN for Sustainable Development promises to leave <span className='text-3xl font-bold text-yellow-500'>No One</span> behind and to reach those furthest behind first. </p>
                <button className="inline-block px-12 py-4 text-yellow-500 font-bold border border-yellow-500 hover:bg-black rounded-full active:scale-90 transition duration-150">
                Join and Support
                </button>
            </div>
        </div>
    </div>
  )
}

export default Moore