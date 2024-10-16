import React, { useState, useEffect } from 'react';
import Form from './layouts/Form'
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ApperalChild() {
  const [finalCategory, setFinalCategory] = useState([]);
  const [finalProducts, setFinalProducts] = useState([]);
  const [catName, setCatName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Default products per page

  const getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalCategory(finalRes);
      });
  };

  const getProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        setFinalProducts(finalRes.products);
      });
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(() => {
    if (catName !== "") {
      axios.get(`https://dummyjson.com/products/category/${catName}`)
        .then((proRes) => proRes.data)
        .then((finalRes) => {
          setFinalProducts(finalRes.products);
          setCurrentPage(1); // Reset to first page when category changes
        });
    }
  }, [catName]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = finalProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Render the categories
  const finalCat = finalCategory.map((categories, index) => (
    <ChildCategory key={index} categorydataprops={categories} setCatName={setCatName} />
  ));

  // Render the current page products
  const finalPro = currentProducts.map((product, index) => (
    <ChildProducts key={index} productdataprops={product} />
  ));

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers for pagination controls
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(finalProducts.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }
    
    // This is A Model js

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      const body = document.getElementsByTagName('BODY')[0];
      const modal = document.getElementById('modal');
      
      const openModal = () => {
        if (!isModalOpen) {
          modal.classList.remove('invisible', 'opacity-0'); // Show modal (fade-in)
          modal.classList.add('flex', 'opacity-100'); // Add fade-in effect
          body.style.overflow = 'hidden'; // Disable scroll on body
          setIsModalOpen(true);
        }
      };
  
      const closeModal = () => {
        if (isModalOpen) {
          modal.classList.remove('opacity-100'); // Start fade-out
          modal.classList.add('opacity-0'); // Fade-out effect
          setTimeout(() => {
            modal.classList.add('invisible'); // Hide modal after fade-out
            modal.classList.remove('flex');
            body.style.overflow = 'auto'; // Enable scroll on body
            setIsModalOpen(false);
          }, 300); // Delay matches transition duration
        }
      };
  
      const handleOutsideClick = (event) => {
        if (event.target === modal && isModalOpen) {
          closeModal();
        }
      };
  
      // Add event listeners for modal buttons and close buttons
      const modalButtons = document.getElementsByClassName('modal-button');
      Array.from(modalButtons).forEach((modalBtn) => {
        modalBtn.addEventListener('click', openModal);
      });
  
      const modalClose = document.getElementsByClassName('modal-close');
      Array.from(modalClose).forEach((closeBtn) => {
        closeBtn.addEventListener('click', closeModal);
      });
  
      // Close modal when clicking outside the modal
      window.addEventListener('click', handleOutsideClick);
  
      // Cleanup event listeners on component unmount
      return () => {
        Array.from(modalButtons).forEach((modalBtn) => {
          modalBtn.removeEventListener('click', openModal);
        });
        Array.from(modalClose).forEach((closeBtn) => {
          closeBtn.removeEventListener('click', closeModal);
        });
        window.removeEventListener('click', handleOutsideClick);
      };
    }, [isModalOpen]);

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

    <div id="modal" className="invisible opacity-0 transition-opacity duration-300 ease-in-out items-center justify-center h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-60 z-20">
      {/* <!-- Modal Dialog --> */}
      <div className="bg-white max-w-xl w-full rounded-md">
        {/* <!-- Modal Content --> */}
        <div className="py-2 px-4 flex items-center justify-between border-b border-b-gray-300">
          {/* <!-- Modal Header --> */}
          <h3 className="font-bold text-xl font-cairo">Customized Product</h3>
          <span className="modal-close cursor-pointer border border-mainColor rounded-full px-2 text-[18px] bg-mainColor text-white font-bold">×</span>
          {/* <!-- Close Modal --> */}
        </div>
        <div className="p-4">
          {/* <!-- Modal Body --> */}
          <form className="font-barlow">
            <input type="text" id="name" name="name" placeholder="Name" className="w-full h-9 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black mb-3" />

            <div className="flex justify-between items-center mb-3">
              <h5 className="font-barlow text-[16px] font-semibold">Customer Type:</h5>
              <div className="flex items-center">
                <div className="flex items-center mr-4 font-barlow text-[14px]">
                  <input id="radio1" type="radio" name="radio" className="hidden" checked />
                  <label for="radio1" className="flex items-center cursor-pointer">
                    <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                    New Customer
                  </label>
                </div>

                <div className="flex items-center mr-4 font-barlow text-[14px]">
                  <input id="radio2" type="radio" name="radio" className="hidden" />
                  <label for="radio2" className="flex items-center cursor-pointer">
                    <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                    Returning Customer
                  </label>
                </div>
              </div>
            </div>

            <input
              type="text-"
              id="name"
              name="name"
              placeholder="Business Name (Optional)"
              className="w-full h-9 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black mb-3"
            />
            <div className="mb-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <select id="options" name="options" className="block w-full border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black p-2">
                  <option value="">Type Of Business</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  id="b_city"
                  name="b_city"
                  placeholder="Business City"
                  className="w-full h-9 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input type="email" id="email" name="email" placeholder="Email" className="w-full h-9 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black" />
              </div>

              <div>
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" className="w-full h-9 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black" />
              </div>
            </div>

            <div className="flex justify-between items-center mb-3">
              <h5 className="font-barlow text-[16px] font-semibold">Desired Quantity:</h5>
              <div className="flex items-center">
                <div className="flex items-center mr-4 font-barlow text-[14px]">
                  <input id="radio11" type="radio" name="radio" className="hidden" checked />
                  <label for="radio11" className="flex items-center cursor-pointer">
                    <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                    1000
                  </label>
                </div>

                <div className="flex items-center mr-4 font-barlow text-[14px]">
                  <input id="radio22" type="radio" name="radio" className="hidden" />
                  <label for="radio22" className="flex items-center cursor-pointer">
                    <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                    1500
                  </label>
                </div>
                <div className="flex items-center mr-4 font-barlow text-[14px]">
                  <input id="radio33" type="radio" name="radio" className="hidden" />
                  <label for="radio33" className="flex items-center cursor-pointer">
                    <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                    2000
                  </label>
                </div>
                <div className="flex items-center mr-4 font-barlow text-[14px]">
                  <input id="radio44" type="radio" name="radio" className="hidden" />
                  <label for="radio44" className="flex items-center cursor-pointer">
                    <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                    2500
                  </label>
                </div>
              </div>
            </div>

            <div className="inline-block mb-3">
              <h5 className="font-barlow text-[16px] font-semibold">Artwork and Design Services :</h5>
            </div>
            <div className="flex items-center mb-3">
              <div className="flex items-center mr-4 font-barlow text-[14px]">
                <input id="radio111" type="radio" name="radio" className="hidden" checked />
                <label for="radio111" className="flex items-center cursor-pointer">
                  <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                  Artwork will be provided.
                </label>
              </div>

              <div className="flex items-center mr-4 font-barlow text-[14px]">
                <input id="radio222" type="radio" name="radio" className="hidden" />
                <label for="radio222" className="flex items-center cursor-pointer">
                  <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                  I need design services.
                </label>
              </div>
            </div>

            <textarea
              id="message"
              name="message"
              rows="2"
              placeholder="Message..."
              className="w-full px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black mb-3"
            ></textarea>

            <button className="w-full relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group">
              <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10">Get Inquiry</span>
            </button>
          </form>
        </div>
      </div>
    </div>


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

    <section className="bg-[url('category-images/category-bg.jpg')] bg-center bg-no-repeat bg-cover lg:py-[70px] md:py-[50px] s:py-[40px]">
      <div className="container mx-auto grid lg:grid-cols-2 s:grid-cols-1 lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <div className="col">
          <div className="bg-[#000] bg-opacity-[0.5] lg:px-9 lg:py-6 md:p-6 s:p-5 rounded-[10px] lg:w-[500px] md:w-[450px]">
            <h1 className="lg:text-[42px] md:text-[38px] s:text-[30px] font-bold text-white font-cairo leading-[56px] s:leading-[40px]">
              Mylar Bags
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
      <div className="row">
        <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">Best Selling <span className="text-mainColor">Products</span></h2>
        <p className="font-barlow font-normal py-[18px] leading-[28px]">
          Looking for custom apparel boxes wholesale to present, promote, and protect your apparel items? Our apparel boxes are one of the most cost-effective, eco-friendly, ideally branded, and appealing packaging solutions. We design each
          apparel box according to products and market standards.
        </p>
      </div>

      <div className="container flex gap-5 s:flex-col lg:px-[0rem] s:px-[0rem] md:px-[2rem] sl:px-[2rem] mt-5">
        <div className="col w-[20%] s:w-[100%]">
          <div className="side-bar border border-[#666666] rounded-[5px] p-5 max-h-[500px] overflow-y-auto">
            <h3 className="text-center font-semibold font-barlow text-[18px] mb-5">Shop by Industries</h3>

            <ul className="font-barlow space-y-4 pt-5 border-t-[2px] border-[#666666]">
             
                {finalCat}
              
            </ul>
          </div>
        </div>
        <div className="col w-[80%] s:w-[100%]">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 s:grid-cols-1 gap-5">

              {
                finalProducts.length >= 1 ?
                
                finalPro 
                :
                "No Product Found"

              }

          </div>
          {/* Pagination controls */}
      <nav>
        <ul className="pagination flex justify-center mt-5">
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
              <button onClick={() => paginate(number)} className="page-link px-4 py-2 bg-gray-200 mx-1 rounded hover:bg-mainColor">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
        </div>
      </div>
    </section>

    <section className="bg-[url('home-images/get-in-touch.jpg')] lg:bg-center md:bg-center s:bg-left bg-no-repeat bg-cover lg:h-[480px] md:h-[480px] s:h-[450px] flex items-center">
      <div className="container flex items-center gap-7 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <div className="col w-[50%] md:w-[50%] s:w-[100%]">
          <p className="font-cairo pb-[5px] text-black lg:text-[18px] md:text-[22px] leading-[30px]">
            The One-Stop Shop For All Your Crop
          </p>
          <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[50px] s:leading-[35px]">Elevate <span className="text-mainColor">Your Brand</span> With Custom Packaging</h2>
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
              <p>L=3.4cm</p>
              <p>W=3.4cm</p>
              <p>H=3.4cm</p>
            </div>
            <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
              <p><span className="text-mainColor">20.00$/</span>per Unit</p>
              <p><span className="text-mainColor">20.00$/</span>per Case</p>
            </div>
            <button
              className="modal-button relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3"
            >
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
            <button
              className="modal-button relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3"
            >
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
            <button
              className="modal-button relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3"
            >
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
            <button
              className="modal-button relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3"
            >
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
            <button
              className="modal-button relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3"
            >
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
            <button
              className="modal-button relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3"
            >
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


function ChildCategory({categorydataprops,setcatName}){
  return(
    <a onClick={()=>setcatName(categorydataprops.name)} className="block hover:text-mainColor transition-colors duration-300 cursor-pointer">
      <div className="flex">
        <img src="category-images/hoodie-icon.svg" className="mr-[15px]" alt="mail" />
        <p className="font-barlow text-[15px]">{categorydataprops.name} ( 54 )</p>
      </div>
    </a>
  )
}


function ChildProducts({productdataprops,index}){
  return(
    <div className="col" key={index}>
        <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)]">
          <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
          <Link to={`/product/${productdataprops.id}`}>
              <img src={productdataprops.thumbnail} className="w-full transition-transform duration-300 ease-in-out hover:scale-110" alt="product" />
          </Link>
          </div>
          <div className="product-des px-[14px] py-[18px]">
            <div className="flex justify-between pb-[10px] font-barlow">
              <Link to='/single-product'>
                <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo text-black">{productdataprops.title}</h6>
              </Link>
              <p><span className="text-mainColor">{productdataprops.stock}/</span>Qty</p>
            </div>
            <div className="flex justify-between pb-[10px] font-barlow">
              <p><span className="text-mainColor">{productdataprops.price}/</span>per Unit</p>
              <p><span className="text-mainColor">20.00$/</span>per Case</p>
            </div>
            <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
              <p>L=3.4cm</p>
              <p>W={productdataprops.weight}</p>
              <p>H=3.4cm</p>
            </div>

            <div className="flex justify-between items-center mt-3">
              <Link to='/single-product'>
                <button
                  className="relative bg-transparent border border-mainColor text-mainColor px-[16px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto"
                >
                  <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                  <span className="relative z-10 group-hover:text-white">Add to cart</span>
                </button>
                </Link>
              <span className="font-barlow">Or</span>
              <a>
                <button
                  className="modal-button relative bg-transparent border border-mainColor text-mainColor px-[16px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto"
                >
                  <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                  <span className="relative z-10 group-hover:text-white">Customized</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
