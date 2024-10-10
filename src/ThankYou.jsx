import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

export default function ThankYou() {

    // Initialize the `.slick-product` slider
  useEffect(() => {
    const initSlickProduct = () => {
      const $productSlider = $('.slick-product');
      if ($productSlider.length) {
        $productSlider.slick({
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 3,
          dots: true,
          arrows: false,
          speed: 1000,
          responsive: [
            {
              breakpoint: 999,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });

        return () => {
          if ($productSlider.length) {
            $productSlider.slick('unslick');
          }
        };
      }
    };

    const cleanupSlickProduct = initSlickProduct();

    return () => {
      cleanupSlickProduct();
    };
  }, []);
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
            <span className="text-[#7EBE43]">Thank You</span>
          </li>
        </ul>
      </div>
    </section>


<section className="bg-[url('home-images/thank-you.jpg')] bg-center bg-no-repeat bg-cover h-[400px]">
    </section>

    
     <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
      <div className="row">
        <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">New <span className="text-mainColor">Arrival</span></h2>
        <p className="font-barlow font-normal py-[18px] leading-[28px]">
          Looking for custom apparel boxes wholesale to present, promote, and protect your apparel items? Our apparel boxes are one of the most cost-effective, eco-friendly, ideally branded, and appealing packaging solutions. We design each
          apparel box according to products and market standards.
        </p>
      </div>

      <div className="slick-product">
        <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)] group">
          <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
            <img src="product-images/product-img.jpg" className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="product" />
          </div>
          <div className="product-des px-[14px] py-[18px]">
            <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo mb-[10px] text-black">Pre-Rolled Cones</h6>
            <div className="flex justify-between pb-[10px] font-barlow">
              <p><span className="text-mainColor">20.00$/</span>per Unit</p>
              <p><span className="text-mainColor">20.00$/</span>per Unit</p>
            </div>
            <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
              <p>H=3.4cm</p>
              <p>H=3.4cm</p>
              <p>H=3.4cm</p>
            </div>
            <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
              <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-white">Add to cart</span>
            </button>
          </div>
        </div>
        <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)] group">
          <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
            <img src="product-images/product-img.jpg" className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="product" />
          </div>
          <div className="product-des px-[14px] py-[18px]">
            <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo mb-[10px] text-black">Pre-Rolled Cones</h6>
            <div className="flex justify-between pb-[10px] font-barlow">
              <p><span className="text-mainColor">20.00$/</span>per Unit</p>
              <p><span className="text-mainColor">20.00$/</span>per Unit</p>
            </div>
            <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
              <p>H=3.4cm</p>
              <p>H=3.4cm</p>
              <p>H=3.4cm</p>
            </div>
            <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
              <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-white">Add to cart</span>
            </button>
          </div>
        </div>
        <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)] group">
          <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
            <img src="product-images/product-img.jpg" className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="product" />
          </div>
          <div className="product-des px-[14px] py-[18px]">
            <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo mb-[10px] text-black">Pre-Rolled Cones</h6>
            <div className="flex justify-between pb-[10px] font-barlow">
              <p><span className="text-mainColor">20.00$/</span>per Unit</p>
              <p><span className="text-mainColor">20.00$/</span>per Unit</p>
            </div>
            <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
              <p>H=3.4cm</p>
              <p>H=3.4cm</p>
              <p>H=3.4cm</p>
            </div>
            <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
              <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-white">Add to cart</span>
            </button>
          </div>
        </div>
        <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)] group">
          <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
            <img src="product-images/product-img.jpg" className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="product" />
          </div>
          <div className="product-des px-[14px] py-[18px]">
            <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo mb-[10px] text-black">Pre-Rolled Cones</h6>
            <div className="flex justify-between pb-[10px] font-barlow">
              <p><span className="text-mainColor">20.00$/</span>per Unit</p>
              <p><span className="text-mainColor">20.00$/</span>per Unit</p>
            </div>
            <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
              <p>H=3.4cm</p>
              <p>H=3.4cm</p>
              <p>H=3.4cm</p>
            </div>
            <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
              <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-white">Add to cart</span>
            </button>
          </div>
        </div>
        <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)] group">
          <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
            <img src="product-images/product-img.jpg" className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="product" />
          </div>
          <div className="product-des px-[14px] py-[18px]">
            <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo mb-[10px] text-black">Pre-Rolled Cones</h6>
            <div className="flex justify-between pb-[10px] font-barlow">
              <p><span className="text-mainColor">20.00$/</span>per Unit</p>
              <p><span className="text-mainColor">20.00$/</span>per Unit</p>
            </div>
            <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
              <p>H=3.4cm</p>
              <p>H=3.4cm</p>
              <p>H=3.4cm</p>
            </div>
            <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
              <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-white">Add to cart</span>
            </button>
          </div>
        </div>
        <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)] group">
          <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
            <img src="product-images/product-img.jpg" className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="product" />
          </div>
          <div className="product-des px-[14px] py-[18px]">
            <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo mb-[10px] text-black">Pre-Rolled Cones</h6>
            <div className="flex justify-between pb-[10px] font-barlow">
              <p><span className="text-mainColor">20.00$/</span>per Unit</p>
              <p><span className="text-mainColor">20.00$/</span>per Unit</p>
            </div>
            <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
              <p>H=3.4cm</p>
              <p>H=3.4cm</p>
              <p>H=3.4cm</p>
            </div>
            <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
              <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-white">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
