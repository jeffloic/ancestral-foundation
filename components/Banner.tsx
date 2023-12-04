import React from 'react'


const Banner = () => {
  return (
    <div>
      <section className="py-20 2xl:py-40 overflow-hidden border-t-2 border-b-2 border-yellow-500 bg-black">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <a className="inline-block mx-auto text-white text-xl font-bold" href="#">
              <img className="h-7" src="zospace-assets/logos/zospace-dark-logo.svg" alt="" width="auto"/>
            </a>
            <h2 className="my-8 text-6xl text-yellow-500 lg:text-7xl font-bold font-heading">WHAT WOULD YOU SACRIFICE? </h2>
            <p className="mb-14 text-2xl font-bold text-white">No More Injustice. No More Racial disparities. No More Education, Health and Wealth disparities anywhere on this planet.</p>
            <a className="inline-block py-4 px-12 text-yellow-500 font-bold border border-yellow-500 hover:text-black hover:bg-yellow-600 rounded-full transition duration-200" href="#">Get involved</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner