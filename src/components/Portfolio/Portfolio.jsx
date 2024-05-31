import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Lipton from "../../img/lipton.png";
import { themeContext } from "../../Context";
import {useNavigate} from "react-router-dom";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const navigate=useNavigate();

  function navigateLogin(event){
    navigate("/login");
  }

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span >Hot Deals</span>
    

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="slide-content">
          <img src={Sidebar} alt="" />
            <p style={{ textDecoration: 'line-through' }}>Rs.500.00</p>
            <p>Rs.470.00</p>
            <button className="add-button" onClick={navigateLogin}>Add to cart</button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
          <img src={Ecommerce} alt="" />
            <p style={{ textDecoration: 'line-through' }}>Rs.500.00</p>
            <p>Rs.470.00</p>
            <button className="add-button" onClick={navigateLogin}>Add to cart</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
          <img src={MusicApp} alt="" />
            <p style={{ textDecoration: 'line-through' }}>Rs.500.00</p>
            <p>Rs.470.00</p>
            <button className="add-button" onClick={navigateLogin}>Add to cart</button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
          <img src={HOC} alt="" />
            <p style={{ textDecoration: 'line-through' }}>Rs.500.00</p>
            <p>Rs.470.00</p>
            <button className="add-button" onClick={navigateLogin}>Add to cart</button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
          <img src={Lipton} alt="" />
            <p style={{ textDecoration: 'line-through' }}>Rs.500.00</p>
            <p>Rs.470.00</p>
            <button className="add-button" onClick={navigateLogin}>Add to cart</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
