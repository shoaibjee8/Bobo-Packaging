import React from 'react'

export default function Form() {
  return (
    <>
    <section className="bg-[url('home-images/form-bg.jpg')] bg-center bg-no-repeat bg-cover lg:py-[70px] md:py-[50px] s:py-[40px]">
      <div className="container flex items-center s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <div className="col w-[50%] md:w-[50%] s:w-[100%]">
          <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px] text-white">Lets Talk About <span className="text-mainColor">Your Project.</span></h2>

          <form className="mt-7">
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full h-14 px-3 py-2 border border-gray-300 rounded-[5px] shadow-md placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full h-14 px-3 py-2 border border-gray-300 rounded-[5px] shadow-md placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                />
              </div>
            </div>

            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Message..."
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-[5px] shadow-md placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              ></textarea>
            </div>

            <button className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group">
              <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10">Contact Now</span>
            </button>
          </form>
        </div>
        <div className="col w-[50%] md:w-[50%] s:w-[100%]">
        </div>
      </div>
    </section>
    </>
  )
}
