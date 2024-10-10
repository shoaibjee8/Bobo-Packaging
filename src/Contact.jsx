import React from 'react'

export default function Contact() {
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
            <span className="text-[#7EBE43]">Shop Page</span>
          </li>
        </ul>
      </div>
    </section>

    <section className="bg-[url('home-images/contact-bg.jpg')] bg-center bg-no-repeat bg-cover lg:py-[70px] md:py-[50px] s:py-[40px] ">
      <div className="container mx-auto grid lg:grid-cols-2 s:grid-cols-1 lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <div className="col">
          <div className="bg-[#000] bg-opacity-[0.5] lg:px-9 lg:py-6 md:p-6 s:p-5 rounded-[10px] lg:w-[500px] md:w-[450px]">
            <h1 className="lg:text-[42px] md:text-[38px] s:text-[30px] font-bold text-white font-cairo leading-[56px] s:leading-[40px]">
              Request A Custom Quote
            </h1>
            <p className="font-barlow font-normal pt-[10px] text-white leading-[30px]">
              Make your concentrates stand out with our concentrate packaging. Available in a multitude of styles and sizes, these packaging.
            </p>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </section>

    <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">

      <div className="container flex gap-5 s:flex-col lg:px-[0rem] s:px-[0rem] md:px-[2rem] sl:px-[2rem]">
        <div className="col w-[50%] s:w-[100%]">
            <h2 className="lg:text-[40px] md:text-[33px] s:text-[28px] font-bold font-cairo leading-[40px] s:leading-[30px] mb-3">We're Here <span className="text-mainColor">to Help</span></h2>
            <div className="flex group py-[10px] flex-wrap">
              <i className="fa-solid fa-phone text-mainColor mt-3 text-[18px]"></i>
              <div className="ml-4">
                <h6 className="font-barlow font-semibold text-[24px]">Phone</h6>
                <p className="group-hover:text-mainColor group-hover:transition-all group-hover:duration-150 text-[#3e3e3e]">408-622-0080</p>
              </div>
            </div>
            <div className="flex group py-[10px]">
              <i className="fa-solid fa-envelope text-mainColor mt-2 text-[18px]"></i>
              <div className="ml-4">
                <h6 className="font-barlow font-semibold text-[24px]">Email</h6>
                <p className="group-hover:text-mainColor group-hover:transition-all group-hover:duration-150 text-[#3e3e3e]">email@email.com</p>
              </div>
            </div>
            <div className="flex group py-[10px]">
              <i className="fa-solid fa-location-dot text-mainColor mt-2 text-[18px]"></i>
              <div className="ml-4">
                <h6 className="font-barlow font-semibold text-[24px]">Address</h6>
                <p className="group-hover:text-mainColor group-hover:transition-all group-hover:duration-150 text-[#3e3e3e]">2529 West 10th street STE 200. Cleveland, Ohio 44113</p>
              </div>
            </div>
            <h4 className="lg:text-[30px] md:text-[25px] s:text-[20px] font-semibold font-cairo leading-[40px] s:leading-[30px] mb-3 mt-3">24/7 Customer Support</h4>
            <p className="font-barlow">Our customer support team is here to assist you! If you have any questions, concerns, or need help.</p>
        </div>
        <div className="col w-[50%] s:w-[100%]">
          <h2 className="lg:text-[40px] md:text-[33px] s:text-[28px] font-bold font-cairo leading-[40px] s:leading-[30px] mb-3">Get Custom <span className="text-mainColor">Quote</span></h2>
          
          <form className="mt-6"> 
            <div className="mb-4 grid lg:grid-cols-3 md:grid-cols-3 gap-4 s:grid-cols-1">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full h-13 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full h-13 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Number"
                  className="w-full h-13 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                />
              </div>
            </div>

            <div className="mb-4 grid lg:grid-cols-2 md:grid-cols-2 gap-4 s:grid-cols-2">
              <div>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="Quantity"
                  className="w-full h-13 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <select id="options" name="options" className="w-full h-13 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black">
                  <option value="">Industry</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

            </div>

            <div className="mb-4">
                <input
                  type="text"
                  id="p-address"
                  name="p-address"
                  placeholder="Physical Address"
                  className="w-full h-13 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                />
              </div>

            {/* <!-- Text Message --> */}
            <div className="mb-3">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your Message..."
                className="w-full px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              ></textarea>
            </div>

            {/* <!-- Submit Button --> */}
            <button className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group">
              <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10">Get Inquiry</span>
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}
