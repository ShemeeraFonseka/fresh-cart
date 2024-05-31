import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

import LoginForm from "./components/loginForm";
import RegisterForm from './components/registerForm';
import AdminLogin from './components/adminLogin';

import { Routes, Route } from 'react-router-dom';
import ListProductComponent from "./components/ListProductComponent";
import CreateProductComponent from "./components/CreateProductComponent";
import UpdateProductComponent from "./components/UpdateProductComponent";


import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Items from "./components/Items/Items";
import ShopItems from "./components/ShopItems/ShopItems";
import Checkout from "./components/Checkout";

import { CartProvider } from "./components/CartContext";






function App() {

  return (
    <CartProvider>
    
      <Routes>
      
      <Route path="/" element={<><Navbar /><Intro /><Works /><Experience />
      <Contact /><Footer /></>} />

      <Route path="/login" element={<><LoginForm /></>} />

      <Route path="/adminlogin" element={<><AdminLogin /></>} />



        <Route path="/register" element={<><RegisterForm /></>} />
        
        <Route path="/adminLogin" element={<><AdminLogin /></>} />

        <Route path="/products" element={<><ListProductComponent /></>} />

        <Route path="/add-products" element={<><CreateProductComponent /></>} />

        <Route path="/update-products/:id" element={<><UpdateProductComponent /></>} />

        

        <Route path="/shopping-cart" element={<><ShoppingCart /></>} />

        <Route path="/items" element={<><Items /></>} />

        

        <Route path="/shop-items" element={<><ShopItems /></>} />

        <Route path="/checkout" element={<><Checkout /></>} />
      
      </Routes>

      </CartProvider>
   
  );
}

export default App;
