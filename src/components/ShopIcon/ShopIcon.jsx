import React from "react";
import Toggle from "../Toggle/Toggle";
import "../Navbar/Navbar.css";
import { Link } from "react-scroll";
import {useNavigate} from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import "../ShopIcon/ShopIcon.css";


const ShopIcon = () => {
  const navigate=useNavigate();
  
  

  return (
    <div>
    <div className="shopicon">
        <ShoppingCart />
        
    </div>
    <div>3</div>
    </div>
    
  );
};

export default ShopIcon;
