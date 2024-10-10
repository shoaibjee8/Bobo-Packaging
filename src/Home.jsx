import React, { useEffect } from 'react';
import Form from './layouts/Form'
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import { Link } from 'react-router-dom';

export default function Home() {

   useEffect(() => {
      const initSlickSlider = (selector, slidesToShow) => {
        const $element = $(selector);
        if ($element.length) {
          $element.slick({
            slidesToShow: slidesToShow,
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
            if ($element.length) {
              $element.slick('unslick');
            }
          };
        }
        return () => {};
      };
  
      // Initialize the slider for product class
      const cleanupSlickProduct = initSlickSlider('.slick-product', 4);
  
      // Cleanup on component unmount
      return () => {
        cleanupSlickProduct();
      };
    }, []);
    
  return (
    <>
    <section className="bg-[url('home-images/main-banner.jpg')] bg-center bg-no-repeat bg-cover lg:py-[70px] md:py-[50px] s:py-[40px]">
         <div className="container mx-auto grid lg:grid-cols-2 s:grid-cols-1 lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
            <div className="col">
               <p className="font-barlow pb-[10px] text-white lg:text-[20px] md:text-[22px] leading-[30px] text-shadow-custom">
                  The One-Stop Shop For All Your Crop
               </p>
               <h1 className="lg:text-[48px] md:text-[38px] s:text-[35px] font-bold font-cairo leading-[56px] s:leading-[40px]">
                  Marijuana Packaging
               </h1>
               <p className="font-barlow font-normal py-[12px] text-white leading-[30px] text-shadow-custom">
                  Make your concentrates stand out with our concentrate packaging. Available in a multitude of styles and sizes, these packaging solutions offer both functionality and aesthetic appeal at low wholesale prices.
               </p>
               <button className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group">
                  <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                  <span className="relative z-10">Explore More Packaging</span>
               </button>
            </div>
            <div className="col"></div>
         </div>
      </section>

      <section className="container grid lg:grid-cols-5 md:grid-cols-5 s:grid-cols-2 gap-5 lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
         <div className="col">
            <Link to={'/industries'}>
            <div className="relative overflow-hidden group rounded-[5px]">
               <img src="category-images/cate.jpg" className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="category-images" />
               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[5px] transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
               <h3 className="font-barlow lg:text-[18px] absolute bottom-4 left-4 text-white transition-transform duration-300 ease-in-out group-hover:font-bold group-hover:translate-y-[-1px]">
                  Flower
               </h3>
            </div>
            </Link>
         </div>
         <div className="col">
            <div className="relative overflow-hidden group rounded-[5px]">
               <img src="category-images/cate.jpg" className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="category-images" />
               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[5px] transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
               <h3 className="font-barlow lg:text-[18px] absolute bottom-4 left-4 text-white transition-transform duration-300 ease-in-out group-hover:font-bold group-hover:translate-y-[-1px]">
                  Flower
               </h3>
            </div>
         </div>
         <div className="col">
            <div className="relative overflow-hidden group rounded-[5px]">
               <img src="category-images/cate.jpg" className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="category-images" />
               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[5px] transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
               <h3 className="font-barlow lg:text-[18px] absolute bottom-4 left-4 text-white transition-transform duration-300 ease-in-out group-hover:font-bold group-hover:translate-y-[-1px]">
                  Flower
               </h3>
            </div>
         </div>
         <div className="col">
            <div className="relative overflow-hidden group rounded-[5px]">
               <img src="category-images/cate.jpg" className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="category-images" />
               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[5px] transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
               <h3 className="font-barlow lg:text-[18px] absolute bottom-4 left-4 text-white transition-transform duration-300 ease-in-out group-hover:font-bold group-hover:translate-y-[-1px]">
                  Flower
               </h3>
            </div>
         </div>
         <div className="col">
            <div className="relative overflow-hidden group rounded-[5px]">
               <img src="category-images/cate.jpg" className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="category-images" />
               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[5px] transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
               <h3 className="font-barlow lg:text-[18px] absolute bottom-4 left-4 text-white transition-transform duration-300 ease-in-out group-hover:font-bold group-hover:translate-y-[-1px]">
                  Flower
               </h3>
            </div>
         </div>
      </section>

      <section className="bg-[url('home-images/section-image.jpg')] bg-center bg-no-repeat bg-cover lg:py-[70px] md:py-[50px] s:py-[40px]">
         <div className="container flex items-center gap-7 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
            <div className="col w-[50%] s:w-[100%]"></div>
            <div className="col w-[50%] s:w-[100%] text-white text-right lg:pl-[40px] md:pl-[0px] s:pl-[0px]">
               <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">Cannabis <span className="text-mainColor">Packaging</span></h2>
               <p className="font-barlow font-normal py-[18px] leading-[28px]">
                  Looking for custom apparel boxes wholesale to present, promote, and protect your apparel items? Our apparel boxes are one of the most cost-effective, eco-friendly, ideally branded, and appealing packaging solutions. We
                  design each apparel box according to products and market standards. Our team satisfies your packing needs with perfection!
               </p>
               <button className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group">
                  <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                  <span className="relative z-10">Explore More Packaging</span>
               </button>
            </div>
         </div>
      </section>

      <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
         <div className="row">
            <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">Best Selling <span className="text-mainColor">Products</span></h2>
            <p className="font-barlow font-normal py-[18px] leading-[28px]">
               Looking for custom apparel boxes wholesale to present, promote, and protect your apparel items? Our apparel boxes are one of the most cost-effective, eco-friendly, ideally branded, and appealing packaging solutions. We design
               each apparel box according to products and market standards.
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
                     <p>L=3.4cm</p>
                     <p>W=3.4cm</p>
                     <p>H=3.4cm</p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                     <p><span className="text-mainColor">20.00$/</span>per Unit</p>
                     <p><span className="text-mainColor">20.00$/</span>per Case</p>
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
                     <p>L=3.4cm</p>
                     <p>W=3.4cm</p>
                     <p>H=3.4cm</p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                     <p><span className="text-mainColor">20.00$/</span>per Unit</p>
                     <p><span className="text-mainColor">20.00$/</span>per Case</p>
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
                     <p>L=3.4cm</p>
                     <p>W=3.4cm</p>
                     <p>H=3.4cm</p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                     <p><span className="text-mainColor">20.00$/</span>per Unit</p>
                     <p><span className="text-mainColor">20.00$/</span>per Case</p>
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
                     <p>L=3.4cm</p>
                     <p>W=3.4cm</p>
                     <p>H=3.4cm</p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                     <p><span className="text-mainColor">20.00$/</span>per Unit</p>
                     <p><span className="text-mainColor">20.00$/</span>per Case</p>
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
                     <p>L=3.4cm</p>
                     <p>W=3.4cm</p>
                     <p>H=3.4cm</p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                     <p><span className="text-mainColor">20.00$/</span>per Unit</p>
                     <p><span className="text-mainColor">20.00$/</span>per Case</p>
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
                     <p>L=3.4cm</p>
                     <p>W=3.4cm</p>
                     <p>H=3.4cm</p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                     <p><span className="text-mainColor">20.00$/</span>per Unit</p>
                     <p><span className="text-mainColor">20.00$/</span>per Case</p>
                  </div>
                  <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
                     <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                     <span className="relative z-10 group-hover:text-white">Add to cart</span>
                  </button>
               </div>
            </div>
         </div>
      </section>

      <section className="bg-[#f5f5f5] lg:py-[70px] md:py-[50px] s:py-[40px]">
         <div className="container flex items-center gap-7 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
            <div className="col w-[50%] md:w-[50%] s:w-[100%]">
               <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">Cannabis <span className="text-mainColor">Packaging</span></h2>
               <p className="font-barlow font-normal py-[18px] leading-[28px]">
                  Looking for custom apparel boxes wholesale to present, promote, and protect your apparel items? Our apparel boxes are one of the most cost-effective, eco-friendly, ideally branded, and appealing packaging solutions. We
                  design each apparel box according to products and market standards. Our team satisfies your packing needs with perfection!
               </p>
               <button className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group">
                  <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                  <span className="relative z-10">Explore More Packaging</span>
               </button>
            </div>
            <div className="col w-[50%] md:w-[50%] s:w-[100%]">
               <img src="home-images/pre-roll-packaging.png" className="w-full" alt="image" />
            </div>
         </div>
      </section>

      <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
         <div className="row">
            <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">Best Selling <span className="text-mainColor">Categories</span></h2>
            <p className="font-barlow font-normal py-[18px] leading-[28px]">
               Looking for custom apparel boxes wholesale to present, promote, and protect your apparel items? Our apparel boxes are one of the most cost-effective, eco-friendly, ideally branded, and appealing packaging solutions. We design
               each apparel box according to products and market standards.
            </p>
         </div>

         <div className="row flex items-center gap-5 s:flex-col lg:px-[0rem] s:px-[0rem] md:px-[2rem] sl:px-[2rem]">
            <div className="col lg:w-[40.5%] md:w-[40%] s:w-[100%]">
               <div className="relative overflow-hidden group rounded-[5px]">
                  <img src="category-images/cate1.jpg" className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="category-images" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[5px] transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                  <h3 className="font-cairo lg:text-[18px] absolute bottom-4 left-4 text-white transition-transform duration-300 ease-in-out group-hover:font-bold group-hover:translate-y-[-1px]">
                     Mylar Bags
                  </h3>
               </div>
            </div>
            <div className="col lg:w-[59.5%] md:w-[60%] s:w-[100%]">
               <div className="grid lg:grid-cols-2 md:grid-cols-2 s:grid-cols-2 gap-5 s:gap-3">
                  <div className="col">
                     <div className="relative overflow-hidden group rounded-[5px]">
                        <img src="category-images/cate2.jpg" className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="category-images" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[5px] transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                        <h3 className="font-cairo lg:text-[18px] absolute bottom-4 left-4 text-white transition-transform duration-300 ease-in-out group-hover:font-bold group-hover:translate-y-[-1px]">
                           Mylar Bags
                        </h3>
                     </div>
                  </div>
                  <div className="col">
                     <div className="relative overflow-hidden group rounded-[5px]">
                        <img src="category-images/cate3.jpg" className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="category-images" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[5px] transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                        <h3 className="font-cairo lg:text-[18px] absolute bottom-4 left-4 text-white transition-transform duration-300 ease-in-out group-hover:font-bold group-hover:translate-y-[-1px]">
                           Mylar Bags
                        </h3>
                     </div>
                  </div>
               </div>
               <div className="row mt-3">
                  <div className="relative overflow-hidden group rounded-[5px]">
                     <img src="category-images/cate4.jpg" className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110" alt="category-images" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[5px] transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                     <h3 className="font-cairo lg:text-[18px] absolute bottom-4 left-4 text-white transition-transform duration-300 ease-in-out group-hover:font-bold group-hover:translate-y-[-1px]">
                        Mylar Bags
                     </h3>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="bg-[#f5f5f5] lg:py-[50px] md:py-[50px] s:py-[40px] relative z-10">
         <div className="container lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
            <div className="long-content">
               <h2>What is Lorem Ipsum?</h2>
               <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               </p>
               <h3>What is Lorem Ipsum?</h3>
               <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               </p>
               <h4>What is Lorem Ipsum?</h4>
               <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               </p>
               <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               </p>
               <img src="home-images/leave.png" className="content-img" alt="content-img" />
            </div>
         </div>
      </section>

      <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
         <div className="row">
            <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">New <span className="text-mainColor">Arrival</span></h2>
            <p className="font-barlow font-normal py-[18px] leading-[28px]">
               Looking for custom apparel boxes wholesale to present, promote, and protect your apparel items? Our apparel boxes are one of the most cost-effective, eco-friendly, ideally branded, and appealing packaging solutions. We design
               each apparel box according to products and market standards.
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
                     <p>L=3.4cm</p>
                     <p>W=3.4cm</p>
                     <p>H=3.4cm</p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                     <p><span className="text-mainColor">20.00$/</span>per Unit</p>
                     <p><span className="text-mainColor">20.00$/</span>per Case</p>
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
                     <p>L=3.4cm</p>
                     <p>W=3.4cm</p>
                     <p>H=3.4cm</p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                     <p><span className="text-mainColor">20.00$/</span>per Unit</p>
                     <p><span className="text-mainColor">20.00$/</span>per Case</p>
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
                     <p>L=3.4cm</p>
                     <p>W=3.4cm</p>
                     <p>H=3.4cm</p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                     <p><span className="text-mainColor">20.00$/</span>per Unit</p>
                     <p><span className="text-mainColor">20.00$/</span>per Case</p>
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
                     <p>L=3.4cm</p>
                     <p>W=3.4cm</p>
                     <p>H=3.4cm</p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                     <p><span className="text-mainColor">20.00$/</span>per Unit</p>
                     <p><span className="text-mainColor">20.00$/</span>per Case</p>
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
                     <p>L=3.4cm</p>
                     <p>W=3.4cm</p>
                     <p>H=3.4cm</p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                     <p><span className="text-mainColor">20.00$/</span>per Unit</p>
                     <p><span className="text-mainColor">20.00$/</span>per Case</p>
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
                     <p>L=3.4cm</p>
                     <p>W=3.4cm</p>
                     <p>H=3.4cm</p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                     <p><span className="text-mainColor">20.00$/</span>per Unit</p>
                     <p><span className="text-mainColor">20.00$/</span>per Case</p>
                  </div>
                  <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
                     <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                     <span className="relative z-10 group-hover:text-white">Add to cart</span>
                  </button>
               </div>
            </div>
         </div>
      </section>

      <Form/>

      <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
         <div className="row">
            <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">Frequently Asked <span className="text-mainColor">Questions</span></h2>
            <p className="font-barlow font-normal py-[18px] leading-[28px]">
               Looking for custom apparel boxes wholesale to present, promote, and protect your apparel items? Our apparel boxes are one of the most cost-effective, eco-friendly, ideally branded, and appealing packaging solutions.
            </p>
         </div>
         <div className="row">
            <div>
               <ul className="grid space-y-3 font-barlow" data-list="faq">
                  <li className="group" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                     <input className="peer/option-1 hidden" type="radio" id="option-1" name="options-1" />
                     <label
                        className="peer-checked/option-1:bg-mainColor peer-checked/option-1:text-white peer-checked/option-1:border-white peer-checked/option-1:rounded-[3px] peer-checked/option-1:[&>svg]:text-white peer-checked/option-1:[&>svg]:rotate-180 block cursor-pointer p-2 pr-12 font-semibold border-b border-slate-900 transition-all duration-150 ease-in-out relative rounded-none text-gray-900"
                        for="option-1"
                        itemprop="name"
                     >
                        What is Tailwind CSS?
                        <svg
                           className="w-6 h-6 text-gray-600 absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform duration-300 faq-icon"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                     </label>
                     <div className="grid grid-rows-[0fr] transition-all duration-150 ease-in-out peer-checked/option-1:grid-rows-[1fr]" itemscope itemprop="acceptedAnswer">
                        <div className="min-h-[0px] overflow-hidden">
                           <div className="p-2 border-none rounded" itemprop="text">Tailwind CSS is a utility-first CSS framework for creating custom designs quickly and efficiently.</div>
                        </div>
                     </div>
                  </li>
                  <li className="group" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                     <input className="peer/option-2 hidden" type="radio" id="option-2" name="options-1" />
                     <label
                        className="peer-checked/option-2:bg-mainColor peer-checked/option-2:text-white peer-checked/option-2:border-white peer-checked/option-2:rounded-[3px] peer-checked/option-2:[&>svg]:text-white peer-checked/option-2:[&>svg]:rotate-180 block cursor-pointer p-2 pr-12 font-semibold border-b border-slate-900 transition-all duration-150 ease-in-out relative rounded-none text-gray-900"
                        for="option-2"
                        itemprop="name"
                     >
                        What is Tailwind CSS used for?
                        <svg
                           className="w-6 h-6 text-gray-600 absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform duration-300 faq-icon"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                     </label>
                     <div className="grid grid-rows-[0fr] transition-all duration-150 ease-in-out peer-checked/option-2:grid-rows-[1fr]" itemscope itemprop="acceptedAnswer">
                        <div className="min-h-[0px] overflow-hidden">
                           <div className="p-2 border-none rounded" itemprop="text">Tailwind CSS is primarily used for rapidly building custom UI designs without having to write custom CSS.</div>
                        </div>
                     </div>
                  </li>
                  <li className="group" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                     <input className="peer/option-3 hidden" type="radio" id="option-3" name="options-1" />
                     <label
                        className="peer-checked/option-3:bg-mainColor peer-checked/option-3:text-white peer-checked/option-3:border-white peer-checked/option-3:rounded-[3px] peer-checked/option-3:[&>svg]:text-white peer-checked/option-3:[&>svg]:rotate-180 block cursor-pointer p-2 pr-12 font-semibold border-b border-slate-900 transition-all duration-150 ease-in-out relative rounded-none text-gray-900"
                        for="option-3"
                        itemprop="name"
                     >
                        What are the benefits of Tailwind CSS?
                        <svg
                           className="w-6 h-6 text-gray-600 absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform duration-300 faq-icon"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                     </label>
                     <div className="grid grid-rows-[0fr] transition-all duration-150 ease-in-out peer-checked/option-3:grid-rows-[1fr]" itemscope itemprop="acceptedAnswer">
                        <div className="min-h-[0px] overflow-hidden">
                           <div className="p-2 border-none rounded" itemprop="text">The benefits of Tailwind CSS include rapid prototyping, reusability, and a low learning curve for beginners.</div>
                        </div>
                     </div>
                  </li>
                  <li className="group" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                     <input className="peer/option-4 hidden" type="radio" id="option-4" name="options-1" />
                     <label
                        className="peer-checked/option-4:bg-mainColor peer-checked/option-4:text-white peer-checked/option-4:border-white peer-checked/option-4:rounded-[3px] peer-checked/option-4:[&>svg]:text-white peer-checked/option-4:[&>svg]:rotate-180 block cursor-pointer p-2 pr-12 font-semibold border-b border-slate-900 transition-all duration-150 ease-in-out relative rounded-none text-gray-900"
                        for="option-4"
                        itemprop="name"
                     >
                        What are the benefits of Tailwind CSS?
                        <svg
                           className="w-6 h-6 text-gray-600 absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform duration-300 faq-icon"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                     </label>
                     <div className="grid grid-rows-[0fr] transition-all duration-150 ease-in-out peer-checked/option-4:grid-rows-[1fr]" itemscope itemprop="acceptedAnswer">
                        <div className="min-h-[0px] overflow-hidden">
                           <div className="p-2 border-none rounded" itemprop="text">The benefits of Tailwind CSS include rapid prototyping, reusability, and a low learning curve for beginners.</div>
                        </div>
                     </div>
                  </li>
                  <li className="group" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                     <input className="peer/option-5 hidden" type="radio" id="option-5" name="options-1" />
                     <label
                        className="peer-checked/option-5:bg-mainColor peer-checked/option-5:text-white peer-checked/option-5:border-white peer-checked/option-5:rounded-[3px] peer-checked/option-5:[&>svg]:text-white peer-checked/option-5:[&>svg]:rotate-180 block cursor-pointer p-2 pr-12 font-semibold border-b border-slate-900 transition-all duration-150 ease-in-out relative rounded-none text-gray-900"
                        for="option-5"
                        itemprop="name"
                     >
                        What are the benefits of Tailwind CSS?
                        <svg
                           className="w-6 h-6 text-gray-600 absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform duration-300 faq-icon"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                     </label>
                     <div className="grid grid-rows-[0fr] transition-all duration-150 ease-in-out peer-checked/option-5:grid-rows-[1fr]" itemscope itemprop="acceptedAnswer">
                        <div className="min-h-[0px] overflow-hidden">
                           <div className="p-2 border-none rounded" itemprop="text">The benefits of Tailwind CSS include rapid prototyping, reusability, and a low learning curve for beginners.</div>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </section>
    </>
  )
}
