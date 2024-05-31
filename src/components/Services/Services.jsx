import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}> Let us help you</span>
        <span>Eat well and feel great !</span>
        <p style={{ fontSize:"16px",textAlign:"justify",width:"400px",lineHeight:"35px"}}>
        Fresh Cart delivers farm-fresh produce, creamy dairy delights, and gourmet treasures to your doorstep, simplifying your grocery experience. Our convenient delivery service saves you time and energy while ensuring the highest quality ingredients. With seasonal selections, we inspire both seasoned chefs and kitchen novices to elevate their cooking. Experience culinary satisfaction with Fresh Cart today!
        </p>
        
        <div className="blur s-blur1" style={{ background: "#c4f593" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "16rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Freshness"}
            detail={"Products delivered quickly for maximum freshness"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "11rem", top: "12rem" }}
          whileInView={{ left: "-2rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Variety"}
            detail={" Diverse range of options, including vegan & gluten-free, to cater to different tastes"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "16rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Quality"}
            detail={
              "High standards of excellence, with rigorous testing and inspection processes in place"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "#c4f593" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
