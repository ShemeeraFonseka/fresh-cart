import React, { useContext } from "react";
import "./Intro.css";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Vector3  from "../../img/Vector3.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { useNavigate } from "react-router-dom";

import LoginForm from "../loginForm";

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

function navigateAdmin(event) {
  navigate("/adminlogin");
}
  

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! It's always fresh</span>
          <span>Fresh Cart</span>
          <span>
          Fresh Cart delivers farm-fresh produce, dairy, and more right to your doorstep
          </span>
        </div>
        
          
         
          <button onClick={(e) => navigateLogin(e)} className="button i-button" type="button" >
                    Customer
                </button>

                <button onClick={(e) => navigateAdmin(e)} className="button i-button" type="button" style={{marginTop:"-20px"}}>
                    Admin
                </button>
           
          

        {/* social icons */}
        <div className="i-icons">
        <a href="https://www.youtube.com">
          <img src={Github} alt="Github" /></a>

          <img src={LinkedIn} alt="" />
          <a href="https://www.youtube.com"></a>

          <img src={Instagram} alt="" />
          <a href="https://www.youtube.com"></a>
        </div>
      </div>
      
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
      
        <img src={boy} alt="" />
          <img src={Vector3} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv  img={crown} text1="Vibrant" text2="Fruits" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Nutritious & Freshly" text2="Vegetables" />
          
        </motion.div>

        <div className="blur" style={{ background: "#c4f593" }}></div>
        <div
          className="blur"
          style={{
            background: "#c4f593",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
