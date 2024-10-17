import { useState, useEffect } from "react";
import axios from "axios";
import NProgress from "nprogress"; // Import NProgress
import "nprogress/nprogress.css"; // Import NProgress CSS
import { API_URL } from "./config";
import { Link } from "react-router-dom";


export default function Industry() {


  const [categories, setCategories] = useState([]); // State for categories
  const [cateError, setCategoriesError] = useState(false); // State to handle errors

  useEffect(() => {
    // Start NProgress when the request is initiated
    NProgress.start();

    // Fetch categories from the API
    axios
      .get(`${API_URL}/api/get-categories`)
      .then((response) => {
        setCategories(response.data);
        NProgress.done(); // Stop NProgress once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching category data", error);
        setCategoriesError(true); // Handle error
        NProgress.done(); // Stop NProgress on error
      });

    // Optional: Clean up if needed
    return () => {
      NProgress.done(); // Ensure NProgress is done when component is unmounted
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

          {/* Separator */}
          <li className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </li>

          {/* <!-- Current Page --> */}
          <li>
            <span className="text-[#7EBE43]">Industry Page</span>
          </li>
        </ul>
      </div>
    </section>

    <section className="bg-[url('category-images/category-bg.jpg')] bg-center bg-no-repeat bg-cover lg:py-[70px] md:py-[50px] s:py-[40px]">
      <div className="container mx-auto grid lg:grid-cols-2 s:grid-cols-1 lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <div className="col">
          <div className="bg-[#000] bg-opacity-[0.5] lg:px-9 lg:py-6 md:p-6 s:p-5 rounded-[10px] lg:w-[500px] md:w-[450px]">
            <h1 className="lg:text-[42px] md:text-[38px] s:text-[30px] font-bold text-white font-cairo leading-[56px] s:leading-[40px]">
              Industries
            </h1>
            <p className="font-barlow font-normal pt-[10px] text-white leading-[30px]">
              Make your concentrates stand out with our concentrate packaging. Available in a multitude of styles and sizes, these packaging solutions offer both functionality and aesthetic appeal at low wholesale prices.
            </p>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </section>

    <section className="container grid lg:grid-cols-5 md:grid-cols-4 s:grid-cols-2 gap-5 lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
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
    </>
  )
}
