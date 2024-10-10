import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import Error from "./Error";

export default function Product() {
  // Initialize For Product was invalid Show 404 Page Error or first product images show

  const [product, setProduct] = useState({}); // Initialize as an empty object
  const [error, setError] = useState(false); // Use boolean error state
  const [mainImage, setMainImage] = useState({
    src: "", // Initial src will be empty
    alt: "", // Initial alt text will be empty
  });
  const location = useLocation(); // Correct variable name
  const currentId = location.pathname.split("/")[2]; // Extract product ID from the URL

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${currentId}`
        );
        if (response.status === 200) {
          setProduct(response.data); // Set the fetched product data

          // Set main image using the first image from product.images array
          if (response.data.images && response.data.images.length > 0) {
            setMainImage({
              src: response.data.images[0], // Set the first image as main image
              alt: response.data.title || "Product Image", // Set the alt text as product title or default
            });
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true); // Set error to true
      }
    };

    fetchProduct(); // Fetch product data
  }, [currentId]);

  // Initialize the Radio size buttons

  const [selectedSize, setSelectedSize] = useState("");

  const handleChange = (value) => {
    setSelectedSize(value);
  };

  const sizes = [
    "30mL - 400 Count",
    "60mL - 600 Count",
    "90mL - 800 Count",
    "100mL - 800 Count",
    "120mL - 1000 Count",
    "140mL - 1200 Count", // example additional sizes
  ];

  // Initialize the Review Form

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDiv = () => {
    setIsExpanded(!isExpanded);
  };

  // Initialize the Product Counter

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => {
      if (prevCount > 1) {
        return prevCount - 1;
      }
      return 1;
    }, []);
  };

  // Initialize the Tabs

  const [activeTab, setActiveTab] = useState("tab1"); // Default tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update active tab
  };

  // Initialize For Product images On hover

  const changeMainImage = (newSrc, newAlt) => {
    setMainImage({ src: newSrc, alt: newAlt });
  };

  // Initialize the `.slick-product` slider
  useEffect(() => {
    const initSlickProduct = () => {
      const $productSlider = $(".slick-product");
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

        return () => {
          if ($productSlider.length) {
            $productSlider.slick("unslick");
          }
        };
      }
    };

    const cleanupSlickProduct = initSlickProduct();

    return () => {
      cleanupSlickProduct();
    };
  }, []);

  // Initialize the `.slick-reviews` slider

  useEffect(() => {
    const initSlickProduct = () => {
      const $productSlider = $(".slick-reviews");
      if ($productSlider.length) {
        $productSlider.slick({
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
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

        // Cleanup function to unslick the slider
        return () => {
          if ($productSlider.length) {
            $productSlider.slick("unslick");
          }
        };
      }
    };

    // Initialize Slick slider
    const cleanupSlickProduct = initSlickProduct();

    // Cleanup the slick on component unmount
    return () => {
      cleanupSlickProduct();
    };
  }, []); // Empty dependency array ensures it only runs once on mount

  // This is A Model js

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("BODY")[0];
    const modal = document.getElementById("modal");

    const openModal = () => {
      if (!isModalOpen) {
        modal.classList.remove("invisible", "opacity-0"); // Show modal (fade-in)
        modal.classList.add("flex", "opacity-100"); // Add fade-in effect
        body.style.overflow = "hidden"; // Disable scroll on body
        setIsModalOpen(true);
      }
    };

    const closeModal = () => {
      if (isModalOpen) {
        modal.classList.remove("opacity-100"); // Start fade-out
        modal.classList.add("opacity-0"); // Fade-out effect
        setTimeout(() => {
          modal.classList.add("invisible"); // Hide modal after fade-out
          modal.classList.remove("flex");
          body.style.overflow = "auto"; // Enable scroll on body
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
    const modalButtons = document.getElementsByClassName("modal-button");
    Array.from(modalButtons).forEach((modalBtn) => {
      modalBtn.addEventListener("click", openModal);
    });

    const modalClose = document.getElementsByClassName("modal-close");
    Array.from(modalClose).forEach((closeBtn) => {
      closeBtn.addEventListener("click", closeModal);
    });

    // Close modal when clicking outside the modal
    window.addEventListener("click", handleOutsideClick);

    // Cleanup event listeners on component unmount
    return () => {
      Array.from(modalButtons).forEach((modalBtn) => {
        modalBtn.removeEventListener("click", openModal);
      });
      Array.from(modalClose).forEach((closeBtn) => {
        closeBtn.removeEventListener("click", closeModal);
      });
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);


  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures it only runs on mount

  return (
    <>
      {error ? (
        <Error /> // Render the Error component when there's an error
      ) : (
        <>
          <div
            id="modal"
            className="invisible opacity-0 transition-opacity duration-300 ease-in-out items-center justify-center h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-60 z-20"
          >
            {/* <!-- Modal Dialog --> */}
            <div className="bg-white max-w-xl w-full rounded-md">
              {/* <!-- Modal Content --> */}
              <div className="py-2 px-4 flex items-center justify-between border-b border-b-gray-300">
                {/* <!-- Modal Header --> */}
                <h3 className="font-bold text-xl font-cairo">
                  Customized Product
                </h3>
                <span className="modal-close cursor-pointer border border-mainColor rounded-full px-2 text-[18px] bg-mainColor text-white font-bold">
                  ×
                </span>
                {/* <!-- Close Modal --> */}
              </div>
              <div className="p-4">
                {/* <!-- Modal Body --> */}
                <form className="font-barlow">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full h-9 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black mb-3"
                  />

                  <div className="flex justify-between items-center mb-3">
                    <h5 className="font-barlow text-[16px] font-semibold">
                      Customer Type:
                    </h5>
                    <div className="flex items-center">
                      <div className="flex items-center mr-4 font-barlow text-[14px]">
                        <input
                          id="radio1"
                          type="radio"
                          name="radio"
                          className="hidden"
                          checked
                        />
                        <label
                          for="radio1"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                          New Customer
                        </label>
                      </div>

                      <div className="flex items-center mr-4 font-barlow text-[14px]">
                        <input
                          id="radio2"
                          type="radio"
                          name="radio"
                          className="hidden"
                        />
                        <label
                          for="radio2"
                          className="flex items-center cursor-pointer"
                        >
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
                      <select
                        id="options"
                        name="options"
                        className="block w-full border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black p-2"
                      >
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
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="w-full h-9 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full h-9 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <h5 className="font-barlow text-[16px] font-semibold">
                      Desired Quantity:
                    </h5>
                    <div className="flex items-center">
                      <div className="flex items-center mr-4 font-barlow text-[14px]">
                        <input
                          id="radio11"
                          type="radio"
                          name="radio"
                          className="hidden"
                          checked
                        />
                        <label
                          for="radio11"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                          1000
                        </label>
                      </div>

                      <div className="flex items-center mr-4 font-barlow text-[14px]">
                        <input
                          id="radio22"
                          type="radio"
                          name="radio"
                          className="hidden"
                        />
                        <label
                          for="radio22"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                          1500
                        </label>
                      </div>
                      <div className="flex items-center mr-4 font-barlow text-[14px]">
                        <input
                          id="radio33"
                          type="radio"
                          name="radio"
                          className="hidden"
                        />
                        <label
                          for="radio33"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                          2000
                        </label>
                      </div>
                      <div className="flex items-center mr-4 font-barlow text-[14px]">
                        <input
                          id="radio44"
                          type="radio"
                          name="radio"
                          className="hidden"
                        />
                        <label
                          for="radio44"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                          2500
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="inline-block mb-3">
                    <h5 className="font-barlow text-[16px] font-semibold">
                      Artwork and Design Services :
                    </h5>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-4 font-barlow text-[14px]">
                      <input
                        id="radio111"
                        type="radio"
                        name="radio"
                        className="hidden"
                        checked
                      />
                      <label
                        for="radio111"
                        className="flex items-center cursor-pointer"
                      >
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Artwork will be provided.
                      </label>
                    </div>

                    <div className="flex items-center mr-4 font-barlow text-[14px]">
                      <input
                        id="radio222"
                        type="radio"
                        name="radio"
                        className="hidden"
                      />
                      <label
                        for="radio222"
                        className="flex items-center cursor-pointer"
                      >
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
                  <a
                    href="#"
                    className="hover:text-[#000] text-[#7EBE43] transition-colors duration-300 flex items-center"
                  >
                    <span>Current Page</span>
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
                  <span className="text-[#7EBE43]">Current Page</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="lg:py-[50px] md:py-[50px] s:py-[40px]">
            <div className="container flex gap-5 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
              <div className="col lg:w-[60%] md:w-[60%] sl:w-[60%] s:w-[100%]">
                <div className="row flex items-center gap-5">
                  <div className="col lg:w-[25%] md:w-[15%] sl:w-[18%] s:w-[17%]">
                    {/* Thumbnail Images */}
                    <div className="details-images space-y-4">
                      <img
                        fetchpriority="high"
                        width="110"
                        height="110"
                        onMouseEnter={() => changeMainImage(product.images)}
                        src={product.images}
                        className="rounded-[5px]"
                        alt="poly bubble mailers"
                      />
                      <img
                        fetchpriority="high"
                        width="110"
                        height="110"
                        onMouseEnter={() =>
                          changeMainImage(
                            "/product-images/p2.jpg",
                            "custom poly bubble mailers"
                          )
                        }
                        src="/product-images/p2.jpg"
                        className="rounded-[5px]"
                        alt="custom poly bubble mailers"
                      />
                      <img
                        fetchpriority="high"
                        width="110"
                        height="110"
                        onMouseEnter={() =>
                          changeMainImage(
                            "/product-images/p3.jpg",
                            "bubble poly mailers"
                          )
                        }
                        src="/product-images/p3.jpg"
                        className="rounded-[5px]"
                        alt="bubble poly mailers"
                      />
                      <img
                        fetchpriority="high"
                        width="110"
                        height="110"
                        onMouseEnter={() =>
                          changeMainImage(
                            "/product-images/p4.jpg",
                            "poly bubble mailers bulk"
                          )
                        }
                        src="/product-images/p4.jpg"
                        className="rounded-[5px]"
                        alt="poly bubble mailers bulk"
                      />
                    </div>
                  </div>
                  <div className="col lg:w-[75%] md:w-[85%] sl:w-[82%] s:w-[83%]">
                    <div className="big-img relative lg:left-[-20px] md:left-[0px] sl:left-[0px] s:left-[0px]">
                      <img
                        id="mymainImage3"
                        src={mainImage.src}
                        alt={mainImage.alt}
                        className="rounded-[5px]"
                        width="500"
                        height="500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col lg:w-[40%] md:w-[40%] sl:w-[40%] s:w-[100%]">
                <div class="product-des">
                  <h1 class="lg:text-[35px] md:text-[30px] s:text-[25px] font-semibold text-black font-cairo leading-[48px] s:leading-[40px]">
                    {product.title}
                  </h1>
                  <hr class="my-[7px] border-black" />
                  <h5 class="font-barlow text-[17px] mt-3 inline-block">
                    $0.19 per unit / $49.00 per case
                  </h5>
                  <p class="inline-block lg:float-end s:float-none mt-3">
                    <span class="text-mainColor font-semibold">200/</span>Qty
                  </p>

                  <div class="flex justify-between pt-[15px] font-barlow">
                    <p>
                      <span class="font-semibold">L=</span> 3.4cm
                    </p>
                    <p>
                      <span class="font-semibold">W=</span> 3.4cm
                    </p>
                    <p>
                      <span class="font-semibold">H=</span> 3.4cm
                    </p>
                  </div>

                  <form class="space-y-5">
                    <div class="block my-[12px]">
                      <h5 class="font-barlow font-semibold text-[19px]">
                        Size:
                      </h5>
                    </div>
                    <div
                      className="grid lg:grid-cols-3 s:grid-cols-2 md:grid-cols-2 gap-4"
                      style={{ margin: "0px" }}
                      id="selects"
                    >
                      {sizes.map((size, index) => (
                        <label
                          key={index}
                          className={`relative ${
                            selectedSize === size
                              ? "bg-mainColor text-white"
                              : "bg-transparent text-mainColor"
                          } border border-mainColor px-[2px] py-[9px] font-cairo rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group cursor-pointer flex items-center justify-center`}
                        >
                          <input
                            type="radio"
                            name="size"
                            className="absolute opacity-0 w-full h-full cursor-pointer"
                            value={size}
                            checked={selectedSize === size}
                            onChange={() => handleChange(size)}
                          />
                          <span
                            className={`absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform ${
                              selectedSize === size
                                ? "translate-x-0"
                                : "translate-x-[-100%]"
                            } group-hover:translate-x-0`}
                          ></span>
                          <span className="relative z-10 group-hover:text-white text-center">
                            {size}
                          </span>
                        </label>
                      ))}
                    </div>

                    {/* <!-- Color Label --> */}
                    <div class="inline-block">
                      <h5 class="font-barlow text-[19px]">
                        <span class="font-semibold">Color:</span>
                      </h5>
                    </div>

                    {/* <!-- Select Field --> */}
                    <div class="inline-block lg:w-40 s:w-40">
                      <select
                        name="color"
                        id="color"
                        class="block w-full rounded-[5px] border-gray-500 bg-[#f5f5f5] p-2 ml-2"
                      >
                        <option value="">Select Color</option>
                        <option value="1 Color">1 Color</option>
                        <option value="2 Color">2 Color</option>
                        <option value="3 Color">3 Color</option>
                        <option value="4 Color">4 Color</option>
                        <option value="4/1 Color">4/1 Color</option>
                        <option value="4/2 Color">4/2 Color</option>
                        <option value="4/3 Color">4/3 Color</option>
                        <option value="4/4 Color">4/4 Color</option>
                      </select>
                    </div>

                    <div class="inline-block lg:float-end s:float-none">
                      <h5 class="font-barlow text-[19px]">
                        <span class="font-semibold">Price:</span> $ 200.00
                      </h5>
                    </div>

                    <div class="flex items-center s:flex-col s:mt-5">
                      <button class="relative bg-mainColor px-[20px] py-[8px] text-white font-cairo rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group w-full">
                        <span class="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                        <span class="relative z-10">Add to Cart</span>
                      </button>
                      {/* <!-- <span class="font-barlow mx-[14px] s:my-[8px]">Or</span>
                 <button class="modal-button relative bg-transparent border border-mainColor text-mainColor px-[20px] py-[7px] font-cairo rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group w-full">
                  <span class="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                  <span class="relative z-10 group-hover:text-white">Customized Product</span>
                </button> --> */}
                    </div>
                  </form>
                  <div class="mt-4 space-x-4 s:space-x-0">
                    <div class="inline-block s:block">
                      <a
                        href="#"
                        class="block hover:text-mainColor transition-colors duration-300"
                      >
                        <div class="flex items-center">
                          <i class="fa-solid fa-question mr-[7px]"></i>
                          <p class="font-barlow">Ask a Question</p>
                        </div>
                      </a>
                    </div>
                    <div class="inline-block s:block s:mt-2">
                      <a
                        href="#"
                        class="block hover:text-mainColor transition-colors duration-300"
                      >
                        <div class="flex items-center">
                          <i class="fa-solid fa-link mr-[7px]"></i>
                          <p class="font-barlow">View Related Products</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="container lg:py-[50px] md:py-[50px] s:py-[40px]"
            style={{ paddingTop: "0px" }}
          >
            <div className="w-full">
              {/* <!-- Tabs --> */}
              <ul className="flex s:flex-col s:text-center bg-[#F5F5F5] py-[5px] s:py-[20px] justify-around text-[18px] font-cairo tab-active rounded-[5px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
                <li className="mr-1">
                  <button
                    onClick={() => handleTabClick("tab1")}
                    className={`inline-block py-2 px-4 font-semibold focus:outline-none transition duration-300 ease-in-out ${
                      activeTab === "tab1" ? "active" : ""
                    }`}
                  >
                    Product Detail
                  </button>
                </li>
                <li className="mr-1">
                  <button
                    onClick={() => handleTabClick("tab2")}
                    className={`inline-block py-2 px-4 font-semibold focus:outline-none transition duration-300 ease-in-out ${
                      activeTab === "tab2" ? "active" : ""
                    }`}
                  >
                    Description
                  </button>
                </li>
                <li className="mr-1">
                  <button
                    onClick={() => handleTabClick("tab3")}
                    className={`inline-block py-2 px-4 font-semibold focus:outline-none transition duration-300 ease-in-out ${
                      activeTab === "tab3" ? "active" : ""
                    }`}
                  >
                    Reviews
                  </button>
                </li>
              </ul>

              {/* <!-- Tab Contents --> */}
              <div
                id="tab1"
                className={`tab-content transition-opacity duration-500 ${
                  activeTab === "tab1" ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  height: activeTab === "tab1" ? "auto" : "0",
                  overflow: "hidden",
                }}
              >
                <div
                  className="lg:py-[40px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]"
                  style={{ paddingBottom: "0px" }}
                >
                  <div className="grid lg:grid-cols-3 md:grid-cols-3 s:grid-cols-1 gap-10">
                    <div className="col">
                      <h4 className="font-barlow font-semibold text-[20px]">
                        Specifications
                      </h4>
                      <ul className="space-y-4 list mt-5">
                        <li>
                          <div className="flex justify-between items-center font-barlow">
                            <h6 className="font-semibold">Capacity</h6>
                            <h6 className="text-[#3E3E3E]">28</h6>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center font-barlow">
                            <h6 className="font-semibold">Capacity</h6>
                            <h6 className="text-[#3E3E3E]">28</h6>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center font-barlow">
                            <h6 className="font-semibold">Capacity</h6>
                            <h6 className="text-[#3E3E3E]">28</h6>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center font-barlow">
                            <h6 className="font-semibold">Capacity</h6>
                            <h6 className="text-[#3E3E3E]">28</h6>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center font-barlow">
                            <h6 className="font-semibold">Capacity</h6>
                            <h6 className="text-[#3E3E3E]">28</h6>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center font-barlow">
                            <h6 className="font-semibold">Capacity</h6>
                            <h6 className="text-[#3E3E3E]">28</h6>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center font-barlow">
                            <h6 className="font-semibold">Capacity</h6>
                            <h6 className="text-[#3E3E3E]">28</h6>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center font-barlow">
                            <h6 className="font-semibold">Capacity</h6>
                            <h6 className="text-[#3E3E3E]">28</h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col">
                      <img
                        src="product-images/s-image.png"
                        className="mx-auto block"
                        alt="img"
                      />
                    </div>
                    <div className="col">
                      <h4 className="font-barlow font-semibold text-[20px]">
                        Dimensions
                      </h4>
                      <ul className="space-y-4 list mt-5">
                        <li>
                          <div className="flex justify-between items-center font-barlow">
                            <h6 className="font-semibold">Capacity</h6>
                            <h6 className="text-[#3E3E3E]">28</h6>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center font-barlow">
                            <h6 className="font-semibold">Capacity</h6>
                            <h6 className="text-[#3E3E3E]">28</h6>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center font-barlow">
                            <h6 className="font-semibold">Capacity</h6>
                            <h6 className="text-[#3E3E3E]">28</h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tab2"
                className={`tab-content transition-opacity duration-500 ${
                  activeTab === "tab2" ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  height: activeTab === "tab2" ? "auto" : "0",
                  overflow: "hidden",
                }}
              >
                <div
                  className="lg:py-[40px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]"
                  style={{ paddingBottom: "0px" }}
                >
                  <div className="long-content">
                    <h3>What is Lorem Ipsum?</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="tab3"
                className={`tab-content transition-opacity duration-500 ${
                  activeTab === "tab3" ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  height: activeTab === "tab3" ? "auto" : "0",
                  overflow: "hidden",
                }}
              >
                <div
                  className="lg:py-[40px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]"
                  style={{ paddingBottom: "0px" }}
                >
                  <div className="flex justify-between items-center s:flex-col s:items-start">
                    <div>
                      <h5 className="font-barlow font-semibold text-[20px]">
                        Customer Reviews
                      </h5>
                      <ul className="flex space-x-2 items-center text-mainColor mt-3">
                        <li>
                          <i className="fa-regular fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-regular fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-regular fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-regular fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-regular fa-star"></i>
                        </li>
                      </ul>
                    </div>

                    <button
                      onClick={toggleDiv}
                      className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group md:ml-auto lg:ml-[0px] lg:mr-[0px] md:mr-[30px] s:mt-5"
                      role="button"
                    >
                      <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                      <span className="relative z-10">
                        {isExpanded ? "Hide Form" : "Write A Review"}
                      </span>
                    </button>
                  </div>

                  <form
                    className="mt-7 overflow-hidden opacity-0 transition-opacity duration-500 ease-in-out"
                    id="myDIV"
                    style={{
                      height: isExpanded ? "auto" : "0px",
                      opacity: isExpanded ? 1 : 0,
                      transition: "height 0.3s ease, opacity 0.3s ease",
                      overflow: "hidden", // Ensure content doesn't overflow when collapsed
                    }}
                  >
                    <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          for="name"
                          className="block mb-2 text-black font-barlow"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name"
                          className="w-full h-11 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black bg-[#f5f5f5] focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                        />
                      </div>

                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-black font-barlow"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          className="w-full h-11 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black bg-[#f5f5f5] focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        for="message"
                        className="block mb-2 text-black font-barlow"
                      >
                        Review Title
                      </label>
                      <input
                        type="text"
                        id="r_title"
                        name="r_title"
                        placeholder="Review Title"
                        className="w-full h-11 px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black bg-[#f5f5f5] focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        for="message"
                        className="block mb-2 text-black font-barlow"
                      >
                        Review
                      </label>
                      <textarea
                        id="review"
                        name="review"
                        rows="3"
                        placeholder="Write a Review..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-[5px] placeholder-black bg-[#f5f5f5] focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                      ></textarea>
                    </div>

                    <div class="flow-root mb-2">
                      <label class="block text-black font-barlow">
                        Review Rating
                      </label>
                      <div class="star-rating">
                        <input
                          type="radio"
                          name="rating"
                          id="star1"
                          value="1"
                        />
                        <label for="star1" class="star">
                          &#9733;
                        </label>
                        <input
                          type="radio"
                          name="rating"
                          id="star2"
                          value="2"
                        />
                        <label for="star2" class="star">
                          &#9733;
                        </label>
                        <input
                          type="radio"
                          name="rating"
                          id="star3"
                          value="3"
                        />
                        <label for="star3" class="star">
                          &#9733;
                        </label>
                        <input
                          type="radio"
                          name="rating"
                          id="star4"
                          value="4"
                        />
                        <label for="star4" class="star">
                          &#9733;
                        </label>
                        <input
                          type="radio"
                          name="rating"
                          id="star5"
                          value="5"
                        />
                        <label for="star5" class="star">
                          &#9733;
                        </label>
                      </div>
                    </div>

                    <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[10px] font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group">
                      <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                      <span className="relative z-10 group-hover:text-white">
                        Submit Review
                      </span>
                    </button>
                  </form>

                  <div class="slick-reviews">
                    <div class="reviews shadow-md p-5 my-3 relative">
                      <div class="crescent">
                        <div class="stars">
                          <div>&#9734;</div>
                          <div>&#9734;</div>
                          <div>&#9733;</div>
                          <div>&#9733;</div>
                          <div>&#9733;</div>
                        </div>
                      </div>
                      <h5 class="font-cairo font-semibold text-[32px] absolute left-[65px] top-[45px]">
                        1
                      </h5>
                      <h4 class="text-mainColor font-bold font-cairo text-[20px] mt-2">
                        Title Review
                      </h4>
                      <p class="font-barlow py-2 leading-[28px] color-[#3E3E3E]">
                        "You can trust our packaging professionals, who promise
                        fast deliveries for time-sensitive orders without making
                        a hole in your pocket. Our reliable service is not only
                        time-efficient but also affordable."
                      </p>
                      <h6 class="font-semibold font-cairo text-[17px]">Deny</h6>
                    </div>
                    <div class="reviews shadow-md p-5 my-3 relative">
                      <div class="crescent">
                        <div class="stars">
                          <div>&#9734;</div>
                          <div>&#9734;</div>
                          <div>&#9733;</div>
                          <div>&#9733;</div>
                          <div>&#9733;</div>
                        </div>
                      </div>
                      <h5 class="font-cairo font-semibold text-[32px] absolute left-[65px] top-[45px]">
                        1
                      </h5>
                      <h4 class="text-mainColor font-bold font-cairo text-[20px] mt-2">
                        Title Review
                      </h4>
                      <p class="font-barlow py-2 leading-[28px] color-[#3E3E3E]">
                        "You can trust our packaging professionals, who promise
                        fast deliveries for time-sensitive orders without making
                        a hole in your pocket. Our reliable service is not only
                        time-efficient but also affordable."
                      </p>
                      <h6 class="font-semibold font-cairo text-[17px]">Deny</h6>
                    </div>
                    <div class="reviews shadow-md p-5 my-3 relative">
                      <div class="crescent">
                        <div class="stars">
                          <div>&#9734;</div>
                          <div>&#9734;</div>
                          <div>&#9733;</div>
                          <div>&#9733;</div>
                          <div>&#9733;</div>
                        </div>
                      </div>
                      <h5 class="font-cairo font-semibold text-[32px] absolute left-[65px] top-[45px]">
                        1
                      </h5>
                      <h4 class="text-mainColor font-bold font-cairo text-[20px] mt-2">
                        Title Review
                      </h4>
                      <p class="font-barlow py-2 leading-[28px] color-[#3E3E3E]">
                        "You can trust our packaging professionals, who promise
                        fast deliveries for time-sensitive orders without making
                        a hole in your pocket. Our reliable service is not only
                        time-efficient but also affordable."
                      </p>
                      <h6 class="font-semibold font-cairo text-[17px]">Deny</h6>
                    </div>
                    <div class="reviews shadow-md p-5 my-3 relative">
                      <div class="crescent">
                        <div class="stars">
                          <div>&#9734;</div>
                          <div>&#9734;</div>
                          <div>&#9733;</div>
                          <div>&#9733;</div>
                          <div>&#9733;</div>
                        </div>
                      </div>
                      <h5 class="font-cairo font-semibold text-[32px] absolute left-[65px] top-[45px]">
                        1
                      </h5>
                      <h4 class="text-mainColor font-bold font-cairo text-[20px] mt-2">
                        Title Review
                      </h4>
                      <p class="font-barlow py-2 leading-[28px] color-[#3E3E3E]">
                        "You can trust our packaging professionals, who promise
                        fast deliveries for time-sensitive orders without making
                        a hole in your pocket. Our reliable service is not only
                        time-efficient but also affordable."
                      </p>
                      <h6 class="font-semibold font-cairo text-[17px]">Deny</h6>
                    </div>
                    <div class="reviews shadow-md p-5 my-3 relative">
                      <div class="crescent">
                        <div class="stars">
                          <div>&#9734;</div>
                          <div>&#9734;</div>
                          <div>&#9733;</div>
                          <div>&#9733;</div>
                          <div>&#9733;</div>
                        </div>
                      </div>
                      <h5 class="font-cairo font-semibold text-[32px] absolute left-[65px] top-[45px]">
                        1
                      </h5>
                      <h4 class="text-mainColor font-bold font-cairo text-[20px] mt-2">
                        Title Review
                      </h4>
                      <p class="font-barlow py-2 leading-[28px] color-[#3E3E3E]">
                        "You can trust our packaging professionals, who promise
                        fast deliveries for time-sensitive orders without making
                        a hole in your pocket. Our reliable service is not only
                        time-efficient but also affordable."
                      </p>
                      <h6 class="font-semibold font-cairo text-[17px]">Deny</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f5f5f5] lg:py-[50px] md:py-[50px] s:py-[40px]">
            <div className="container lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
              <div className="long-content">
                <h2>What is Lorem Ipsum?</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h4>What is Lorem Ipsum?</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </section>

          <section
            className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]"
            style={{ paddingBottom: "20px" }}
          >
            <div className="row">
              <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">
                Related <span className="text-mainColor">Products</span>
              </h2>
              <p className="font-barlow font-normal py-[18px] leading-[28px]">
                Looking for custom apparel boxes wholesale to present, promote,
                and protect your apparel items? Our apparel boxes are one of the
                most cost-effective, eco-friendly, ideally branded, and
                appealing packaging solutions. We design each apparel box
                according to products and market standards.
              </p>
            </div>

            <div className="slick-product">
              <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)] group">
                <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
                  <img
                    src="product-images/product-img.jpg"
                    className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                    alt="product"
                  />
                </div>
                <div className="product-des px-[14px] py-[18px]">
                  <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo mb-[10px] text-black">
                    Pre-Rolled Cones
                  </h6>
                  <div className="flex justify-between pb-[10px] font-barlow">
                    <p>
                      <span className="text-mainColor">20.00$/</span>per Unit
                    </p>
                    <p>
                      <span className="text-mainColor">20.00$/</span>per Unit
                    </p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                    <p>H=3.4cm</p>
                    <p>H=3.4cm</p>
                    <p>H=3.4cm</p>
                  </div>
                  <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
                    <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-white">
                      Add to cart
                    </span>
                  </button>
                </div>
              </div>
              <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)] group">
                <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
                  <img
                    src="product-images/product-img.jpg"
                    className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                    alt="product"
                  />
                </div>
                <div className="product-des px-[14px] py-[18px]">
                  <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo mb-[10px] text-black">
                    Pre-Rolled Cones
                  </h6>
                  <div className="flex justify-between pb-[10px] font-barlow">
                    <p>
                      <span className="text-mainColor">20.00$/</span>per Unit
                    </p>
                    <p>
                      <span className="text-mainColor">20.00$/</span>per Unit
                    </p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                    <p>H=3.4cm</p>
                    <p>H=3.4cm</p>
                    <p>H=3.4cm</p>
                  </div>
                  <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
                    <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-white">
                      Add to cart
                    </span>
                  </button>
                </div>
              </div>
              <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)] group">
                <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
                  <img
                    src="product-images/product-img.jpg"
                    className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                    alt="product"
                  />
                </div>
                <div className="product-des px-[14px] py-[18px]">
                  <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo mb-[10px] text-black">
                    Pre-Rolled Cones
                  </h6>
                  <div className="flex justify-between pb-[10px] font-barlow">
                    <p>
                      <span className="text-mainColor">20.00$/</span>per Unit
                    </p>
                    <p>
                      <span className="text-mainColor">20.00$/</span>per Unit
                    </p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                    <p>H=3.4cm</p>
                    <p>H=3.4cm</p>
                    <p>H=3.4cm</p>
                  </div>
                  <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
                    <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-white">
                      Add to cart
                    </span>
                  </button>
                </div>
              </div>
              <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)] group">
                <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
                  <img
                    src="product-images/product-img.jpg"
                    className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                    alt="product"
                  />
                </div>
                <div className="product-des px-[14px] py-[18px]">
                  <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo mb-[10px] text-black">
                    Pre-Rolled Cones
                  </h6>
                  <div className="flex justify-between pb-[10px] font-barlow">
                    <p>
                      <span className="text-mainColor">20.00$/</span>per Unit
                    </p>
                    <p>
                      <span className="text-mainColor">20.00$/</span>per Unit
                    </p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                    <p>H=3.4cm</p>
                    <p>H=3.4cm</p>
                    <p>H=3.4cm</p>
                  </div>
                  <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
                    <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-white">
                      Add to cart
                    </span>
                  </button>
                </div>
              </div>
              <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)] group">
                <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
                  <img
                    src="product-images/product-img.jpg"
                    className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                    alt="product"
                  />
                </div>
                <div className="product-des px-[14px] py-[18px]">
                  <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo mb-[10px] text-black">
                    Pre-Rolled Cones
                  </h6>
                  <div className="flex justify-between pb-[10px] font-barlow">
                    <p>
                      <span className="text-mainColor">20.00$/</span>per Unit
                    </p>
                    <p>
                      <span className="text-mainColor">20.00$/</span>per Unit
                    </p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                    <p>H=3.4cm</p>
                    <p>H=3.4cm</p>
                    <p>H=3.4cm</p>
                  </div>
                  <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
                    <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-white">
                      Add to cart
                    </span>
                  </button>
                </div>
              </div>
              <div className="product-info mb-1 bg-[#f5f5f5] rounded-[5px] shadow-[0_-2px_5px_0_rgb(0_0_0/_0%),_0_2px_5px_0_rgb(0_0_0/_15%)] group">
                <div className="overflow-hidden rounded-tl-[5px] rounded-tr-[5px]">
                  <img
                    src="product-images/product-img.jpg"
                    className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                    alt="product"
                  />
                </div>
                <div className="product-des px-[14px] py-[18px]">
                  <h6 className="lg:text-[18px] md:text-[17px] s:text-[16px] font-normal font-cairo mb-[10px] text-black">
                    Pre-Rolled Cones
                  </h6>
                  <div className="flex justify-between pb-[10px] font-barlow">
                    <p>
                      <span className="text-mainColor">20.00$/</span>per Unit
                    </p>
                    <p>
                      <span className="text-mainColor">20.00$/</span>per Unit
                    </p>
                  </div>
                  <div className="flex justify-between border-t border-[#ccc] pt-[10px] font-barlow">
                    <p>H=3.4cm</p>
                    <p>H=3.4cm</p>
                    <p>H=3.4cm</p>
                  </div>
                  <button className="relative bg-transparent border border-mainColor text-mainColor px-[22px] py-[7px] font-barlow rounded-[5px] text-[14px] overflow-hidden transition-all duration-300 ease-in-out group block mx-auto mt-3">
                    <span className="absolute inset-0 bg-mainColor transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-white">
                      Add to cart
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[url('/home-images/get-in-touch.jpg')] lg:bg-center md:bg-center s:bg-left bg-no-repeat bg-cover lg:h-[480px] md:h-[480px] s:h-[450px] flex items-center">
            <div className="container flex items-center gap-7 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
              <div className="col w-[50%] md:w-[50%] s:w-[100%]">
                <p className="font-cairo pb-[5px] text-black lg:text-[18px] md:text-[22px] leading-[30px]">
                  The One-Stop Shop For All Your Crop
                </p>
                <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[50px] s:leading-[35px]">
                  Elevate <span className="text-mainColor">Your Brand</span>{" "}
                  With Custom Packaging
                </h2>
                <p className="font-barlow font-normal py-[18px] leading-[28px]">
                  Looking for custom apparel boxes wholesale to present,
                  promote, and protect your apparel items? Our apparel boxes are
                  one of the most cost-effective, eco-friendly, ideally branded,
                  and appealing packaging solutions.
                </p>
                <button className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group">
                  <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                  <span className="relative z-10">Explore More Packaging</span>
                </button>
              </div>
              <div className="col w-[50%] md:w-[50%] s:w-[100%] s:hidden"></div>
            </div>
          </section>

          <section
            className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]"
            style={{ paddingTop: "20px" }}
          >
            <div className="row">
              <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">
                Frequently Asked{" "}
                <span className="text-mainColor">Questions</span>
              </h2>
              <p className="font-barlow font-normal py-[18px] leading-[28px]">
                Looking for custom apparel boxes wholesale to present, promote,
                and protect your apparel items? Our apparel boxes are one of the
                most cost-effective, eco-friendly, ideally branded, and
                appealing packaging solutions.
              </p>
            </div>
            <div className="row">
              <div>
                <ul className="grid space-y-3 font-barlow" data-list="faq">
                  <li
                    className="group"
                    itemscope
                    itemprop="mainEntity"
                    itemtype="https://schema.org/Question"
                  >
                    <input
                      className="peer/option-1 hidden"
                      type="radio"
                      id="option-1"
                      name="options-1"
                    />
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
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
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
                          Tailwind CSS is a utility-first CSS framework for
                          creating custom designs quickly and efficiently.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="group"
                    itemscope
                    itemprop="mainEntity"
                    itemtype="https://schema.org/Question"
                  >
                    <input
                      className="peer/option-2 hidden"
                      type="radio"
                      id="option-2"
                      name="options-1"
                    />
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
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </label>
                    <div
                      className="grid grid-rows-[0fr] transition-all duration-150 ease-in-out peer-checked/option-2:grid-rows-[1fr]"
                      itemscope
                      itemprop="acceptedAnswer"
                    >
                      <div className="min-h-[0px] overflow-hidden">
                        <div
                          className="p-2 border-none rounded"
                          itemprop="text"
                        >
                          Tailwind CSS is primarily used for rapidly building
                          custom UI designs without having to write custom CSS.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="group"
                    itemscope
                    itemprop="mainEntity"
                    itemtype="https://schema.org/Question"
                  >
                    <input
                      className="peer/option-3 hidden"
                      type="radio"
                      id="option-3"
                      name="options-1"
                    />
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
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </label>
                    <div
                      className="grid grid-rows-[0fr] transition-all duration-150 ease-in-out peer-checked/option-3:grid-rows-[1fr]"
                      itemscope
                      itemprop="acceptedAnswer"
                    >
                      <div className="min-h-[0px] overflow-hidden">
                        <div
                          className="p-2 border-none rounded"
                          itemprop="text"
                        >
                          The benefits of Tailwind CSS include rapid
                          prototyping, reusability, and a low learning curve for
                          beginners.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="group"
                    itemscope
                    itemprop="mainEntity"
                    itemtype="https://schema.org/Question"
                  >
                    <input
                      className="peer/option-4 hidden"
                      type="radio"
                      id="option-4"
                      name="options-1"
                    />
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
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </label>
                    <div
                      className="grid grid-rows-[0fr] transition-all duration-150 ease-in-out peer-checked/option-4:grid-rows-[1fr]"
                      itemscope
                      itemprop="acceptedAnswer"
                    >
                      <div className="min-h-[0px] overflow-hidden">
                        <div
                          className="p-2 border-none rounded"
                          itemprop="text"
                        >
                          The benefits of Tailwind CSS include rapid
                          prototyping, reusability, and a low learning curve for
                          beginners.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="group"
                    itemscope
                    itemprop="mainEntity"
                    itemtype="https://schema.org/Question"
                  >
                    <input
                      className="peer/option-5 hidden"
                      type="radio"
                      id="option-5"
                      name="options-1"
                    />
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
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </label>
                    <div
                      className="grid grid-rows-[0fr] transition-all duration-150 ease-in-out peer-checked/option-5:grid-rows-[1fr]"
                      itemscope
                      itemprop="acceptedAnswer"
                    >
                      <div className="min-h-[0px] overflow-hidden">
                        <div
                          className="p-2 border-none rounded"
                          itemprop="text"
                        >
                          The benefits of Tailwind CSS include rapid
                          prototyping, reusability, and a low learning curve for
                          beginners.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
