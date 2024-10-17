import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Industry from "./Industry";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Error from "./Error";
import ApperalCategory from "./ApperalCategory";
import ApperalChild from "./ApperalChild";
import Product from "./Product";
import Contact from "./Contact";
import Terms from "./Terms";
import ThankYou from "./ThankYou";
import AllProducts from "./AllProducts";
import Shop from "./Shop";
import Blog from "./Blog";
import SingleBlog from "./SingleBlog";
import Cart from "./Cart";
import axios from 'axios';
import { API_URL } from "./config";

function App() {
  const [finalProducts, setFinalProducts] = useState([]); // Ensure it's initialized as an empty array
  const [productId, setProductId] = useState('');
  const [cartAllProduct, setCartAllProduct] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const getProducts = async () => {
    try {
      const proRes = await axios.get(`${API_URL}/api/get-products`);
      if (Array.isArray(proRes.data)) { // Check if response is an array
        setFinalProducts(proRes.data);
        console.log(proRes.data);
      } else {
        console.error('Expected an array but received:', proRes.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartAllProduct));
  }, [cartAllProduct]);

  useEffect(() => {
    if (productId) {
      const filteredObject = finalProducts.find(
        (product) => product.id === parseInt(productId.id)
      );
  
      if (filteredObject && !cartAllProduct.some(product => product.id === filteredObject.id)) {
        const productWithPrice = { ...filteredObject, price: parseFloat(productId.currentPrice) };
        setCartAllProduct((prevCart) => [...prevCart, productWithPrice]);
      }
    }
  }, [productId, finalProducts]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header cartAllProduct={cartAllProduct} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industry />} />
          <Route path="/industries/:id" element={<ApperalCategory />} />
          <Route path="/shop/:id" element={<ApperalChild setProductId={setProductId} />} />
          <Route path="/product/:id" element={<Product setProductId={setProductId} />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/terms-condition" element={<Terms />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
