import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        
          {/* dark Mode */}
          <h1 className="fresh" >
            Fresh Online Orders
          </h1>
          
          <span style={{ textAlign: "justify", paddingRight: "0px", lineHeight: "34px" }}>
            Experience the unparalleled convenience and culinary delight with Fresh Cart. Our service offers a seamless and hassle-free way to access premium-quality ingredients sourced directly from local farms. Whether you're exploring new recipes or seeking inspiration for your culinary creations, Fresh Cart delivers a curated selection of farm-fresh produce, creamy dairy delights, and gourmet treasures right to your doorstep. Embrace the joy of cooking with seasonal selections that celebrate the vibrant flavors of each time of year. Join us on a journey of taste exploration and elevate your culinary experience with Fresh Cart.
          </span>

          <div
            className="blur s-blur1"
            style={{ background: "#c4f593" }}
          ></div>
        

        
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 9.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
