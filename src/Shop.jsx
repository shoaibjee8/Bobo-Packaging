import React, { useEffect, useState } from "react";
import Form from './layouts/Form';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import axios from "axios";
import { API_URL } from "./config";
import NProgress from "nprogress"; // Import NProgress
import "nprogress/nprogress.css"; // Import NProgress CSS
import { Link } from "react-router-dom";

export default function Shop() {
  // State to hold categories data
  const [categories, setCategories] = useState([]);

  // Fetch categories and subcategories from the API
  useEffect(() => {
    NProgress.start(); // Start the progress bar

    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/get-shop`);
        if (response.data.success) {
          setCategories(response.data.data);
        }
      } catch (error) {
        console.error('There was an error fetching the categories!', error);
      } finally {
        NProgress.done(); // Stop the progress bar when the request is completed
      }
    };

    fetchCategories();

    // Cleanup NProgress in case the component unmounts
    return () => {
      NProgress.done();
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
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
      }

      // Return the cleanup function
      return () => {
        if ($categorySlider.length) {
          $categorySlider.slick('unslick');
        }
      };
    };

    // Call `initSlickCategory` and assign its cleanup function
    const cleanupSlickCategory = initSlickCategory();

    // Return the cleanup function from `useEffect`
    return () => {
      cleanupSlickCategory();
    };
  }, [categories]);

  return (
    <>
      <section className="bg-[rgb(192,228,158,0.28)] py-2">
        <div className="container mx-auto lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
          <ul className="flex items-center space-x-2 font-barlow font-[500] text-white text-[14px]">
            {/* <!-- Home Icon --> */}
            <li>
              <Link to={"/"} className="hover:text-[#000] text-[#7EBE43] transition-colors duration-300 flex items-center">
                <i className="fa-solid fa-house"></i>
              </Link>
            </li>

            {/* <!-- Separator --> */}
            <li className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </li>

            {/* <!-- Current Page --> */}
            <li>
              <span className="text-[#7EBE43]">Shop</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-[url('/category-images/category-bg.jpg')] bg-center bg-no-repeat bg-cover lg:py-[70px] md:py-[50px] s:py-[40px]">
        <div className="container mx-auto grid lg:grid-cols-2 s:grid-cols-1 lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
          <div className="col">
            <div className="bg-[#000] bg-opacity-[0.5] lg:px-9 lg:py-6 md:p-6 s:p-5 rounded-[10px] lg:w-[500px] md:w-[450px]">
              <h1 className="lg:text-[42px] md:text-[38px] s:text-[30px] font-bold text-white font-cairo leading-[56px] s:leading-[40px]">
                Shop
              </h1>
              <p className="font-barlow font-normal pt-[10px] text-white leading-[30px]">
                Make your concentrates stand out with our concentrate packaging. Available in a multitude of styles and sizes, these packaging solutions offer both functionality and aesthetic appeal at low wholesale prices.
              </p>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </section>

      <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
      <div>
  {categories.map((category, index) => (
    <div className="row py-[15px]" key={index}>
      {/* Display Category Name */}
      <h2 className="lg:text-[40px] md:text-[35px] s:text-[28px] font-bold font-cairo leading-[45px] s:leading-[35px]">
        {category.category_name}
      </h2>
      <p className="font-barlow font-normal py-[18px] leading-[28px]">
        Looking for custom apparel boxes wholesale to present, promote, and protect your apparel items? Our apparel boxes are one of the most cost-effective, eco-friendly, ideally branded, and appealing packaging solutions. We design each apparel box according to products and market standards.
      </p>

      {/* Display Subcategories */}
      <div className="slick-category mt-[10px]">
        {category.sub_categories.map((subCategory, subIndex) => (
          <Link to={`/shop/${subCategory.url}`}>
          <div className="group rounded-[5px]" key={subIndex}>
            <img
              src={`${API_URL}/sub-category/${subCategory.sub_img}`} // Use dynamic image source
              className="rounded-[5px] w-full border-white border-2"
              alt={`${subCategory.name}-image`} // Using the name field for alt text
            />
            <h3 className="font-barlow lg:text-[16px] text-black text-center mt-3 transition-colors duration-300 ease-in-out font-semibold group-hover:text-[#7EBE43]">
              {subCategory.name} {/* Display the subcategory name */}
            </h3>
          </div>
          </Link>
        ))}
      </div>
    </div>
  ))}
</div>
      </section>

      <Form />

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
  );
}
