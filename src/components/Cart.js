import React, { Component } from 'react';
 import '../assets/Cart.css';
 function Cart(props) {

    
        
    let list= Object.keys(props.basket).map((key, index) => {
        const cart = props.basket[key];
            
       return( <div class="item-cart">
            <div class="buttons">
                <span class="delete-btn" onClick={()=>props.removeToBasket(key)}></span>
            </div>
        
            <div class="image">
                <img src={cart.imageUrl} alt="" width="50px" height="50px"/>
            </div>
        
            <div class="description">
                <span>{cart.name}</span>
            </div>
        
            <div class="quantity">
                <button class="plus-btn" type="button" name="button">
                <img src="img/add.png" alt="" />
                </button>
                <input type="text" name="name" value={cart.quantity}/>
                <button class="minus-btn" type="button" name="button">
                <img src="img/minus.png" alt="" />
                </button>
            </div>
        
            <div class="total-price">{cart.price}</div>
            </div>)



    });
   
    

    return list;
 }
 export default Cart;