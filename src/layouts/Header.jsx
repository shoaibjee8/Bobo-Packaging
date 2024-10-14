import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header({ cartAllProduct }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const toggleSubmenu = (e) => {
    e.preventDefault();
    setIsSubmenuOpen(prevState => !prevState);
  };


  // searchItem user data fetching logic

  const [searchItem, setSearchItem] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1); // Track the selected list item index

  // Example user data, replace this with your actual user data fetching logic
  const users = [
    { id: 1, firstName: 'John' },
    { id: 2, firstName: 'Jane' },
    { id: 3, firstName: 'Doe' },
    // Add more users as needed
  ];

// Filter users based on the search input
useEffect(() => {
  if (searchItem) {
    const filtered = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredUsers(filtered);
  } else {
    setFilteredUsers([]);
  }
}, [searchItem]); // Removed `users` from dependencies since it doesn’t change

  // Handle keyboard navigation
useEffect(() => {
  const handleKeyDown = (e) => {
    if (filteredUsers.length > 0) {
      if (e.key === 'ArrowDown') {
        setSelectedIndex((prevIndex) =>
          prevIndex < filteredUsers.length - 1 ? prevIndex + 1 : 0
        );
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        setSelectedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : filteredUsers.length - 1
        );
        e.preventDefault();
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        // Handle Enter key to navigate to the selected user's link
        window.location.href = `/${filteredUsers[selectedIndex].id}`;
        e.preventDefault();
      }
    }
  };

  if (searchItem) {
    window.addEventListener('keydown', handleKeyDown);
  }

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [filteredUsers, selectedIndex, searchItem]); // `selectedIndex` should not directly affect other state updates


    // Add the keydown event listener
    const handleKeyDown = (e) => {
      if (filteredUsers.length > 0) {
        if (e.key === 'ArrowDown') {
          setSelectedIndex((prevIndex) => {
            const newIndex = prevIndex < filteredUsers.length - 1 ? prevIndex + 1 : 0;
            return newIndex !== prevIndex ? newIndex : prevIndex; // Avoid redundant state update
          });
          e.preventDefault();
        } else if (e.key === 'ArrowUp') {
          setSelectedIndex((prevIndex) => {
            const newIndex = prevIndex > 0 ? prevIndex - 1 : filteredUsers.length - 1;
            return newIndex !== prevIndex ? newIndex : prevIndex; // Avoid redundant state update
          });
          e.preventDefault();
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
          window.location.href = `/${filteredUsers[selectedIndex].id}`;
          e.preventDefault();
        }
      }
    };
    

    // // State for controlling the sidebar visibility
    //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    //   // Function to toggle the sidebar
    //   const toggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen);
    //   };

    //   // Function to close the sidebar
    //   const closeSidebar = () => {
    //     setIsSidebarOpen(false);
    //   };

  return (
    <>
      <header>
        <nav>
          <div className="bg-mainColor">
            <div className="container mx-auto flex justify-between items-center gap-5 s:gap-2 s:flex-col px-2 py-2 lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
              <div className="col lg:w-[25%] md:w-[25%] s:w-[100%]">
                <a href="#" className="block text-white s:text-center">
                  <p className="font-barlow">Call Us: 999-99-999</p>
                </a>
              </div>
              <div className="col lg:w-[50%] md:w-[50%] s:w-[100%] relative">
                <div className="flex items-center justify-between">
                  <ul className="hidden md:flex space-x-6 z-10 font-barlow">
                    <li className="flex items-center relative group">
                      <i className="fa-solid fa-list-ul text-white"></i>
                      <a href="industry.php" className="ml-2 text-white font-[500]">All Industry</a>
                      {/* Submenu */}
                      <ul className="absolute bg-white py-1 w-52 top-8 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-md">
                        <li className="text-sm leading-8 transition-colors duration-150 ease-in-out hover:bg-mainColor hover:text-white px-3">
                          <a href="#">Webdesign</a>
                        </li>
                        <li className="text-sm leading-8 transition-colors duration-150 ease-in-out hover:bg-mainColor hover:text-white px-3">
                          <a href="#">Appdesign</a>
                        </li>
                        <li className="text-sm leading-8 transition-colors duration-150 ease-in-out hover:bg-mainColor hover:text-white px-3">
                          <a href="#">Webdesign</a>
                        </li>
                        {/* More submenu items */}
                      </ul>
                    </li>
                  </ul>

                  <form className="relative lg:w-[430px] md:w-[280px] s:block s:mx-auto lg-sc-w">
                    <input value={searchItem}
                      onChange={(e) => {
                        setSearchItem(e.target.value);
                        setSelectedIndex(-1); // Reset the selected index when the input changes
                      }} type="text" id="search" name="search" placeholder="Search......" className="w-full px-3 py-1 pr-16 border border-gray-300 rounded-[5px] placeholder-black focus:outline-none text-[15px]" />
                                  <i className="fa-solid fa-magnifying-glass absolute right-4 top-[8px] text-[#bbb]"></i>
                                </form>
                              </div>
                              {/* Show the list only when there is input */}
                    {searchItem && (
                      <div className="absolute top-[35px] right-0 w-[430px] bg-white p-2 shadow-lg">
                        {filteredUsers.length === 0 ? (
                          <p>No users found</p>
                        ) : (
                          <ul className="gap-y-2 text-[15px]">
                            {filteredUsers.map((user, index) => (
                              <a href={`/${user.id}`} key={user.id}>
                                <li
                                  className={`p-1 border-b border-mainColor cursor-pointer ${
                                    selectedIndex === index
                                      ? 'bg-[#659b33] text-white' // Highlight selected item
                                      : 'hover:bg-[#f5f5f5]'
                                  }`}
                                >
                                  {user.firstName}
                                </li>
                              </a>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

              </div>
              <div className="col lg:w-[25%] md:w-[25%] s:w-[100%]">
                <a href="#" className="block text-white float-right s:float-none s:text-center">
                  <p className="font-barlow">Email: bobopackaging@.com</p>
                </a>
              </div>
            </div>
          </div>

          <div className="container mx-auto flex justify-between items-center py-3 lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
            <NavLink to={'/'}>
              <img src="/home-images/bobo-packaging.svg" className="md:w-[135px] lg:w-auto" alt="Tailwindcss Navigation" />
              </NavLink>
            <div className="md:hidden lg:block mx-auto">
            <ul className="hidden md:flex space-x-8 font-barlow font-[500] lg-sc-nav items-center">
              <li><a href="industry.php" className="hover:text-mainColor transition-colors duration-300">Smoke Packaging</a></li>
              <li><a href="#" className="hover:text-mainColor transition-colors duration-300">Vape Equipment</a></li>
              <li><a href="#" className="hover:text-mainColor transition-colors duration-300">Supplies & Machinery</a></li>
              <li><a href="shop.php" className="hover:text-mainColor transition-colors duration-300">Shop</a></li>
              <li><a href="#" className="hover:text-mainColor transition-colors duration-300">Pollen Gear</a></li>
              <li><a href="#" className="hover:text-mainColor transition-colors duration-300">Clearance</a></li>
              <li>
                {/* Toggle button */}
                <NavLink to={'/cart'}
                  className="hover:text-mainColor transition-colors duration-300 cursor-pointer"
                  // id="toggle-sidebar"
                  // onClick={toggleSidebar}
                >
                  <div className="relative">
                    <span className="rounded-full bg-mainColor py-[2px] px-[9px] text-white font-barlow absolute right-[-10px] top-[-10px] text-[14px]">
                    {cartAllProduct.length}
                    </span>
                    <img src="/home-images/shopping-cart.svg" alt="shopping-cart" />
                  </div>
                </NavLink>
            </li>
            </ul>
            </div>
            <button
              className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[15px] overflow-hidden transition-all duration-300 ease-in-out group s:hidden md:ml-auto lg:ml-[0px] lg:mr-[0px] md:mr-[30px]"
              role="button"
            >
              <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
              <span className="relative z-10">Order Now</span>
            </button>

            {/* Mobile menu icon */}
            <button
              id="mobile-icon"
              className="lg:hidden"
              onClick={toggleMenu}
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute w-full top-[180px] bg-gray-100 shadow-lg z-10`}>
            <ul className="font-barlow font-[500] leading-9">
              <li className="border-b-2 border-white hover:bg-[#7EBE43] hover:text-white pl-4 transition-colors duration-300">
                <a href="#" className="block">Home</a>
              </li>
              {/* More mobile menu items */}
              <li className="border-b-2 border-white hover:bg-[#7EBE43] hover:text-white pl-4 transition-colors duration-300">
                <a href="#" onClick={toggleSubmenu} className="block flex items-center justify-between">
                  Services <i className={`relative right-[20px] fa-solid fa-chevron-down ml-2 transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`}></i>
                </a>
                {/* Submenu */}
                {isSubmenuOpen && (
                  <ul className="bg-white text-gray-800 w-full">
                    <li className="text-sm leading-8 hover:bg-[#7EBE43] hover:text-white pl-12 transition-colors duration-300">
                      <a href="#">Webdesign</a>
                    </li>
                    {/* More submenu items */}
                  </ul>
                )}
              </li>
              <li className="border-b-2 border-white hover:bg-[#7EBE43] hover:text-white pl-4 transition-colors duration-300">
                <a href="#" className="block">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>



      {/* <!----------------------- SideBar View Start ----------------> */}
    {/* <div className={`side-bar fixed top-0 h-full w-[500px] bg-white shadow-lg transition-all duration-500 ease-in-out z-20 ${
          isSidebarOpen ? 'right-0' : 'right-[-500px]'
        }`}>
         <div className="cart-details p-5">
            <div className="flex items-center justify-between border-b-[3px] border-mainColor pb-4">
               <h4 className="text-mainColor font-cairo font-semibold text-[26px]">My Shopping Cart (1)</h4>
               <i id="close-sidebar" onClick={closeSidebar} className="fa-solid fa-xmark border border-mainColor px-2 py-[6px] rounded-full bg-mainColor text-white cursor-pointer"></i>
            </div>

            <div className="add-cart-list my-7 overflow-y-auto max-h-[300px]">
               <div className="flex items-center justify-between border-b border-mainColor pb-3 gap-4 my-[20px]">
                  <img src="/product-images/p1.jpg" alt="poly bubble mailers" className="w-[80px] rounded-[5px]" />
                  <h6 className="font-cairo font-semibold text-[17px]">Straight Sided Clear Glass Jars | 38mm - 1oz - 256 Count</h6>
                  <i className="fa-solid fa-trash border border-mainColor px-2 py-[8px] rounded-full bg-mainColor text-white cursor-pointer mr-3"></i>
               </div>
               <div className="flex items-center justify-between border-b border-mainColor pb-3 gap-4 my-[20px]">
                  <img src="/product-images/p1.jpg" alt="poly bubble mailers" className="w-[80px] rounded-[5px]" />
                  <h6 className="font-cairo font-semibold text-[17px]">Straight Sided Clear Glass Jars | 38mm - 1oz - 256 Count</h6>
                  <i className="fa-solid fa-trash border border-mainColor px-2 py-[8px] rounded-full bg-mainColor text-white cursor-pointer mr-3"></i>
               </div>
               <div className="flex items-center justify-between border-b border-mainColor pb-3 gap-4 my-[20px]">
                  <img src="/product-images/p1.jpg" alt="poly bubble mailers" className="w-[80px] rounded-[5px]" />
                  <h6 className="font-cairo font-semibold text-[17px]">Straight Sided Clear Glass Jars | 38mm - 1oz - 256 Count</h6>
                  <i className="fa-solid fa-trash border border-mainColor px-2 py-[8px] rounded-full bg-mainColor text-white cursor-pointer mr-3"></i>
               </div>
            </div>
            <div className="flex items-center justify-between border-b border-mainColor pb-3 gap-4 my-[20px]">
               <h6 className="font-cairo font-semibold text-[18px]">Shipping</h6>
               <h6 className="font-cairo font-semibold text-[18px]">Calculated at checkout</h6>
            </div>
            <div className="flex items-center justify-between border-b border-mainColor pb-3 gap-4 my-[20px]">
               <h6 className="font-cairo font-semibold text-[18px]">Total Price</h6>
               <h6 className="font-cairo font-semibold text-[18px]">$59.00 USD</h6>
            </div>
            <button
               className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[17px] overflow-hidden transition-all duration-300 ease-in-out group s:hidden md:ml-auto lg:ml-[0px] lg:mr-[0px] md:mr-[30px] w-full"
               role="button"
            >
               <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
               <span className="relative z-10">Checkout</span>
            </button>
         </div>
      </div> */}
      {/* <!----------------------- SideBar View End ----------------> */}
    </>
  );
}
