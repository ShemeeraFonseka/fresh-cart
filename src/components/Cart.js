import React from 'react';
import { useCart } from 'react-use-cart';
import "./Cart.css";
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

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();

  const itemImages = {
    'Pumpkin': pumpkinImg,
    'Carrot': carrotImg,
    'Leeks' : leeksImg,
    'Tomato': tomatoImg,
    'Capsicum' : capsicumImg,
    'Watermelon': watermelonImg,
    'Papaya': papayaImg,
    'Apple': appleImg,
    'Mango': mangoImg,
    'Grapes': grapesImg,
    'Happy Cow Cheese Low Fat Round Box': happycowImg,
    'Anchor Yoghurt': yoghurtImg,
    'Richlife Pasteurized Milk': milkImg,
    'Meadowland Single Cream': singlecreamImg,
  };

  const handleRemoveItem = (cartId) => {
    fetch(`http://localhost:8081/delete-cart/${cartId}`, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        removeItem(cartId);
      })
      .catch(error => console.error(error));
  };

  if (isEmpty) return <h1 className="text-center">Your Cart is Empty!</h1>;

  return (
    <section  className="py-4 container">
      <div  className="row justify-content-center">
        <div  className="col-12">
          <h5 >Cart ({totalUniqueItems}) </h5>
          <table  className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => { 
                return (
                  <tr key={index}>
                    <td >
                         <img src={itemImages[item.name]} style={{ height: '6rem' }} />
                    </td>
                    <td >{item.name}</td>
                    <td >Rs.{item.price}</td>
                    <td >Quantity ({item.quantity})</td>
                    <td >
                      <button  className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      <button  className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                      <button  className="btn btn-danger ms-2" onClick={() => handleRemoveItem(item.cartId)}>Remove Item</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div >
          
        </div>
       
        <div className="col-auto">
        </div>
          </div>  
      <div className='totaldisplay'>
        <div className='total'>Total price : Rs.{cartTotal}</div> 
        <div className='button1'>
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}> Clear Cart </button>
          <button className="btn btn-success m-2"> Confirm Order </button>
        
          </div>
      </div>
    </section>
  );
};

export default Cart;
