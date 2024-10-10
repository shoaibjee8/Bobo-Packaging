import React, { useEffect } from 'react';
import Form from './layouts/Form'
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import { Link } from 'react-router-dom';

export default function ApperalCategory() {

  window.scrollTo(0, 0);

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

  // Initialize the `.slick-category` slider
  useEffect(() => {
    const initSlickCategory = () => {
      const $categorySlider = $('.slick-category');
      if ($categorySlider.length) {
        $categorySlider.slick({
          slidesToShow: 6,
          infinite: true,
          slidesToScroll: 6,
          dots: true,
          arrows: false,
          speed: 1000,
          responsive: [
            {
              breakpoint: 999,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2
              }
            }
          ]
        });

        return () => {
          if ($categorySlider.length) {
            $categorySlider.slick('unslick');
          }
        };
      }
    };

    const cleanupSlickCategory = initSlickCategory();

    return () => {
      cleanupSlickCategory();
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
            <span className="text-[#7EBE43]">Current Page</span>
          </li>
        </ul>
      </div>
    </section>

    <section className="bg-[url('category-images/category-bg.jpg')] bg-center bg-no-repeat bg-cover lg:pt-[50px] lg:pb-[130px] md:py-[50px] s:py-[40px] s:pt-[40px] s:pb-[130px]">
      <div className="container mx-auto grid lg:grid-cols-2 s:grid-cols-1 lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <div className="col">
          <div className="bg-[#000] bg-opacity-[0.5] lg:px-9 lg:py-6 md:p-6 s:p-5 rounded-[10px] lg:w-[500px] md:w-[450px]">
            <h1 className="lg:text-[42px] md:text-[38px] s:text-[30px] font-bold text-white font-cairo leading-[56px] s:leading-[40px]">
              Appreal Boxes
            </h1>
            <p className="font-barlow font-normal pt-[10px] text-white leading-[30px]">
              Make your concentrates stand out with our concentrate packaging. Available in a multitude of styles and sizes, these packaging solutions offer both functionality and aesthetic appeal at low wholesale prices.
            </p>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </section>

    <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem] mt-[-130px]" style={{ paddingBottom: '0px' }}>
      <div className="slick-category mb-0">
        <Link to='/appreal-child'>
          <div className="group rounded-[5px]">
            <img src="category-images/cate.jpg" className="rounded-[5px] w-full border-white border-2" alt="category-images" />
            <h3 className="font-barlow lg:text-[16px] text-black text-center mt-3 transition-colors duration-300 ease-in-out font-semibold group-hover:text-[#7EBE43]">
              Apperal
            </h3>
          </div>
        </Link>
         <a href="appreal-child.php">
        <div className="group rounded-[5px]">
          <img src="category-images/cate.jpg" className="rounded-[5px] w-full border-white border-2" alt="category-images" />
          <h3 className="font-barlow lg:text-[16px] text-black text-center mt-3 transition-colors duration-300 ease-in-out font-semibold group-hover:text-[#7EBE43]">
            Apperal
          </h3>
        </div>
      </a>
        <div className="group rounded-[5px]">
          <img src="category-images/cate.jpg" className="rounded-[5px] w-full border-white border-2" alt="category-images" />
          <h3 className="font-barlow lg:text-[16px] text-black text-center mt-3 transition-colors duration-300 ease-in-out font-semibold group-hover:text-[#7EBE43]">
            Apperal
          </h3>
        </div>
        <div className="group rounded-[5px]">
          <img src="category-images/cate.jpg" className="rounded-[5px] w-full border-white border-2" alt="category-images" />
          <h3 className="font-barlow lg:text-[16px] text-black text-center mt-3 transition-colors duration-300 ease-in-out font-semibold group-hover:text-[#7EBE43]">
            Apperal
          </h3>
        </div>
        <div className="group rounded-[5px]">
          <img src="category-images/cate.jpg" className="rounded-[5px] w-full border-white border-2" alt="category-images" />
          <h3 className="font-barlow lg:text-[16px] text-black text-center mt-3 transition-colors duration-300 ease-in-out font-semibold group-hover:text-[#7EBE43]">
            Apperal
          </h3>
        </div>
        <div className="group rounded-[5px]">
          <img src="category-images/cate.jpg" className="rounded-[5px] w-full border-white border-2" alt="category-images" />
          <h3 className="font-barlow lg:text-[16px] text-black text-center mt-3 transition-colors duration-300 ease-in-out font-semibold group-hover:text-[#7EBE43]">
            Apperal
          </h3>
        </div>
        <div className="group rounded-[5px]">
          <img src="category-images/cate.jpg" className="rounded-[5px] w-full border-white border-2" alt="category-images" />
          <h3 className="font-barlow lg:text-[16px] text-black text-center mt-3 transition-colors duration-300 ease-in-out font-semibold group-hover:text-[#7EBE43]">
            Apperal
          </h3>
        </div>
        <div className="group rounded-[5px]">
          <img src="category-images/cate.jpg" className="rounded-[5px] w-full border-white border-2" alt="category-images" />
          <h3 className="font-barlow lg:text-[16px] text-black text-center mt-3 transition-colors duration-300 ease-in-out font-semibold group-hover:text-[#7EBE43]">
            Apperal
          </h3>
        </div>
        <div className="group rounded-[5px]">
          <img src="category-images/cate.jpg" className="rounded-[5px] w-full border-white border-2" alt="category-images" />
          <h3 className="font-barlow lg:text-[16px] text-black text-center mt-3 transition-colors duration-300 ease-in-out font-semibold group-hover:text-[#7EBE43]">
            Apperal
          </h3>
        </div>
        <div className="group rounded-[5px]">
          <img src="category-images/cate.jpg" className="rounded-[5px] w-full border-white border-2" alt="category-images" />
          <h3 className="font-barlow lg:text-[16px] text-black text-center mt-3 transition-colors duration-300 ease-in-out font-semibold group-hover:text-[#7EBE43]">
            Apperal
          </h3>
        </div>
        <div className="group rounded-[5px]">
          <img src="category-images/cate.jpg" className="rounded-[5px] w-full border-white border-2" alt="category-images" />
          <h3 className="font-barlow lg:text-[16px] text-black text-center mt-3 transition-colors duration-300 ease-in-out font-semibold group-hover:text-[#7EBE43]">
            Apperal
          </h3>
        </div>
      </div>
    </section>

    <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]" style={{ paddingBottom: '20px' }}>
      <div className="row">
        <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">Best Selling <span className="text-mainColor">Products</span></h2>
        <p className="font-barlow font-normal py-[18px] leading-[28px]">
          Looking for custom apparel boxes wholesale to present, promote, and protect your apparel items? Our apparel boxes are one of the most cost-effective, eco-friendly, ideally branded, and appealing packaging solutions. We design each
          apparel box according to products and market standards.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 s:grid-cols-1 gap-5">
        <div className="col">
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

        <div className="col">
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
        <div className="col">
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
        <div className="col">
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
        <div className="col">
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
        <div className="col">
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
        <div className="col">
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
        <div className="col">
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
      </div>
      <div className="grid grid-cols-3 mt-8">
        <div className="col"></div>
        <div className="col">
          <div className="flex items-center justify-center space-x-4">
            {/* <!-- Previous Button --> */}
            <button
              className="relative bg-transparent text-mainColor font-barlow rounded-[5px] border border-mainColor overflow-hidden flex items-center justify-center group transition-all duration-300 ease-in-out min-w-[50px] group-hover:min-w-[50px]"
            >
              {/* <!-- Background animation on hover --> */}
              <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
              {/* <!-- Button Icon --> */}
              <span className="relative z-10 flex items-center px-[22px] py-[10px]">
                <i className="fa-solid fa-arrow-left-long transition-colors duration-300 ease-in-out group-hover:text-white"></i>
              </span>
            </button>

            {/* <!-- Next Button --> */}
            <button
              className="relative bg-transparent text-mainColor font-barlow rounded-[5px] border border-mainColor overflow-hidden flex items-center justify-center group transition-all duration-300 ease-in-out min-w-[50px] group-hover:min-w-[50px]"
            >
              {/* <!-- Background animation on hover --> */}
              <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
              {/* <!-- Button Icon --> */}
              <span className="relative z-10 flex items-center px-[22px] py-[10px]">
                <i className="fa-solid fa-arrow-right-long transition-colors duration-300 ease-in-out group-hover:text-white"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </section>

    <section className="bg-[url('home-images/get-in-touch.jpg')] lg:bg-center md:bg-center s:bg-left bg-no-repeat bg-cover lg:h-[480px] md:h-[480px] s:h-[450px] flex items-center">
  <div className="container flex items-center gap-7 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
    <div className="col w-[50%] md:w-[50%] s:w-[100%]">
      <p className="font-cairo pb-[5px] text-black lg:text-[18px] md:text-[22px] leading-[30px]">
        The One-Stop Shop For All Your Crop
      </p>
      <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[50px] s:leading-[35px]">
        Elevate <span className="text-mainColor">Your Brand</span> With Custom Packaging
      </h2>
      <p className="font-barlow font-normal py-[18px] leading-[28px]">
        Looking for custom apparel boxes wholesale to present, promote, and protect your apparel items? Our apparel boxes are one of the most cost-effective, eco-friendly, ideally branded, and appealing packaging solutions.
      </p>
      <button className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group">
        <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
        <span className="relative z-10">Explore More Packaging</span>
      </button>
    </div>
    <div className="col w-[50%] md:w-[50%] s:w-[100%] s:hidden"></div>
  </div>
</section>

    <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]" style={{ paddingBottom: '20px' }}>
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
                <svg className="w-6 h-6 text-gray-600 absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform duration-300 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="w-6 h-6 text-gray-600 absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform duration-300 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="w-6 h-6 text-gray-600 absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform duration-300 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="w-6 h-6 text-gray-600 absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform duration-300 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="w-6 h-6 text-gray-600 absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform duration-300 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
