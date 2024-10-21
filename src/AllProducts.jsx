import React, { useState, useEffect } from "react";
import Form from "./layouts/Form";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { API_URL } from "./config";
import Model from "./layouts/Model";

export default function AllProducts({ setProductId }) {

  
  // State for categories, products, selected category, and loading
let [finalCategory, setFinalCategory] = useState([]);
let [finalProducts, setFinalProducts] = useState([]);
let [subCategory, setsubCategory] = useState([]);
let [catName, setCatName] = useState(''); // Initially empty, will be set dynamically
let [loading, setLoading] = useState(true);

// Fetch all categories
let getCategory = () => {
  NProgress.start();
  axios
    .get(`${API_URL}/api/get-subcategories`)
    .then((res) => res.data)
    .then((finalRes) => {
      setFinalCategory(finalRes);

      // Determine the category from the current page URL
      const currentPath = window.location.pathname.split('/').pop();
      const matchedCategory = finalRes.find((cat) => cat.url === currentPath);
      const defaultCategory = matchedCategory ? matchedCategory.url : finalRes[0]?.url || 'subcat2';

      setCatName(defaultCategory);
      NProgress.done();
      setLoading(false);
    })
    .catch((error) => {
      NProgress.done();
      console.error("Error fetching categories", error);
    });
};

let getProductsByCategory = (categoryUrl) => {
  axios
    .get(`${API_URL}/api/get-subcategories/${categoryUrl}`)
    .then((proRes) => proRes.data)
    .then((finalRes) => {
      setsubCategory(finalRes.data);
      console.log(finalRes.data);
      setFinalProducts(finalRes.data.products);
    })
    .catch((error) => {
      console.error("Error fetching products by category", error);
    });
};

// Fetch categories and products on mount
useEffect(() => {
  getCategory(); // Fetch categories and determine category based on URL
}, []);

// Fetch products when category name changes
useEffect(() => {
  if (catName !== '') {
    getProductsByCategory(catName); // Fetch products after category is set
  }
}, [catName]);

   // Handle adding to cart
   const handleAddToCart = (id) => {
    setProductId({ id, currentPrice }); // Pass both product ID and price
    toast.success("Product Added Successfully!");
    // Here, you can also add the product with its ID and price to the cart
  };

  // MOdel

const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

// Function to open the modal
const openModal = () => {
  setIsModalOpen(true);
};

// Function to close the modal
const closeModal = () => {
  setIsModalOpen(false);
};


// Map categories and products
let finalCat = finalCategory.map((category, index) => (
  <ChildCategory
    key={index}
    categorydataprops={category}
    setcatName={setCatName}
    activeCategory={catName} // Pass active category to ChildCategory
  />
));

let finalPro = finalProducts.map((product, index) => (
  <ChildProducts key={index} productdataprops={product} handleAddToCart={handleAddToCart} openModal={openModal}/>
));




  const [proData, setProData] = useState([]); // Start with an empty array
  const [proError, proSetError] = useState(false); // State to handle errors
  const [currentPrice, setCurrentPrice] = useState(''); // State for current price

  
  // Fetch products from the API
  useEffect(() => {
    axios
      .get(`${API_URL}/api/get-products`)
      .then((response) => {
        // Sort the products by created_at date in descending order
        const sortedProducts = response.data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
  
        // Slice the first 8 products
        const latestProducts = sortedProducts.slice(0, 8);
        setProData(latestProducts); // Set the latest products data

         // Check if the first product has a prices array and update currentPrice
         if (sortedProducts.length > 0 && sortedProducts[0].prices) {
          const pricesArray = JSON.parse(sortedProducts[0].prices); // Parse the prices of the first product
          if (pricesArray.length > 0) {
            setCurrentPrice(pricesArray[0]); // Set currentPrice to the first price
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching product data", error);
        proSetError(true); // Handle error
      });
  }, []);
  

 


  useEffect(() => {
    const initSlickProduct = () => {
      const $productSlider = $(".slick-product2");
  
      if ($productSlider.length && proData.length > 0) {
        // Initialize slick slider
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
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
    };
  
    const $productSlider = $(".slick-product2");
  
    // Initialize the slider
    initSlickProduct();
  
    // Cleanup function
    return () => {
      if ($productSlider.length && $productSlider.hasClass('slick-initialized')) {
        $productSlider.slick("unslick");
      }
    };
  }, [proData]); // Run this effect when `proData` is updated
  


  return (
    <>
      {/* Optionally, you can display a loading indicator if needed */}
      {loading && <p className="hidden">Loading...</p>}

      <Toaster />


      <Model isOpen={isModalOpen} closeModal={closeModal} /> {/* Pass isOpen and closeModal to Model */}

      <section className="bg-[rgb(192,228,158,0.28)] py-2">
        <div className="container mx-auto lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
          <ul className="flex items-center space-x-2 font-barlow font-[500] text-white text-[14px]">
            {/* <!-- Home Icon --> */}
            <li>
              <a
                href="#"
                className="hover:text-[#000] text-[#7EBE43] transition-colors duration-300 flex items-center"
              >
                <i className="fa-solid fa-house"></i>
              </a>
            </li>

            {/* <!-- Separator --> */}
            <li className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>

            {/* <!-- Current Page --> */}
            <li>
              <span className="text-[#7EBE43]">All Products</span>
            </li>
          </ul>
        </div>
      </section>

      <section
            style={{
              backgroundImage: `url(${API_URL}/sub-category/${subCategory.banner})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="lg:pt-[50px] lg:pb-[130px] md:py-[50px] s:py-[40px] s:pt-[40px] s:pb-[130px]"
          >
        <div className="container mx-auto grid lg:grid-cols-2 s:grid-cols-1 lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
          <div className="col">
            <div className="bg-[#000] bg-opacity-[0.5] lg:px-9 lg:py-6 md:p-6 s:p-5 rounded-[10px] lg:w-[500px] md:w-[450px]">
              <h1 className="lg:text-[42px] md:text-[38px] s:text-[30px] font-bold text-white font-cairo leading-[56px] s:leading-[40px]">
              All Products
              </h1>
              <p className="font-barlow font-normal pt-[10px] text-white leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </section>

      <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <div className="row">
          <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">
          Best Selling Products
          </h2>
          <p className="font-barlow font-normal py-[18px] leading-[28px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
        </div>

        <div className="container flex gap-5 s:flex-col lg:px-[0rem] s:px-[0rem] md:px-[2rem] sl:px-[2rem] mt-5">
          <div className="col w-[20%] s:w-[100%]">
            <div className="side-bar border border-[#666666] rounded-[5px] p-5 max-h-[500px] overflow-y-auto">
              <h3 className="text-center font-semibold font-barlow text-[18px] mb-5">
                Shop by Industries
              </h3>

              <ul className="font-barlow space-y-4 pt-5 border-t-[2px] border-[#666666]">
                {finalCat}
              </ul>
            </div>
          </div>
          <div className="col w-[80%] s:w-[100%]">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 s:grid-cols-1 gap-5">
              {finalProducts.length >= 1 ? finalPro : "No Product Found"}
            </div>
          </div>
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

function ChildCategory({ categorydataprops, setcatName, activeCategory }) {
  return (
    <a
      onClick={() => setcatName(categorydataprops.url)}
      className={`block hover:text-mainColor transition-colors duration-300 cursor-pointer ${activeCategory === categorydataprops.url ? 'text-mainColor font-semibold' : ''}`} // Apply active class
    >
      <div className="flex">
        <img
          src={`${API_URL}/sub-category/${categorydataprops.icon}`}
          className="mr-[15px]"
          alt={categorydataprops.icon_alt}
        />
        <p className="font-barlow text-[15px]">
          {categorydataprops.name}
        </p>
      </div>
    </a>
  );
}

function ChildProducts({ productdataprops, index, handleAddToCart , openModal}) {
  return (
    <div className="col" key={index}>
      <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)] group">
          <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
            <Link to={`/product/${productdataprops.name}`}>
              <img
                src={`${API_URL}/product-images/${productdataprops.img1}`} // Use dynamic image source
                className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110" // Zoom effect on hover
                alt={productdataprops.img1_alt || "product"} // Use dynamic alt text
              />
            </Link>
          </div>
          <div className="product-des px-[14px] py-[18px]">
            <div className="flex justify-between pb-[10px] font-barlow">
              <Link to={`/product/${productdataprops.name}`}>
                <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo text-black">
                  {productdataprops.name}
                </h6>
              </Link>
              <p>
                <span className="text-mainColor">{productdataprops.quantity}</span>/Qty
              </p>
            </div>
            <div className="flex justify-between pb-[10px] font-barlow">
              <p>
                <span className="text-mainColor">{productdataprops.perUnit}</span> /per Unit
              </p>
              <p>
                <span className="text-mainColor">{productdataprops.perCase}</span> /per Case
              </p>
            </div>
            <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
              <p>L={productdataprops.length}cm</p>
              <p>W={productdataprops.weight}cm</p>
              <p>H={productdataprops.height}cm</p>
            </div>
            <div className="mt-3">
              {productdataprops.customizebtn === 0 ? (
                <button
                  onClick={() => handleAddToCart(productdataprops.id)}
                  className="mx-auto relative bg-transparent border border-mainColor text-mainColor px-[16px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block"
                >
                  <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                  <span className="relative z-10 group-hover:text-white">
                    Add to cart
                  </span>
                </button>
              ) : (
                <button
                  className="mx-auto relative bg-transparent border border-mainColor text-mainColor px-[16px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block"
                  onClick={openModal} // Open modal on click
                >
                  <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                  <span className="relative z-10 group-hover:text-white">
                    Customized
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

    </div>
  );
}
