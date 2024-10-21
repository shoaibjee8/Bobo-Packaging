import React, { useEffect } from 'react';

export default function Model({ isOpen, closeModal }) {
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden'; // Prevent body scrolling when modal is open
    } else {
      body.style.overflow = 'auto'; // Restore body scrolling
    }
  }, [isOpen]);

  return (
    <>
      <div className={`modal-overlay ${isOpen ? 'active' : ''}`}>
        <div className={`modal-content ${isOpen ? 'active' : ''}`}>
          <div className="py-2 px-4 flex items-center justify-between border-b border-b-gray-300">
            <h3 className="font-bold text-xl">Customized Product</h3>
            <span
              className="modal-close cursor-pointer border border-mainColor rounded-full px-2 text-[18px] bg-mainColor text-white font-bold"
              onClick={closeModal}
            >
              ×
            </span>
          </div>
          <div className="p-4">
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
    </>
  );
}
