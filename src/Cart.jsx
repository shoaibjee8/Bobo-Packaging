import React, { useMemo, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Import the NProgress default styles

export default function Cart({ cartAllProduct, setCartAllProduct }) {
  const [loading, setLoading] = useState(true);
  window.scrollTo(0, 0);
  useEffect(() => {
    NProgress.start();
    setTimeout(() => {
      setLoading(false);
      NProgress.done();
    }, 500);

    return () => {
      NProgress.done();
    };
  }, []);

  const totalPrice = useMemo(() => {
    return cartAllProduct.reduce((acc, product) => acc + product.price, 0);
  }, [cartAllProduct]);

  const handleDeleteItem = (id) => {
    const filteredItem = cartAllProduct.filter((item) => item.id !== id);
    setCartAllProduct(filteredItem);
    toast.error("Product Deleted Successfully!");
  };

  return (
    <>
    {/* Optionally, you can display a loading indicator if needed */}
    {loading && <p className='hidden'>Loading...</p>}

      <Toaster />
      <section className="container lg:py-[50px] md:py-[40px] s:py-[30px] lg:px-[0rem] s:px-[2rem] md:px-[2rem] sl:px-[2rem]">
        <div className="row flex items-center gap-5 s:flex-col lg:px-[0rem] s:px-[0rem] md:px-[2rem] sl:px-[2rem]">
          <div className="col lg:w-[70%] md:w-[40%] s:w-[100%]">
            <div className="cart-details">
              <div className="flex items-center justify-between border-b-[3px] border-mainColor pb-4">
                <h4 className="text-mainColor font-cairo font-semibold text-[26px]">
                  My Shopping Cart ({cartAllProduct.length})
                </h4>
              </div>

              {cartAllProduct.length === 0 ? (
                <div className="col-12">
                  <h1 className="font-cairo font-semibold text-[20px] text-center py-[20px]">
                    No Products Available in Cart
                  </h1>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100 text-dark uppercase font-cairo font-semibold text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Product</th>
                        <th className="py-3 px-4 text-left">Title</th>
                        <th className="py-3 px-4 text-left">Price</th>
                        <th className="py-3 px-4 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-md font-barlow font-normal">
                      {cartAllProduct.map((product) => (
                        <tr
                          key={product.id}
                          className="border-b border-gray-200 hover:bg-gray-100"
                        >
                          <td className="py-3 px-6 flex items-center">
                            <img
                              src={product.images}
                              className="w-[100px] rounded-[5px] border border-mainColor"
                              alt={product.title}
                            />
                          </td>
                          <td className="py-2 px-4">{product.title}</td>
                          <td className="py-2 px-4">
                            ${product.price.toFixed(2)}
                          </td>
                          <td className="py-2 px-4">
                            <i
                              onClick={() => handleDeleteItem(product.id)}
                              className="fa-solid fa-trash border border-mainColor px-2 py-[8px] rounded-full bg-mainColor text-white cursor-pointer"
                            ></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="flex items-center justify-between border-b border-mainColor pb-3 gap-4 my-[20px]">
                <h6 className="font-cairo font-semibold text-[18px]">
                  Shipping
                </h6>
                <h6 className="font-cairo font-semibold text-[18px]">
                  Calculated at checkout
                </h6>
              </div>

              <div className="flex items-center justify-between border-b border-mainColor pb-3 gap-4 my-[20px]">
                <h6 className="font-cairo font-semibold text-[18px]">
                  Total Price
                </h6>
                <h6 className="font-cairo font-semibold text-[18px]">
                  ${totalPrice.toFixed(2)} USD
                </h6>
              </div>

              {/* Conditionally show Checkout Button if totalPrice is greater than 0 */}
              {totalPrice > 0 && (
                <button className="relative bg-mainColor px-[22px] py-[10px] text-white font-barlow rounded-[5px] text-[17px] overflow-hidden transition-all duration-300 ease-in-out group s:hidden md:ml-auto lg:ml-[0px] lg:mr-[0px] md:mr-[30px] w-full">
                  <span className="absolute inset-0 bg-[#659b33] transition-all duration-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
                  <span className="relative z-10">Checkout</span>
                </button>
              )}
            </div>
          </div>

          <div className="col lg:w-[30%] md:w-[60%] s:w-[100%]"></div>
        </div>
      </section>
    </>
  );
}
