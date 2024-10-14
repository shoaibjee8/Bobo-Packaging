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

function App() {
  const [finalProducts, setFinalProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [cartAllProduct, setCartAllProduct] = useState(() => {
    // Load cart data from localStorage
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const getProducts = () => {
    axios
      .get('https://dummyjson.com/products')
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        setFinalProducts(finalRes.products);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Sync cart data with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartAllProduct));
  }, [cartAllProduct]);

  useEffect(() => {
    if (productId) {
      const filteredObject = finalProducts.find(
        (product) => product.id === parseInt(productId)
      );

      if (filteredObject && !cartAllProduct.some(product => product.id === filteredObject.id)) {
        setCartAllProduct((prevCart) => [...prevCart, filteredObject]);
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
          <Route path="/appearl-category" element={<ApperalCategory />} />
          <Route path="/appreal-child" element={<ApperalChild setProductId={setProductId} />} />
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
