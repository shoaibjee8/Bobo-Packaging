import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import NProgress styles
import { API_URL } from "./config";

export default function SingleBlog() {
  const [article, setArticle] = useState({}); // Initialize as an empty object
  const uselocation = useLocation();
  const currentId = uselocation.pathname.split('/')[2];
  const [loading, setLoading] = useState(false); // Loading state to manage progress
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from the API
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/api/get-blogs`);
      const fetchedBlogs = response.data.data.blog;

      // Sort blogs by date and select the recent 8
      const sortedBlogs = fetchedBlogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setBlogs(sortedBlogs.slice(0, 8)); // Take the recent 8 blogs
      console.log(sortedBlogs.slice(0, 8));
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Start the progress bar and loading state
    setLoading(true);
    NProgress.start();

    // Use axios to fetch the blog post
    axios.get(`${API_URL}/api/get-blogs/${currentId}`)
      .then((response) => {
        console.log(response.data.data);
        setArticle(response.data.data);
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

  useEffect(() => {
    const $productSlider = $('.slick-related-product');
  
    const initSlickProduct = () => {
      if ($productSlider.length) {
        $productSlider.slick({
          slidesToShow: 3,
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
  
    // Initialize the slick product slider
    initSlickProduct();
  
    // Cleanup function to unslick the slider
    return () => {
      if ($productSlider.length) {
        $productSlider.slick('unslick');
      }
    };
  }, [blogs]); // Re-initialize slick on blogs change

  function createMarkup(content) {
    return { __html: content };
  }



  return (
    <>
      {loading && <p className='hidden'>Loading...</p>} {/* Show loading message or spinner */}

      <section className="bg-[rgb(192,228,158,0.28)] py-2">
        {/* Breadcrumbs */}
      </section>

      <section className="bg-[#f5f5f5] lg:py-[90px] md:py-[50px] s:py-[40px]">
        <div className="container mx-auto lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
          <h1 className="lg:text-[38px] md:text-[34px] s:text-[26px] font-semibold font-cairo leading-[50px] s:leading-[36px]">
            {article.heading}
          </h1>
        </div>
      </section>

      <section className="lg:py-[50px] md:py-[50px] s:py-[40px]">
        <div className="container flex gap-5 s:flex-col lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
          <div className="col lg:w-[65%] md:w-[60%] s:w-[100%]">
            <div className="long-content">
              <img
                src={`${API_URL}/blog-images/${article.main_img}`} // Replace with actual image field if available
                className="rounded-[5px] mb-5"
                alt={article.main_img_alt}
              />
              <h2>{article.title}</h2>
              <div className="font-barlow" dangerouslySetInnerHTML={createMarkup(article.content)}></div>
            </div>
          </div>
          <div className="col lg:w-[35%] md:w-[50%] s:w-[100%]">
            <div className="side-bar">
              <h6 className="font-cairo font-semibold text-[25px] ml-2 mb-2">Categories</h6>
              <ul className="font-barlow flex flex-wrap items-center text-[14px]">
                <li className="bg-[#e3ebf5] px-[20px] py-[5px] hover:bg-mainColor hover:text-white transition-all duration-150 m-2">Business</li>
                {/* Add more categories as needed */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5]">
        <div className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
          <div className="row">
            <h2 className="lg:text-[45px] md:text-[38px] s:text-[32px] font-bold font-cairo leading-[45px] s:leading-[35px]">Our Recent <span className="text-mainColor">Articles</span></h2>
            <p className="font-barlow font-normal py-[18px] leading-[28px]">
              Looking for custom apparel boxes wholesale to present, promote, and protect your apparel items? Our apparel boxes are one of the most cost-effective, eco-friendly, ideally branded, and appealing packaging solutions. We design each
              apparel box according to products and market standards.
            </p>
          </div>

          {blogs.length > 0 ? (
      <div className="slick-related-product">
        {blogs.map((blog) => (
          <div className="group" key={blog.id}>
          <Link to={`/blog/${blog.url}`}>
            <img src={`${API_URL}/blog-images/${blog.main_img}`} className="rounded-[5px]" alt={blog.main_img_alt} />
            </Link>
            <div>
              <div className="flex items-center text-[14px] mt-3 mb-2">
                <p className="font-barlow text-[#3e3e3e]">{blog.created_at || 'Unknown Date'}</p>
                <p className="font-barlow bg-mainColor text-white py-[1px] px-[7px] mx-[10px]">
                  {Array.isArray(JSON.parse(blog.cats)) ? JSON.parse(blog.cats).join(', ') : blog.cats}
                </p>
              </div>
              <Link to={`/blog/${blog.url}`}>
              <h3 className="font-cairo font-semibold my-[5px] lg:text-[20px] md:text-[18px] s:text-[19px] group-hover:text-mainColor transition-all duration-150">
                {blog.heading}
              </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="font-barlow text-center py-4">No related articles available.</p>
    )}
        </div>
      </section>
    </>
  );
}
