import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import the NProgress default styles

export default function Blog() {
    const [activeTab, setActiveTab] = useState('tab1'); // Default tab
    const [articles, setPosts] = useState([]);
    const [loading, setLoading] = useState(false); // State to manage loading status

    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // Update active tab
    };
    window.scrollTo(0, 0);

    useEffect(() => {
  
        // Start progress bar
        setLoading(true);
        NProgress.start();

        // Use axios to fetch data
        axios.get('https://freetestapi.com/api/v1/posts')
            .then((response) => {
                console.log(response.data);
                setPosts(response.data);
                setLoading(false); // Stop loading
                NProgress.done();  // Complete the progress bar
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
                setLoading(false); // Stop loading on error
                NProgress.done();  // Complete the progress bar
            });

        // Cleanup function to ensure NProgress is stopped if the component unmounts
        return () => {
            NProgress.done();
        };
    }, []);
  
  return (
    <>

    {/* Optionally, you can display a loading indicator if needed */}
    {loading && <p className='hidden'>Loading...</p>}

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
            <span class="text-[#7EBE43]">Blog Page</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-[url('/blog-images/blog-bg.jpg')] bg-center bg-no-repeat bg-cover lg:py-[70px] md:py-[50px] s:py-[40px]">
      <div class="container mx-auto grid lg:grid-cols-2 s:grid-cols-1 lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <div class="col">
          <div class="bg-[#000] bg-opacity-[0.5] lg:px-9 lg:py-6 md:p-6 s:p-5 rounded-[10px] lg:w-[500px] md:w-[450px]">
            <h1 class="lg:text-[42px] md:text-[38px] s:text-[30px] font-bold text-white font-cairo leading-[56px] s:leading-[40px]">
              Mylar Bags
            </h1>
            <p class="font-barlow font-normal pt-[10px] text-white leading-[30px]">
              Make your concentrates stand out with our concentrate packaging. Available in a multitude of styles and sizes, these packaging solutions offer both functionality and aesthetic appeal at low wholesale prices.
            </p>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </section>

    <section class="container lg:py-[50px] md:py-[50px] s:py-[40px]">
      <div class="w-full">
        {/* <!-- Tabs --> */}
        <ul className="flex s:flex-col s:text-center bg-[#F5F5F5] py-[5px] s:py-[20px] justify-around text-[18px] font-cairo tab-active rounded-[5px] lg:px-0 sm:px-[2rem] md:px-[2rem]">
            <li className="mr-1">
                <button
                    onClick={() => handleTabClick('tab1')}
                    className={`inline-block py-2 px-4 font-semibold focus:outline-none transition duration-300 ease-in-out ${activeTab === 'tab1' ? 'active' : ''}`}
                >
                    All Post
                </button>
            </li>
            <li className="mr-1">
                <button
                    onClick={() => handleTabClick('tab2')}
                    className={`inline-block py-2 px-4 font-semibold focus:outline-none transition duration-300 ease-in-out ${activeTab === 'tab2' ? 'active' : ''}`}
                >
                    Business
                </button>
            </li>
            <li className="mr-1">
                <button
                    onClick={() => handleTabClick('tab3')}
                    className={`inline-block py-2 px-4 font-semibold focus:outline-none transition duration-300 ease-in-out ${activeTab === 'tab3' ? 'active' : ''}`}
                >
                    Culture
                </button>
            </li>
            <li className="mr-1">
                <button
                    onClick={() => handleTabClick('tab4')}
                    className={`inline-block py-2 px-4 font-semibold focus:outline-none transition duration-300 ease-in-out ${activeTab === 'tab4' ? 'active' : ''}`}
                >
                    Product Spotlight
                </button>
            </li>
            <li className="mr-1">
                <button
                    onClick={() => handleTabClick('tab5')}
                    className={`inline-block py-2 px-4 font-semibold focus:outline-none transition duration-300 ease-in-out ${activeTab === 'tab5' ? 'active' : ''}`}
                >
                    Resources
                </button>
            </li>
        </ul>

        {/* <!-- Tab Contents --> */}
       
        <div id="tab1" className={`tab-content transition-opacity duration-500 ${activeTab === 'tab1' ? 'opacity-100' : 'opacity-0'}`}
        style={{ height: activeTab === 'tab1' ? 'auto' : '0', overflow: 'hidden' }}>
          <div class="lg:py-[30px] md:py-[20px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]" style={{paddingBottom:'0px'}}>
          

            


        
        <div className="grid lg:grid-cols-3 md:grid-cols-3 s:grid-cols-1 gap-6 mt-4">
          {articles.map((article, index) => (
            <div className="col" key={index}>
              <div className="group">
                <img
                  src='blog-images/b-img.jpg' // Replace with actual image field if available
                  className="rounded-[5px]"
                  alt="blog images"
                />
                <div className="">
                  <div className="flex items-center text-[14px] mt-3 mb-2">
                    <p className="font-barlow text-[#3e3e3e]">
                      {article.timestamp || 'Unknown Date'}
                    </p>
                    <p className="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                  </div>
                  <Link to={`/blog/${article.id}`}>
                  <h3 className="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                    {article.title}
                  </h3>
                  </Link>
                  <p className="font-barlow">{article.content || 'No description available'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    

          </div>
        </div>
      
       
        <div id="tab2" className={`tab-content transition-opacity duration-500 ${activeTab === 'tab2' ? 'opacity-100' : 'opacity-0'}`}
        style={{ height: activeTab === 'tab2' ? 'auto' : '0', overflow: 'hidden' }}>
          <div class="lg:py-[30px] md:py-[20px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]" style={{paddingBottom:'0px'}}>
            <div class="flex items-center s:flex-col gap-5">
              <div class="col lg:w-[35%] md:w-[40%] s:w-[100%]">
                <div class="group rounded-[10px] border border-[3e3e3e] bg-[#F5F5F5] shadow-md">
                  <img src="blog-images/b-img.jpg" class="rounded-tl-[10px] rounded-tr-[10px]" alt="blog images" />
                  <div class="p-5" style={{paddingTop:'3px'}}>
                    <div class="flex items-center text-[14px] mt-4 mb-3">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px]">Recent</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[7px] lg:text-[22px] md:text-[20px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col lg:w-[65%] md:w-[60%] s:w-[100%]">
                <div class="flex items-center group s:flex-col my-[15px]">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px] lg:max-w-[300px] md:max-w-[200px]" alt="blog images" />
                  <div class="lg:pl-4 md:pl-4 s:pl-0">
                    <div class="flex items-center text-[14px] mb-2 lg:mt-0 md:mt-0 s:mt-3">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[0px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow lg:text-[16px] md:text-[14px]">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024.</p>
                  </div>
                </div>
                <div class="flex items-center group s:flex-col my-[15px]">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px] lg:max-w-[300px] md:max-w-[200px]" alt="blog images" />
                  <div class="lg:pl-4 md:pl-4 s:pl-0">
                    <div class="flex items-center text-[14px] mb-2 lg:mt-0 md:mt-0 s:mt-3">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[0px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow lg:text-[16px] md:text-[14px]">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024.</p>
                  </div>
                </div>
                <div class="flex items-center group s:flex-col my-[15px]">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px] lg:max-w-[300px] md:max-w-[200px]" alt="blog images" />
                  <div class="lg:pl-4 md:pl-4 s:pl-0">
                    <div class="flex items-center text-[14px] mb-2 lg:mt-0 md:mt-0 s:mt-3">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[0px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow lg:text-[16px] md:text-[14px]">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid lg:grid-cols-3 md:grid-cols-3 s:grid-cols-1 gap-6 mt-4">
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
    
        <div id="tab3" className={`tab-content transition-opacity duration-500 ${activeTab === 'tab3' ? 'opacity-100' : 'opacity-0'}`}
        style={{ height: activeTab === 'tab3' ? 'auto' : '0', overflow: 'hidden' }}>
          <div class="lg:py-[30px] md:py-[20px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]" style={{paddingBottom:'0px'}}>
            <div class="flex items-center s:flex-col gap-5">
              <div class="col lg:w-[35%] md:w-[40%] s:w-[100%]">
                <div class="group rounded-[10px] border border-[3e3e3e] bg-[#F5F5F5] shadow-md">
                  <img src="blog-images/b-img.jpg" class="rounded-tl-[10px] rounded-tr-[10px]" alt="blog images" />
                  <div class="p-5" style={{paddingTop:'3px'}}>
                    <div class="flex items-center text-[14px] mt-4 mb-3">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px]">Recent</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[7px] lg:text-[22px] md:text-[20px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col lg:w-[65%] md:w-[60%] s:w-[100%]">
                <div class="flex items-center group s:flex-col my-[15px]">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px] lg:max-w-[300px] md:max-w-[200px]" alt="blog images" />
                  <div class="lg:pl-4 md:pl-4 s:pl-0">
                    <div class="flex items-center text-[14px] mb-2 lg:mt-0 md:mt-0 s:mt-3">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[0px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow lg:text-[16px] md:text-[14px]">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024.</p>
                  </div>
                </div>
                <div class="flex items-center group s:flex-col my-[15px]">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px] lg:max-w-[300px] md:max-w-[200px]" alt="blog images" />
                  <div class="lg:pl-4 md:pl-4 s:pl-0">
                    <div class="flex items-center text-[14px] mb-2 lg:mt-0 md:mt-0 s:mt-3">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[0px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow lg:text-[16px] md:text-[14px]">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024.</p>
                  </div>
                </div>
                <div class="flex items-center group s:flex-col my-[15px]">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px] lg:max-w-[300px] md:max-w-[200px]" alt="blog images" />
                  <div class="lg:pl-4 md:pl-4 s:pl-0">
                    <div class="flex items-center text-[14px] mb-2 lg:mt-0 md:mt-0 s:mt-3">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[0px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow lg:text-[16px] md:text-[14px]">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid lg:grid-cols-3 md:grid-cols-3 s:grid-cols-1 gap-6 mt-4">
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="group">
                  <img src="blog-images/b-img.jpg" class="rounded-[5px]" alt="blog images" />
                  <div class="">
                    <div class="flex items-center text-[14px] mt-3 mb-2">
                      <p class="font-barlow text-[#3e3e3e]">26 January, 2024</p>
                      <p class="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">Business</p>
                    </div>
                    <h3 class="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                      Revolutionizing Meal Packaging: Embrace a Greener Future with These 7....
                    </h3>
                    <p class="font-barlow">Maryland’s burgeoning cannabis market, projected to be a billion-dollar industry by 2024, has become a beacon of opportunity for aspiring business owners.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
       
      </div>
    </section>

    </>
  )
}
