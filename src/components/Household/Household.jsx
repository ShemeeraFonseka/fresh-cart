
import { useContext } from 'react';
import Shopnav from '../Shopnav/Shopnav';
import { themeContext } from '../../Context';
import {useNavigate} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Lipton from "../../img/lipton.png";
import "../ShoppingCart/ShoppingCart.css";

const Household=()=>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const navigate=useNavigate();

    function navigateLogin(event){
        navigate("/login");
      }

    return(
        <div className="shoppingportfolio" id="household">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Household</span>
      

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
          <div className="slide-content">
            <p style={{ textDecoration: 'line-through' }}>Rs.500.00</p>
            <p>Rs.470.00</p>
            <button className="add-button" onClick={navigateLogin}>Add to cart</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <div className="slide-content">
            <p style={{ textDecoration: 'line-through' }}>Rs.500.00</p>
            <p>Rs.470.00</p>
            <button className="add-button" onClick={navigateLogin}>Add to cart</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
          <div className="slide-content">
            <p style={{ textDecoration: 'line-through' }}>Rs.500.00</p>
            <p>Rs.470.00</p>
            <button className="add-button" onClick={navigateLogin}>Add to cart</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
          <div className="slide-content">
            <p style={{ textDecoration: 'line-through' }}>Rs.500.00</p>
            <p>Rs.470.00</p>
            <button className="add-button" onClick={navigateLogin}>Add to cart</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lipton} alt="" />
          <div className="slide-content">
            <p style={{ textDecoration: 'line-through' }}>Rs.500.00</p>
            <p>Rs.470.00</p>
            <button className="add-button" onClick={navigateLogin}>Add to cart</button>
          </div>
        </SwiperSlide>
      </Swiper>



      
    </div>
    )
}

export default Household;