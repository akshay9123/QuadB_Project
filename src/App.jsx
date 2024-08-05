import React from "react";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/shop" element={ <Shop/> } />
          <Route path="/product" element={ <Product/> } />
          <Route path="/contactUs" element={ <ContactUs/> } />
          <Route path="/cart" element={ <Cart/> } />
          <Route path="/login" element={ <LoginSignup/> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
