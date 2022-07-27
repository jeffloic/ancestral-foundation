import React from 'react'

function About() {
  return (
    <div>

<section className="py-24 bg-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <img className="clip-path-right-top transition ease-in duration-700" src="https://images.unsplash.com/photo-1556484687-30636164638b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHJhY2lhbHxlbnwwfHx8fDE2NTg3NjQzMjY&ixlib=rb-1.2.1&w=500" alt=""/></div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="lg:pl-10 max-w-lg">
                <h2 className="mb-8 text-4xl font-bold text-white">Supporting and empowering communities with a mission to End Poverty</h2>
                <p className="text-lg text-gray-500 pb-12">If you have ever wondered how to develop your brand, this is the place for you. Take a big step forward in growing your business with this great tool.</p>
                <a className="inline-block px-12 py-4 text-yellow-500 font-bold border border-yellow-500 hover:bg-black rounded-full" href="#">Join and Support</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About