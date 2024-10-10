import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import NProgress styles

export default function SingleBlog() {
  const [article, setArticle] = useState({}); // Initialize as an empty object
  const uselocation = useLocation();
  const currentId = uselocation.pathname.split('/')[2];
  const [loading, setLoading] = useState(false); // Loading state to manage progress

  useEffect(() => {

    window.scrollTo(0, 0);
    // Start the progress bar and loading state
    setLoading(true);
    NProgress.start();

    // Use axios to fetch the blog post
    axios.get(`https://freetestapi.com/api/v1/posts/${currentId}`)
      .then((response) => {
        console.log(response.data);
        setArticle(response.data);
        setLoading(false); // Stop loading
        NProgress.done();  // Complete the progress bar
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading on error
        NProgress.done();  // Complete the progress bar
      });

    // Cleanup function to ensure NProgress is stopped if the component unmounts
    return () => {
      NProgress.done();
    };
  }, [currentId]);

  // Initialize the `.slick-related-product` slider
  useEffect(() => {
    const initSlickProduct = () => {
      const $productSlider = $('.slick-related-product');
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
    {loading && <p>Loading...</p>} {/* Show loading message or spinner */}

    <section class="bg-[rgb(192,228,158,0.28)] py-2">
      <div class="container mx-auto lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <ul class="flex items-center space-x-2 font-barlow font-[500] text-white text-[14px]">
          {/* <!-- Home Icon --> */}
          <li>
            <a href="#" class="hover:text-[#000] text-[#7EBE43] transition-colors duration-300 flex items-center">
              <i class="fa-solid fa-house"></i>
            </a>
          </li>

          {/* <!-- Separator --> */}
          <li class="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </li>

          {/* <!-- Current Page --> */}
          <li>
            <a href="#" class="hover:text-[#000] text-[#7EBE43] transition-colors duration-300 flex items-center">
              <span>Current Page</span>
            </a>
          </li>

          {/* <!-- Separator --> */}
          <li class="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </li>

          {/* <!-- Current Page --> */}
          <li>
            <span class="text-[#7EBE43]">Current Page</span>
          </li>
        </ul>
      </div>
    </section>


<section class="bg-[#f5f5f5] lg:py-[90px] md:py-[50px] s:py-[40px]">
      <div class="container mx-auto lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
            <h1 class="lg:text-[38px] md:text-[34px] s:text-[26px] font-semibold font-cairo leading-[50px] s:leading-[36px]">
            {article.title}
            </h1>
      </div>
    </section>

    <section class="lg:py-[50px] md:py-[50px] s:py-[40px]">
      <div class="container flex gap-5 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <div class="col lg:w-[65%] md:w-[60%] s:w-[100%]">
          <div class="long-content">
            <img src="blog-images/b-img.jpg" class="mb-5" alt="image"/>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p>The evolution of packaging trends reflects the growing awareness of environmental concerns, consumer preferences, and technological advancements. Today's consumers demand sustainable, functional, and aesthetically pleasing packaging that aligns with their values. Businesses optimize packaging to reduce waste, enhance supply chain efficiency, lower costs, and differentiate themselves in a crowded marketplace. Packaging optimization has become a strategic imperative in this era of heightened competition and eco-conscious consumers, shaping the success of brands and their products.</p>
             <p>The evolution of packaging trends reflects the growing awareness of environmental concerns, consumer preferences, and technological advancements. Today's consumers demand sustainable, functional, and aesthetically pleasing packaging that aligns with their values. Businesses optimize packaging to reduce waste, enhance supply chain efficiency, lower costs, and differentiate themselves in a crowded marketplace. Packaging optimization has become a strategic imperative in this era of heightened competition and eco-conscious consumers, shaping the success of brands and their products.</p>
              <p>The evolution of packaging trends reflects the growing awareness of environmental concerns, consumer preferences, and technological advancements. Today's consumers demand sustainable, functional, and aesthetically pleasing packaging that aligns with their values. Businesses optimize packaging to reduce waste, enhance supply chain efficiency, lower costs, and differentiate themselves in a crowded marketplace. Packaging optimization has become a strategic imperative in this era of heightened competition and eco-conscious consumers, shaping the success of brands and their products.</p>
          </div>
        </div>
        <div class="col lg:w-[35%] md:w-[50%] s:w-[100%]">
          <div class="side-bar">
            <h6 class="font-cairo font-semibold text-[25px] ml-2 mb-2">Categories</h6>
          <ul class="font-barlow flex flex-wrap items-center text-[14px]">
            <li class="bg-[#e3ebf5] px-[20px] py-[5px] hover:bg-mainColor hover:text-white transition-all duration-150 m-2">Business</li>
            <li class="bg-[#e3ebf5] px-[20px] py-[5px] hover:bg-mainColor hover:text-white transition-all duration-150 m-2">Business</li>
            <li class="bg-[#e3ebf5] px-[20px] py-[5px] hover:bg-mainColor hover:text-white transition-all duration-150 m-2">Business</li>
            <li class="bg-[#e3ebf5] px-[20px] py-[5px] hover:bg-mainColor hover:text-white transition-all duration-150 m-2">Business</li>
            <li class="bg-[#e3ebf5] px-[20px] py-[5px] hover:bg-mainColor hover:text-white transition-all duration-150 m-2">Business</li>
            <li class="bg-[#e3ebf5] px-[20px] py-[5px] hover:bg-mainColor hover:text-white transition-all duration-150 m-2">Business</li>
          </ul>
          </div>
        </div>
      </div>
    </section>

<section class="bg-[#f5f5f5]">
    <div class="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem] ">
      <div class="row">
        <h2 class="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">Our Recent <span class="text-mainColor">Articles</span></h2>
        <p class="font-barlow font-normal py-[18px] leading-[28px]">
          Looking for custom apparel boxes wholesale to present, promote, and protect your apparel items? Our apparel boxes are one of the most cost-effective, eco-friendly, ideally branded, and appealing packaging solutions. We design each
          apparel box according to products and market standards.
        </p>
      </div>

      <div class="slick-related-product">
        <div class="group">
                <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images"/>
                <div class="" >
                  <div class="flex items-center text-[14px] mt-3 mb-2">
                  <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                  <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                </div>
                <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....</h3>
                <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a 
                    billion-dollar industry by 2024, has become a beacon of 
                    opportunity for aspiring business owners.</p>
                </div>
              </div>
              <div class="group">
                <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images"/>
                <div class="" >
                  <div class="flex items-center text-[14px] mt-3 mb-2">
                  <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                  <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                </div>
                <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....</h3>
                <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a 
                    billion-dollar industry by 2024, has become a beacon of 
                    opportunity for aspiring business owners.</p>
                </div>
              </div>
              <div class="group">
                <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images"/>
                <div class="" >
                  <div class="flex items-center text-[14px] mt-3 mb-2">
                  <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                  <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                </div>
                <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....</h3>
                <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a 
                    billion-dollar industry by 2024, has become a beacon of 
                    opportunity for aspiring business owners.</p>
                </div>
              </div>
              <div class="group">
                <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images"/>
                <div class="" >
                  <div class="flex items-center text-[14px] mt-3 mb-2">
                  <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                  <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                </div>
                <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....</h3>
                <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a 
                    billion-dollar industry by 2024, has become a beacon of 
                    opportunity for aspiring business owners.</p>
                </div>
              </div>
              <div class="group">
                <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images"/>
                <div class="" >
                  <div class="flex items-center text-[14px] mt-3 mb-2">
                  <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                  <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                </div>
                <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....</h3>
                <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a 
                    billion-dollar industry by 2024, has become a beacon of 
                    opportunity for aspiring business owners.</p>
                </div>
              </div>
              <div class="group">
                <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images"/>
                <div class="" >
                  <div class="flex items-center text-[14px] mt-3 mb-2">
                  <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                  <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                </div>
                <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....</h3>
                <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a 
                    billion-dollar industry by 2024, has become a beacon of 
                    opportunity for aspiring business owners.</p>
                </div>
              </div>
              <div class="group">
                <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images"/>
                <div class="" >
                  <div class="flex items-center text-[14px] mt-3 mb-2">
                  <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                  <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                </div>
                <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....</h3>
                <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a 
                    billion-dollar industry by 2024, has become a beacon of 
                    opportunity for aspiring business owners.</p>
                </div>
              </div>
              <div class="group">
                <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images"/>
                <div class="" >
                  <div class="flex items-center text-[14px] mt-3 mb-2">
                  <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                  <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                </div>
                <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....</h3>
                <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a 
                    billion-dollar industry by 2024, has become a beacon of 
                    opportunity for aspiring business owners.</p>
                </div>
              </div>
      </div>
    </div>
    </section>
    </>
  )
}
