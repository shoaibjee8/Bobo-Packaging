import React from 'react'

export default function Footer() {
  return (
    <>
     <section className="lg:py-[30px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem] border-t-[1px] border-[#949494]">
      <div className="container grid lg:grid-cols-4 md:grid-cols-4 s:grid-cols-1 gap-5">
        <div className="col">
          <div className="last-section center">
            <img src="/home-images/price-tag.jpg" className="block mx-auto mb-2" alt="img" />
            <h5 className="lg:text-[20px] md:text-[17px] s:text-[19px] font-semibold font-cairo py-[10px] text-center">We'll Beat Any Price</h5>
            <p className="font-barlow font-normal leading-[26px] text-center">Shop with confidence knowing that if you find a lower price elsewhere, we'll match it.</p>
          </div>
        </div>
        <div className="col">
          <div className="last-section center">
            <img src="/home-images/customer-service.jpg" className="block mx-auto mb-2" alt="img" />
            <h5 className="lg:text-[20px] md:text-[17px] s:text-[19px] font-semibold font-cairo py-[10px] text-center">We'll Beat Any Price</h5>
            <p className="font-barlow font-normal leading-[26px] text-center">Shop with confidence knowing that if you find a lower price elsewhere, we'll match it.</p>
          </div>
        </div>
        <div className="col">
          <div className="last-section center">
            <img src="/home-images/credit-card.jpg" className="block mx-auto mb-2" alt="img" />
            <h5 className="lg:text-[20px] md:text-[17px] s:text-[19px] font-semibold font-cairo py-[10px] text-center">We'll Beat Any Price</h5>
            <p className="font-barlow font-normal leading-[26px] text-center">Shop with confidence knowing that if you find a lower price elsewhere, we'll match it.</p>
          </div>
        </div>
        <div className="col">
          <div className="last-section center">
            <img src="/home-images/pick-up.jpg" className="block mx-auto mb-2" alt="img" />
            <h5 className="lg:text-[20px] md:text-[17px] s:text-[19px] font-semibold font-cairo py-[10px] text-center">We'll Beat Any Price</h5>
            <p className="font-barlow font-normal leading-[26px] text-center">Shop with confidence knowing that if you find a lower price elsewhere, we'll match it.</p>
          </div>
        </div>
      </div>
    </section>

    <footer className="bg-[#f2f8ec] lg:pt-[50px] lg:pb-[20px] md:pt-[50px] md:pb-[20px] s:py-[40px] relative z-10">
      <div className="container flex items-center gap-5 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <div className="col w-[30%] s:w-[100%]">
          <img src="/home-images/bobo-packaging.svg" alt="logo" />
        </div>
        <div className="col w-[40%] s:w-[100%]">
          <form className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full h-12 px-3 py-2 pr-16 border border-gray-300 rounded-[10px] shadow-md placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
            />

            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-mainColor px-[10px] text-white font-barlow rounded-full overflow-hidden transition-all duration-300 ease-in-out group flex items-center">
                <i className="fa-solid fa-angle-right relative z-10 text-[20px] relative py-[5px] text-[16px]"></i>
              <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
            </button>
          </form>
        </div>
        <div className="col w-[30%] s:w-[100%]">
          <div className="flex space-x-4 justify-end s:justify-start">
            <a href="#">
              <img src="/home-images/facebook.svg" />
            </a>

            <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors duration-300">
              <img src="/home-images/instagram.svg" />
            </a>

            <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors duration-300">
              <img src="/home-images/linkedin.svg" />
            </a>

            <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors duration-300">
              <img src="/home-images/instagram.svg" />
            </a>

            <a href="#" className="text-gray-500 hover:text-red-600 transition-colors duration-300">
              <img src="/home-images/pinterest.svg" />
            </a>
          </div>
        </div>
      </div>

      <div className="container flex gap-5 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem] mt-7 mb-10">
        <div className="col w-[25%] s:w-[100%]">
          <div className="f1">
            <h4 className="font-barlow font-semibold text-[20px]">Support</h4>
            <ul className="font-barlow space-y-2 mt-3">
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>About Us</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Our Services</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Portfolio</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Contact</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Blog</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Careers</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>FAQ</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Privacy Policy</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="col w-[25%] s:w-[100%]">
          <div className="f2">
            <h4 className="font-barlow font-semibold text-[20px]">Information</h4>
            <ul className="font-barlow space-y-2 mt-3">
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>About Us</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Our Services</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Portfolio</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Contact</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Blog</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Careers</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>FAQ</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Privacy Policy</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="col w-[23%] s:w-[100%]">
          <div className="f3">
            <h4 className="font-barlow font-semibold text-[20px]">Collections</h4>
            <ul className="font-barlow space-y-2 mt-3">
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Mylar Bags</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Our Services</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Portfolio</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Contact</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Blog</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Careers</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>FAQ</li>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <li>Privacy Policy</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="col w-[27%] s:w-[100%]">
          <div className="f3">
            <h4 className="font-barlow font-semibold text-[20px]">Contact Us</h4>
            <ul className="font-barlow space-y-4 mt-3">
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <div className="flex items-center">
                  <i className="fa-solid fa-envelope text-[16px] text-mainColor mr-[15px] mt-1"></i>
                  <p className="font-barlow">sales@cgmail.com</p>
                </div>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <div className="flex items-center">
                  <i className="fa-solid fa-phone text-[16px] text-mainColor mr-[15px]"></i>
                  <p className="font-barlow">+999 999 99</p>
                </div>
              </a>
              <a href="#" className="block hover:text-mainColor transition-colors duration-300">
                <div className="flex items-center">
                  <i className="fa-solid fa-location-dot text-[16px] text-mainColor mr-[15px] "></i>
                  <p className="font-barlow">110-112 Lafayette Park, Lynn, MA 01902</p>
                </div>
              </a>
                <li>
                  <img src="/home-images/card.jpg" className="mt-5" alt="card" />
                </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container flex items-center gap-5 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem] pt-3 border-t-[1px] border-[#949494]">
        <div className="col w-[50%] s:w-[100%]">
          <p className="font-barlow font-normal leading-[26px]">© 2023 Copyright Custom Designs Boxes. All Rights Reserved.</p>
        </div>
        <div className="col w-[50%] s:w-[100%]">
          <div className="flex space-x-4 justify-end s:justify-start">
            <a href="#">
              <p className="font-barlow font-normal leading-[26px]">Privacy Policay</p>
            </a>
            <a href="#">
              <p className="font-barlow font-normal leading-[26px]">Terms & Conditions</p>
            </a>
          </div>
        </div>
      </div>
      <img src="/home-images/footer-leave.png" className="footer-img" alt="content-img" />
    </footer>
    </>
  )
}
