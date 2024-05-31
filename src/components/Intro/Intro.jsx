import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Vector3 from "../../img/Vector3.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import basket from "../../img/basket.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const navigate = useNavigate();

  function navigateLogin(event) {
    navigate("/login");
  }


  return (
    <div className="Intro" id="Intro">
      {/* left name side */}


      {/* right image side */}
      <div className="i-right">
        <div>
          <img className="basket" src={basket} />
        </div>
      </div>

      <div className="i-left">
        <div className="i-name">

          <h1 className="fresh">It's always fresh</h1>

          <span style={{ textAlign: "justify", paddingRight: "0px", lineHeight: "34px" }}>
            At Fresh Cart, our unwavering dedication lies in meticulously sourcing the highest quality ingredients for our customers. From ripe, juicy tomatoes to artisanal cheeses, our expert team hand-selects each item to ensure unparalleled freshness and flavor in every bite. With a commitment to offering a diverse range of products to suit every taste and recipe, we strive to elevate your culinary experience to new heights.

            Experience the convenience of our seamless delivery service, allowing you to spend less time at the store and more time savoring delicious meals with your loved ones. Join the Fresh Cart family today and unlock a world of culinary possibilities, where premium ingredients meet exceptional taste, and every dish becomes an unforgettable masterpiece.</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
