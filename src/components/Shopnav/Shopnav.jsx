import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "../Navbar/Navbar.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import './Shopnav.css';


const Shopnav = ({ cartItemCount }) => {
  const navigate = useNavigate();

  function navigateLogin(event) {
    navigate("/login");
  }

  function navigateHome(event) {
    navigate("/");
  }

  function navigateItems(event) {
    navigate("/items");
  }


  
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name" onClick={navigateHome}>Fresh Cart</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="shoppingportfolio" spy={true} smooth={true}>
                Hot Deals
              </Link>
            </li>
            <li>
              <Link to="tea" spy={true} smooth={true}>
                Tea & Coffee
              </Link>
            </li>
            <li>
              <Link to="dairy" spy={true} smooth={true}>
                Dairy
              </Link>
            </li>

            <li>
              <Link to="household" spy={true} smooth={true}>
                Vegetables
              </Link>
            </li>

            <li>
              <Link to="fruits" spy={true} smooth={true}>
                Fruits
              </Link>
            </li>


            <li>
              <Link to="beverages" spy={true} smooth={true}>
                Beverages
              </Link>
            </li>

            <li>
              <Link to="health" spy={true} smooth={true}>
                Health & Beauty
              </Link>
            </li>



          </ul>
        </div>
        <ShoppingCart className="cart-icon"  onClick={navigateItems}/>
        <div className="number">{cartItemCount}</div>
      </div>
      
    </div>
  );
};

export default Shopnav;
