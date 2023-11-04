import React, { useState, useEffect } from 'react';
import ItemCard from "./CartItemCard";
import axios from 'axios';
import pumpkinImg from './CartImages/pumpkin.jpg';
import carrotImg from './CartImages/carrot.jpg';
import leeksImg from './CartImages/leeks.jpg';
import tomatoImg from './CartImages/tomato.jpg';
import capsicumImg from './CartImages/capsicum.jpeg';
import watermelonImg from './CartImages/watermelon.jpg';
import papayaImg from './CartImages/papaya.jpg';
import appleImg from './CartImages/apple.jpg';
import mangoImg from './CartImages/mango.jpg';
import grapesImg from './CartImages/grapes.jpeg';
import happycowImg from './CartImages/Cheese.jpg';
import yoghurtImg from './CartImages/yoghurt.png';
import milkImg from './CartImages/Richlife Pas Milk.jpeg';
import singlecreamImg from './CartImages/cooking cream.jpeg';
import "./CartHome.css";


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/products")
            .then(res => {
                setProducts(res.data);
            })
    }, []);

    return (
        <>  <div >
            <h1 style={{ marginTop: "40px",marginBottom: "40px",color:"black",fontWeight:"bold",
    textAlign:"center",fontSize:"40px"}} className="text-left mt-3">Fresh Cart</h1>
            <section className="row">
                <div  className="row">
                    {
                        products.map((item, index) => {
                            let img;
                            switch (item.name) {
                                case "Pumpkin":
                                    img = pumpkinImg;
                                    break;
                                case "Carrot":
                                    img = carrotImg;
                                    break;
                                case "Leeks":
                                    img = leeksImg;
                                    break;
                                case "Tomato":
                                    img = tomatoImg;
                                    break;
                                case "Capsicum":
                                    img = capsicumImg;
                                    break;
                                case "Watermelon":
                                    img = watermelonImg;
                                    break;
                                case "Papaya":
                                    img = papayaImg;
                                    break;
                                case "Apple":
                                    img = appleImg;
                                    break;
                                case "Mango":
                                    img = mangoImg;
                                    break;
                                case "Grapes":
                                    img = grapesImg;
                                    break;
                                case "Happy Cow Cheese Low Fat Round Box":
                                    img = happycowImg;
                                    break;
                                case "Anchor Yoghurt":
                                    img = yoghurtImg;
                                    break;
                                case "Richlife Pasteurized Milk":
                                    img = milkImg;
                                    break;
                                case "Meadowland Single Cream":
                                    img = singlecreamImg;
                                    break;     
                            }
                            return (
                                <ItemCard
                                    img={img}
                                    title={item.name}
                                    price={item.price}
                                    unit={item.itemUnit}
                                    item={item}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </section>
            </div>
        </>
    )
}

export default Home
