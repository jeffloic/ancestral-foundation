import React from 'react'
import Image from 'next/image'

function AboutHero() {
  return (
    <div className='py-10 bg-black'>
        <div className="relative h-[500px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image 
              src="https://i.imgur.com/vuBYUsZ.jpg"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-1/4 w-full text-center items-center justify-center">
              {/* <h2 className="max-w-4xl mx-auto uppercase text-center mb-14 text-3xl lg:text-4xl font-bold font-heading text-yellow-500">Our Ancestral Heritage</h2> */}

              {/* <p className="max-w-xl mx-auto text-sm lg:text-lg font-bold text-white pb-12">The traditions, beliefs, and customs of African societies have been passed down from generation to generation, shaping the way of life for many communities on the continent.</p>
                <button className="inline-block px-12 py-4 text-yellow-500 font-bold border border-yellow-500 hover:bg-black rounded-full active:scale-90 transition duration-150">
                Join and Support
                </button> */}
            </div>
        </div>
    </div>
  )
}

export default AboutHero