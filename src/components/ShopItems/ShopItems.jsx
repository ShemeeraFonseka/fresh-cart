import { ShoppingCart } from "lucide-react";
import './ShopItems.css';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../CartContext";


const ShopItems = () => {
    const [showCart, setShowCart] = useState(false);
    const [productsData, setProductsData] = useState([]);
    const [dairyData, setDairyData] = useState([]);


    const navigate = useNavigate();

    const { cartItems, cartItemCount, addToCart, increaseCart, decreaseCart } = useContext(CartContext);

    const toggleCart = () => {
        setShowCart(!showCart);
    }

    const closeCart = () => {
        setShowCart(false);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('./products.json');
                console.log(response.data);
                setProductsData(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('./dairy.json');
                console.log(response.data);
                setDairyData(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className={showCart ? "showCart" : ""}>
            <div className="item-container">
                <header className="iteamheader">
                    <div className="title">Product List</div>
                    <div className="icon-cart" onClick={toggleCart}>
                        <ShoppingCart className="itemicon" />
                        <span className="itemnumber">{cartItemCount}</span>
                    </div>
                </header>

                <div className="listProduct">
                    
                    {productsData.map(product => (
                        <div key={product.id} className="item">
                            <img className="product-images" src={product.image} alt="" />
                            <h2 className="product-name">{product.name}</h2>
                            <div className="price">Rs. {product.price}</div>
                            <button className="addCart" onClick={() => addToCart(product)}>
                                Add To Cart
                            </button>
                        </div>
                    ))}
                </div>


                

            </div>

            {showCart && (
                <div className="cartTab">
                    <h1 className="tab-name">Shopping Cart</h1>
                    <div className="listCart">
                        {cartItems.map((cartItem, index) => (
                            <div key={index} className="item">
                                <div className="image">
                                    <img className="cart-image" src={cartItem.image} alt="" />
                                </div>
                                <div className="name" style={{ fontSize: "15px" }}>
                                    {cartItem.name}
                                </div>
                                <div className="totalPrice">
                                    <span style={{ fontSize: "15px" }}>Rs. {cartItem.price * cartItem.quantity}</span>
                                </div>
                                <div className="quantity">
                                    <span className="minus" style={{ fontSize: "20px" }} onClick={() => decreaseCart(cartItem)}>-</span>
                                    <span style={{ fontSize: "15px" }}>{cartItem.quantity}</span>
                                    <span className="minus" style={{ fontSize: "20px" }} onClick={() => increaseCart(cartItem)}>+</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="btn">
                        <button className="close" onClick={closeCart}>Close</button>
                        <button className="checkOut" onClick={handleCheckout}>Check Out</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShopItems;
