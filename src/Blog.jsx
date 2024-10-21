import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import NProgress styles
import { API_URL } from './config';

const BlogPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('All Posts');
  const [fade, setFade] = useState(false);

  // Fetch blogs from the API
  const fetchBlogs = async () => {
    setLoading(true);
    NProgress.start(); // Start NProgress when loading begins
    try {
      const response = await axios.get(`${API_URL}/api/get-blogs`);
      setBlogs(response.data.data.blog);
      setFilteredBlogs(response.data.data.blog); // Set initial filtered blogs
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
      NProgress.done(); // Finish NProgress when loading ends
    }
  };

  // Filter blogs by category
  const filterBlogs = (category) => {
    setFade(true); // Trigger fade out before content changes
    setTimeout(() => {
      setActiveTab(category);
      if (category === 'All Posts') {
        setFilteredBlogs(blogs);
      } else {
        const filtered = blogs.filter((blog) => {
          let categories = [];
          try {
            categories = JSON.parse(blog.cats);
          } catch (error) {
            categories = blog.cats ? [blog.cats] : [];
          }
          return Array.isArray(categories) && categories.includes(category);
        });
        setFilteredBlogs(filtered);
      }
      setFade(false); // Trigger fade in after content changes
    }, 300); // Match this timeout with your CSS transition duration
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  function createMarkup(content) {
    const maxLength = 150;
    const trimmedContent = content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
    return { __html: trimmedContent };
}

  if (loading) {
    return <div className='hidden'>Loading...</div>;
  }

  return (
    <>
       <section className="bg-[rgb(192,228,158,0.28)] py-2">
                <div className="container mx-auto lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
                    <ul className="flex items-center space-x-2 font-barlow font-[500] text-white text-[14px]">
                        <li>
                            <Link to={"/"} className="hover:text-[#000] text-[#7EBE43] transition-colors duration-300 flex items-center">
                                <i className="fa-solid fa-house"></i>
                            </Link>
                        </li>
                        <li className="text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </li>
                        <li>
                            <span className="text-[#7EBE43]">Blog</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="bg-[url('/blog-images/blog-bg.jpg')] bg-center bg-no-repeat bg-cover lg:py-[70px] md:py-[50px] s:py-[40px]">
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

      {/* Tabs */}
      <section className="container lg:py-[50px] md:py-[50px] s:py-[40px]">
        <div className="w-full">
          <ul className="flex s:flex-col s:text-center bg-[#F5F5F5] py-[5px] s:py-[20px] justify-around text-[18px] font-cairo rounded-[5px]">
            <li className="mr-1">
              <button
                onClick={() => filterBlogs('All Posts')}
                className={`inline-block py-2 px-4 font-semibold focus:outline-none transition duration-300 ease-in-out ${
                  activeTab === 'All Posts' ? 'text-[#7EBE43]' : ''
                }`}
              >
                All Posts
              </button>
            </li>
            <li className="mr-1">
              <button
                onClick={() => filterBlogs('Business')}
                className={`inline-block py-2 px-4 font-semibold focus:outline-none transition duration-300 ease-in-out ${
                  activeTab === 'Business' ? 'text-[#7EBE43]' : ''
                }`}
              >
                Business
              </button>
            </li>
            <li className="mr-1">
              <button
                onClick={() => filterBlogs('Culture')}
                className={`inline-block py-2 px-4 font-semibold focus:outline-none transition duration-300 ease-in-out ${
                  activeTab === 'Culture' ? 'text-[#7EBE43]' : ''
                }`}
              >
                Culture
              </button>
            </li>
            <li className="mr-1">
              <button
                onClick={() => filterBlogs('Product Spotlight')}
                className={`inline-block py-2 px-4 font-semibold focus:outline-none transition duration-300 ease-in-out ${
                  activeTab === 'Product Spotlight' ? 'text-[#7EBE43]' : ''
                }`}
              >
                Product Spotlight
              </button>
            </li>
            <li className="mr-1">
              <button
                onClick={() => filterBlogs('Resources')}
                className={`inline-block py-2 px-4 font-semibold focus:outline-none transition duration-300 ease-in-out ${
                  activeTab === 'Resources' ? 'text-[#7EBE43]' : ''
                }`}
              >
                Resources
              </button>
            </li>
          </ul>

          {/* Blog Posts */}
          <div className='lg:py-[30px] md:py-[20px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]'>
          <div className={`grid lg:grid-cols-3 md:grid-cols-3 s:grid-cols-1 gap-6 mt-4 ${fade ? 'fade-out' : 'fade-in'}`}>
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="col">
                <div className="group">
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
                    <p className="font-barlow" dangerouslySetInnerHTML={createMarkup(blog.content)}></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPosts;
