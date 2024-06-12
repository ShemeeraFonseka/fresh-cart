import React from "react";

import "./Navbar.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import NavIcon from "./NavIcon";



const navbar = () => {
  const navigate = useNavigate();

  function navigateLogin(event) {
    navigate("/login");
  }

  function navigateSignup(event) {
    navigate("/register");
  }

  const loginHandler = () => {
    navigate('/login'); 
  };

  return (
    <div className="n-wrapper" id="Navbar">



      <div className="navbar">
        <div className="logo"><a className="freshcart" >Fresh Cart</a></div>

        <ul className="links">

          <li><Link className="nav-a" to="works" spy={true} smooth={true}>Services</Link></li>
          <li><Link className="nav-a" to="contact" spy={true} smooth={true}>Contact Us</Link></li>
        </ul>
        <a onClick={navigateLogin} className="action_btn">Login</a>
        <div className="toggle_btn">
          <NavIcon/>
        </div>
      </div>

      



    </div>
  );
};

export default navbar;
