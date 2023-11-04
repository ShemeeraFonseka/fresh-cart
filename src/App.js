import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
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

import CartHome from "../src/components/CartHome";
import Cart from "../src/components/Cart";
import { CartProvider } from 'react-use-cart';


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{background: darkMode ? "black" : "", color: darkMode ? "white" : "",}}>
      <Routes>
      
      <Route path="/" element={<><Navbar /><Intro /><Services /><Experience /><Works /><Portfolio />
      <Testimonial /><Contact /><Footer /></>} />

      <Route path="/login" element={<><LoginForm /></>} />

      <Route path="/adminlogin" element={<><AdminLogin /></>} />

      <Route path="/shop/*" element={<CartProvider><CartHome/><Cart/></CartProvider>} />

        <Route path="/register" element={<><RegisterForm /></>} />
        
        <Route path="/adminLogin" element={<><AdminLogin /></>} />

        <Route path="/products" element={<><ListProductComponent /></>} />

        <Route path="/add-products" element={<><CreateProductComponent /></>} />

        <Route path="/update-products/:id" element={<><UpdateProductComponent /></>} />
      
      </Routes>

    </div>
  );
}

export default App;
