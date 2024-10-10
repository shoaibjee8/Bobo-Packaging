import React from 'react'

export default function Error() {
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
            <span className="text-[#7EBE43]">404 Page</span>
          </li>
        </ul>
      </div>
    </section>

    <section className="lg:py-[40px] md:py-[40px] s:py-[30px]">
      <div className="container lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <div className="row text-center">
            <img src="/home-images/error.png" className="mx-auto max-w-full" alt="404 image"/>
            <button
            className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group md:ml-auto lg:ml-[0px] lg:mr-[0px] md:mr-[30px] mt-6"
            role="button"
          >
            <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
            <span className="relative z-10">Go Back to Safety</span>
          </button>
        </div>
      </div>
    </section>
    </>
  )
}
