
import { useContext,useState  } from 'react';
import Shopnav from '../Shopnav/Shopnav';
import { themeContext } from '../../Context';
import {useNavigate} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Lipton from "../../img/lipton.png";
import "./ShoppingCart.css";
import React, { useEffect } from 'react';
import axios from 'axios';
import Pumpkin from "../../img/pumpkin.png";
import Tomato from "../../img/tomato.png";
import Carrot from "../../img/carrot.png";
import Leeks from  "../../img/leeks.png";
import Capcicum from  "../../img/capcicum.png";
import Watermelon from  "../../img/watermelon.png";
import Papaya from  "../../img/papaya.png";
import Apple from  "../../img/apple.png";
import Mango from  "../../img/mango.png";
import Grapes from  "../../img/grapes.png";
import Happy from  "../../img/happy.png";
import Anchor from  "../../img/anchor.png";
import Rich from  "../../img/rich.png";
import Cream from  "../../img/cream.png";
import Nescafe from  "../../img/nescafe.png";
import Zesta from  "../../img/zesta.png";
import Greentea from  "../../img/greentea.png";
import Coffee from  "../../img/coffee.png";

const ShoppingCart=()=>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const navigate=useNavigate();

    function navigateLogin(event) {
      navigate("/login");
  }
  

  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartItemCount(cartItemCount + 1); 
    const count=cartItemCount + 1;
    console.log('Item added to cart. Total items:', count);
  };


  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define a function to fetch products from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8085/products'); // Assuming your backend runs on localhost:8080
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
// Call the fetchProducts function when the component mounts
fetchProducts();
}, []); // Empty dependency array ensures the effect runs only once after the initial render


    return(
      
      <div>

        <Shopnav cartItemCount={cartItemCount}/>


        

        <div className="shoppingportfolio" id="shoppingportfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Hot Deals</span>
      

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
         {products.filter(product => product.id === 18).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Sidebar} alt="" />
      </div>
      
      <div className="slide-content">
      <p>{product.name} </p> {/* Displaying product name */}
   
        <p>Rs. {product.price}.00</p>
       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      
      </div>
    </SwiperSlide>
  ))}
      </Swiper>
    </div>

    <div className="shoppingportfolio" id="tea">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Tea & Coffee</span>
      

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {products.filter(product => product.id ===20).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Lipton} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}

{products.filter(product => product.id ===21).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Nescafe} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}

        {products.filter(product => product.id ===22).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Zesta} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}

        {products.filter(product => product.id ===23).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Greentea} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}

        {products.filter(product => product.id ===24).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Coffee} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}
      </Swiper>



      
    </div>

    <div className="shoppingportfolio" id="dairy">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Dairy</span>
      

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {products.filter(product => product.id ===18).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Sidebar} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}

{products.filter(product => product.id ===14).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Happy} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}

{products.filter(product => product.id ===15).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Anchor} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}

{products.filter(product => product.id ===16).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Rich} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}


        {products.filter(product => product.id ===17).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Cream} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}
      </Swiper>



      
    </div>

    <div className="shoppingportfolio" id="household">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Vegetables</span>
      

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >


        {products.filter(product => product.id === 1).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Pumpkin} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>        
        <p>Rs. {product.price}.00</p>      
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>     
      </div>
    </SwiperSlide>
  ))}


        {products.filter(product => product.id === 4).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Tomato} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>        
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}

{products.filter(product => product.id ===2).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Carrot} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}

{products.filter(product => product.id ===3).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Leeks} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>        
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}

{products.filter(product => product.id ===8).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Capcicum} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}




      </Swiper>



      
    </div>



    <div className="shoppingportfolio" id="fruits">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Fruits</span>
      

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >


        {products.filter(product => product.id === 9).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Watermelon} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>        
        <p>Rs. {product.price}.00</p>      
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>     
      </div>
    </SwiperSlide>
  ))}


        {products.filter(product => product.id === 10).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Papaya} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>        
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}

{products.filter(product => product.id ===11).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Apple} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}

{products.filter(product => product.id ===12).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Mango} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>        
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}

{products.filter(product => product.id ===13).map(product => (
    <SwiperSlide key={product.id}>
      <div className='imageframe'>
      <img src={Grapes} alt="" />
      </div>      
      <div className="slide-content">
      <p>{product.name}   {product.quantity}</p>      
        <p>Rs. {product.price}.00</p>       
        <button className="add-button" onClick={() => addToCart(product)}>
          Add to cart
        </button>      
      </div>
    </SwiperSlide>
  ))}




      </Swiper>



      
    </div>

    
    
    </div>
    )
}

export default ShoppingCart;