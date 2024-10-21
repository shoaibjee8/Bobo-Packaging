import React, { useEffect, useState } from "react";
import Form from "./layouts/Form";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import { Link } from "react-router-dom";
import axios from "axios";
import NProgress from "nprogress"; // Import NProgress
import "nprogress/nprogress.css"; // Import NProgress CSS
import { API_URL } from "./config";
import toast, { Toaster } from "react-hot-toast";
import Model from "./layouts/Model";


export default function Home({ setProductId  }) {

  const [data, setData] = useState(null);
  const [error, setError] = useState(false); // State to handle errors

  // Fetch home page data
  useEffect(() => {
    NProgress.start(); // Start the progress bar

    axios
      .get(`${API_URL}/api/get-home-page`)
      .then((response) => {
        setData(response.data); // Set the response data

        // Set currentPrice to the first element of prices array if available
        const pricesArray = JSON.parse(response.data.prices || "[]"); // Parse prices
        if (pricesArray.length > 0) {
          setCurrentPrice(pricesArray[0]); // Set currentPrice to the first price
        }

        NProgress.done(); // Stop the progress bar when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError(true); // Handle error
        NProgress.done(); // Stop the progress bar even if there’s an error
      });
  }, []);

  // Create markup for long description
  function createMarkup(e) {
    return { __html: data?.long_desc || '' }; // Ensure data is available
  }

  // Ensure the data is available and questions/answers are properly parsed
  const faqs = data
    ? {
        questions: JSON.parse(data.questions || "[]"), // Provide a fallback
        answers: JSON.parse(data.answers || "[]"), // Provide a fallback
      }
    : { questions: [], answers: [] };

  // Fetch categories from the API
  const [categories, setCategories] = useState([]); // State for categories
  const [cateError, setCategoriesError] = useState(false); // State to handle errors

  useEffect(() => {
    axios
      .get(`${API_URL}/api/get-categories`)
      .then((response) => {
        setCategories(response.data); // Set categories data
      })
      .catch((error) => {
        console.error("Error fetching category data", error);
        setCategoriesError(true); // Handle error
      });
  }, []);

  // Fetch products and manage state
  const [proData, setProData] = useState([]); // Start with an empty array
  const [bestSellingProducts, setBestSellingProducts] = useState([]); // State for best-selling products
  const [proError, proSetError] = useState(false); // State to handle errors
  const [currentPrice, setCurrentPrice] = useState(''); // State for current price


  useEffect(() => {
    axios
      .get(`${API_URL}/api/get-products`)
      .then((response) => {
        // Assuming products have a prices property
        const sortedProducts = response.data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
  
        // Set the products data
        setProData(sortedProducts);
  
        // Check if the first product has a prices array and update currentPrice
        if (sortedProducts.length > 0 && sortedProducts[0].prices) {
          const pricesArray = JSON.parse(sortedProducts[0].prices); // Parse the prices of the first product
          if (pricesArray.length > 0) {
            setCurrentPrice(pricesArray[0]); // Set currentPrice to the first price
          }
        }
  
        // Filter best-selling products
        const filteredBestSellers = sortedProducts.filter(
          (product) => product.best_selling === 1
        );
        setBestSellingProducts(filteredBestSellers); // Set the best-selling products data
      })
      .catch((error) => {
        console.error("Error fetching product data", error);
        proSetError(true); // Handle error
      });
  }, []);

  // Handle adding to cart
  const handleAddToCart = (id) => {
    setProductId({ id, currentPrice }); // Pass both product ID and price
    toast.success("Product Added Successfully!");
    // Here, you can also add the product with its ID and price to the cart
  };


 // Initialize the slick product slider
 useEffect(() => {
  const $productSlider = $(".slick-product");

  const initSlickProduct = () => {
    if ($productSlider.length && bestSellingProducts.length > 0) {
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

  // Initialize the slider only when bestSellingProducts has data
  if (bestSellingProducts.length > 0) {
    initSlickProduct();
  }

  // Cleanup function
  return () => {
    if ($productSlider.length) {
      $productSlider.slick("unslick"); // Uninitialize the slick slider
    }
  };
}, [bestSellingProducts]); // Re-run the effect when bestSellingProducts changes

 // Initialize the slick product slider
 useEffect(() => {
  const $productSlider = $(".slick-product2");

  const initSlickProduct = () => {
    if ($productSlider.length && proData.length > 0) {
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

  // Initialize the slider only when proData has data
  if (proData.length > 0) {
    initSlickProduct();
  }

  // Cleanup function
  return () => {
    if ($productSlider.length) {
      $productSlider.slick("unslick"); // Uninitialize the slick slider
    }
  };
}, [proData]); // Re-run the effect when proData changes

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

  return (
    <>
      {data ? (
        <>

<Toaster />


<Model isOpen={isModalOpen} closeModal={closeModal} /> {/* Pass isOpen and closeModal to Model */}
  





          <section className="bg-[url('home-images/main-banner.jpg')] bg-center bg-no-repeat bg-cover lg:py-[70px] md:py-[50px] s:py-[40px]">
            <div className="container mx-auto grid lg:grid-cols-2 s:grid-cols-1 lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
              <div className="col">
                <p className="font-barlow pb-[10px] text-white lg:text-[20px] md:text-[22px] leading-[30px] text-shadow-custom">
                  {data.small_text}
                </p>
                <h1 className="lg:text-[48px] md:text-[38px] s:text-[35px] font-bold font-cairo leading-[56px] s:leading-[40px]">
                  {data.banner_heading}
                </h1>
                <p className="font-barlow font-normal py-[12px] text-white leading-[30px] text-shadow-custom">
                  {data.banner_description}
                </p>
                <button className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group">
                  <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                  <span className="relative z-10">{data.button_text}</span>
                </button>
              </div>
              <div className="col"></div>
            </div>
          </section>

          <section className="container grid lg:grid-cols-5 md:grid-cols-5 s:grid-cols-2 gap-5 lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
            {cateError ? (
              <p>Error loading categories. Please try again later.</p>
            ) : (
              categories.map((category) => (
                <div className="col" key={category.id}>
                  <Link to={`/industries/${category.url}`}>
                    {" "}
                    {/* Use dynamic slug */}
                    <div className="relative overflow-hidden group rounded-[5px]">
                      <img
                        src={`${API_URL}/category/${category.sub_img}`} // Use dynamic image source
                        className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                        alt={category.sub_alt} // Use dynamic alt text
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[5px] transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                      <h3 className="font-barlow lg:text-[18px] absolute bottom-4 left-4 text-white transition-transform duration-300 ease-in-out group-hover:font-bold group-hover:translate-y-[-1px]">
                        {category.name} {/* Use dynamic category name */}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </section>

          <section className="bg-[url('home-images/section-image.jpg')] bg-center bg-no-repeat bg-cover lg:py-[70px] md:py-[50px] s:py-[40px]">
            <div className="container flex items-center gap-7 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
              <div className="col w-[50%] s:w-[100%]"></div>
              <div className="col w-[50%] s:w-[100%] text-white text-right lg:pl-[40px] md:pl-[0px] s:pl-[0px]">
                <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">
                  {data.heading_sec_2}
                </h2>
                <p className="font-barlow font-normal py-[18px] leading-[28px]">
                  {data.description_sec_2}
                </p>
                <button className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group">
                  <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                  <span className="relative z-10">
                    {data.button_text_sec_2}
                  </span>
                </button>
              </div>
            </div>
          </section>

          <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
            <div className="row">
              <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">
                {data.heading_bs_sec}
              </h2>
              <p className="font-barlow font-normal py-[18px] leading-[28px]">
                {data.description_bs_sec}
              </p>
            </div>

            <div className="slick-product">
              {proError ? (
                <p>Error loading products. Please try again later.</p>
              ) : (
                bestSellingProducts.map((product) => (
                  <div
                    key={product.id} // Use a unique identifier from your product data
                    className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)]"
                  >
                    <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
                      <Link to={`/product/${product.name}`}>
                        <img
                          src={`${API_URL}/product-images/${product.img1}`} // Use dynamic image source
                          className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
                          alt={product.img1_alt || "product"} // Use dynamic alt text
                        />
                      </Link>
                    </div>
                    <div className="product-des px-[14px] py-[18px]">
                      <div className="flex justify-between pb-[10px] font-barlow">
                        <Link to={`/product/${product.name}`}>
                          <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo text-black">
                            {product.name}
                          </h6>
                        </Link>
                        <p>
                          <span className="text-mainColor">
                            {product.quantity}
                          </span>
                          /Qty
                        </p>
                      </div>
                      <div className="flex justify-between pb-[10px] font-barlow">
                        <p>
                          <span className="text-mainColor">
                            {product.perUnit}
                          </span>{" "}
                          /per Unit
                        </p>
                        <p>
                          <span className="text-mainColor">
                            {product.perCase}
                          </span>{" "}
                          /per Case
                        </p>
                      </div>
                      <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                        <p>L={product.length}cm</p>
                        <p>W={product.weight}cm</p>
                        <p>H={product.height}cm</p>
                      </div>
                      <div className="mt-3">
                      {bestSellingProducts.customizebtn === 0 ? (
        <button onClick={() => handleAddToCart(proData.id)} className="mx-auto relative bg-transparent border border-mainColor text-mainColor px-[16px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block">
          <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
          <span className="relative z-10 group-hover:text-white">
            Add to cart
          </span>
        </button>
      ) : (
        <button 
          className="mx-auto relative bg-transparent border border-mainColor text-mainColor px-[16px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block" 
          onClick={openModal}  // Open modal on click
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
                ))
              )}
            </div>
          </section>

          <section className="bg-[#f5f5f5] lg:py-[70px] md:py-[50px] s:py-[40px]">
            <div className="container flex items-center gap-7 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
              <div className="col w-[50%] md:w-[50%] s:w-[100%]">
                <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">
                  {data.heading_img_sec}
                </h2>
                <p className="font-barlow font-normal py-[18px] leading-[28px]">
                  {data.description_img_sec}
                </p>
                <button className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group">
                  <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                  <span className="relative z-10">
                    {data.button_text_img_sec}
                  </span>
                </button>
              </div>
              <div className="col w-[50%] md:w-[50%] s:w-[100%]">
                <img
                  src="home-images/pre-roll-packaging.png"
                  className="w-full"
                  alt={data.image_alt_img_sec}
                />
              </div>
            </div>
          </section>

          <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
            <div className="row">
              <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">
                {data.heading_bsc_sec}
              </h2>
              <p className="font-barlow font-normal py-[18px] leading-[28px]">
                {data.description_bsc_sec}
              </p>
            </div>

            <div className="row flex items-center gap-5 s:flex-col lg:px-[0rem] s:px-[0rem] md:px-[2rem] sl:px-[2rem]">
              <div className="col lg:w-[40.5%] md:w-[40%] s:w-[100%]">
                <div className="relative overflow-hidden group rounded-[5px]">
                  <img
                    src="category-images/cate1.jpg"
                    className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                    alt="category-images"
                  />
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
                      <img
                        src="category-images/cate2.jpg"
                        className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                        alt="category-images"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[5px] transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                      <h3 className="font-cairo lg:text-[18px] absolute bottom-4 left-4 text-white transition-transform duration-300 ease-in-out group-hover:font-bold group-hover:translate-y-[-1px]">
                        Mylar Bags
                      </h3>
                    </div>
                  </div>
                  <div className="col">
                    <div className="relative overflow-hidden group rounded-[5px]">
                      <img
                        src="category-images/cate3.jpg"
                        className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                        alt="category-images"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[5px] transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                      <h3 className="font-cairo lg:text-[18px] absolute bottom-4 left-4 text-white transition-transform duration-300 ease-in-out group-hover:font-bold group-hover:translate-y-[-1px]">
                        Mylar Bags
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="relative overflow-hidden group rounded-[5px]">
                    <img
                      src="category-images/cate4.jpg"
                      className="rounded-[5px] w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                      alt="category-images"
                    />
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
              <div
                className="long-content"
                dangerouslySetInnerHTML={createMarkup()}
              ></div>
            </div>
          </section>

          <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
            <div className="row">
              <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">
                {data.heading_na_sec}
              </h2>
              <p className="font-barlow font-normal py-[18px] leading-[28px]">
                {data.description_na_sec}
              </p>
            </div>

            <div className="slick-product2">
            {proError ? (
  <p>Error loading products. Please try again later.</p>
) : (
  proData.map((proData, index) => (
    <div
  key={proData.id} // Use a unique identifier from your product data
  className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)]"
>
  <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
    <Link to={`/product/${proData.name}`}>
      <img
        src={`${API_URL}/product-images/${proData.img1}`} // Use dynamic image source
        className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
        alt={proData.img1_alt || "product"} // Use dynamic alt text
      />
    </Link>
  </div>
  <div className="product-des px-[14px] py-[18px]">
    <div className="flex justify-between pb-[10px] font-barlow">
      <Link to={`/product/${proData.name}`}>
        <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo text-black">
          {proData.name}
        </h6>
      </Link>
      <p>
        <span className="text-mainColor">
          {proData.quantity}
        </span>
        /Qty
      </p>
    </div>
    <div className="flex justify-between pb-[10px] font-barlow">
      <p>
        <span className="text-mainColor">
          {proData.perUnit}
        </span>{" "}
        /per Unit
      </p>
      <p>
        <span className="text-mainColor">
          {proData.perCase}
        </span>{" "}
        /per Case
      </p>
    </div>
    <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
      <p>L={proData.length}cm</p>
      <p>W={proData.weight}cm</p>
      <p>H={proData.height}cm</p>
    </div>
    <div className="mt-3">
    
      {proData.customizebtn === 0 ? (
        <button onClick={() => handleAddToCart(proData.id)} className="mx-auto relative bg-transparent border border-mainColor text-mainColor px-[16px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block">
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

  
  ))
)}

            </div>
          </section>

          <Form />

          <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
            <div className="row">
              <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">
                {data.faq_heading}
              </h2>
              <p className="font-barlow font-normal py-[18px] leading-[28px]">
                {data.faq_description}
              </p>
            </div>
            <div className="row">
              <div>
                {error ? (
                  <p>Error loading FAQs. Please try again later.</p>
                ) : (
                  <ul className="grid space-y-3 font-barlow" data-list="faq">
                    {faqs.questions.map((question, index) => (
                      <li
                        key={index}
                        className="group"
                        itemscope
                        itemprop="mainEntity"
                        itemtype="https://schema.org/Question"
                      >
                        <input
                          className="peer/option-1 hidden"
                          type="radio"
                          id={`option-${index}`}
                          name="options"
                        />
                        <label
                          className="peer-checked/option-1:bg-mainColor peer-checked/option-1:text-white peer-checked/option-1:border-white peer-checked/option-1:rounded-[3px] peer-checked/option-1:[&>svg]:text-white peer-checked/option-1:[&>svg]:rotate-180 block cursor-pointer p-2 pr-12 font-semibold border-b border-slate-900 transition-all duration-150 ease-in-out relative rounded-none text-gray-900"
                          htmlFor={`option-${index}`}
                          itemprop="name"
                        >
                          {question}
                          <svg
                            className="w-6 h-6 text-gray-600 absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform duration-300 faq-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </label>
                        <div
                          className="grid grid-rows-[0fr] transition-all duration-150 ease-in-out peer-checked/option-1:grid-rows-[1fr]"
                          itemscope
                          itemprop="acceptedAnswer"
                        >
                          <div className="min-h-[0px] overflow-hidden">
                            <div
                              className="p-2 border-none rounded"
                              itemprop="text"
                            >
                              {faqs.answers[index]}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        </>
      ) : (
        <p className="hidden">Loading...</p> // or you can show a loader or spinner here
      )}
    </>
  );
}
