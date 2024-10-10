import React from 'react'

export default function Terms() {
  return (
    <>
    <section className="bg-[rgb(192,228,158,0.28)] py-2">
      <div className="container mx-auto lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <ul className="flex items-center space-x-2 font-barlow font-[500] text-white text-[14px]">
          {/* <!-- Home Icon --> */}
          <li>
            <a href="#" className="hover:text-[#000] text-[#7EBE43] transition-colors duration-300 flex items-center">
              <i className="fa-solid fa-house"></i>
            </a>
          </li>

          {/* <!-- Separator --> */}
          <li className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </li>

          {/* <!-- Current Page --> */}
          <li>
            <span className="text-[#7EBE43]">Terms & Conditions</span>
          </li>
        </ul>
      </div>
    </section>


<section className="bg-[#f5f5f5] lg:py-[90px] md:py-[50px] s:py-[40px]">
      <div className="container mx-auto lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
            <h1 className="lg:text-[38px] md:text-[34px] s:text-[26px] font-bold font-cairo leading-[50px] s:leading-[36px] text-center">
              Terms & Conditions
            </h1>
      </div>
    </section>

    <section className="lg:py-[40px] md:py-[40px] s:py-[30px]">
      <div className="container flex gap-5 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
          <div className="long-content">
            <h2>Greening Your Brand, One Package at a Time</h2>
            <p>The evolution of packaging trends reflects the growing awareness of environmental concerns, consumer preferences, and technological advancements. Today's consumers demand sustainable, functional, and aesthetically pleasing packaging that aligns with their values. Businesses optimize packaging to reduce waste, enhance supply chain efficiency, lower costs, and differentiate themselves in a crowded marketplace. Packaging optimization has become a strategic imperative in this era of heightened competition and eco-conscious consumers, shaping the success of brands and their products.</p>
            <p>The evolution of packaging trends reflects the growing awareness of environmental concerns, consumer preferences, and technological advancements. Today's consumers demand sustainable, functional, and aesthetically pleasing packaging that aligns with their values. Businesses optimize packaging to reduce waste, enhance supply chain efficiency, lower costs, and differentiate themselves in a crowded marketplace. Packaging optimization has become a strategic imperative in this era of heightened competition and eco-conscious consumers, shaping the success of brands and their products.</p>
             <p>The evolution of packaging trends reflects the growing awareness of environmental concerns, consumer preferences, and technological advancements. Today's consumers demand sustainable, functional, and aesthetically pleasing packaging that aligns with their values. Businesses optimize packaging to reduce waste, enhance supply chain efficiency, lower costs, and differentiate themselves in a crowded marketplace. Packaging optimization has become a strategic imperative in this era of heightened competition and eco-conscious consumers, shaping the success of brands and their products.</p>
              <p>The evolution of packaging trends reflects the growing awareness of environmental concerns, consumer preferences, and technological advancements. Today's consumers demand sustainable, functional, and aesthetically pleasing packaging that aligns with their values. Businesses optimize packaging to reduce waste, enhance supply chain efficiency, lower costs, and differentiate themselves in a crowded marketplace. Packaging optimization has become a strategic imperative in this era of heightened competition and eco-conscious consumers, shaping the success of brands and their products.</p>
          </div>
      </div>
    </section>
    </>
  )
}
