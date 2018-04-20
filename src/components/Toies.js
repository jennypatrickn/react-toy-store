////https://github.com/NjaraFidimanana/react-toy-store.git

 import React, { Component } from 'react';
 import '../assets/Toies.css';
 function Toies(props) {
    
    let list = Object.keys(props.toies).map((key, index) => {
        const toy = props.toies[key];
         return  (<li key={key} class="item">
           <div class="item-image-wrapper">
                <a  href="#">
                    <img src={toy.imageUrl} width="200px" height="200px"/>
                </a>
           </div>
           <h3 class="item-name"> 
                <a href="#">  {toy.name} </a>
           </h3>
            <div class="price">
                 
                 <div class="dispo">
                    <span class="block-price">$ {toy.price}</span>
                    <span class="block-cart">
                      <button class="btn" onClick={() => props.addToBasket(key)}>
                        <img src="../../img/shopping-cart.png" alt="cart" width="20px"/>
                      </button>
                    
                    </span>
                 </div>
                 <div class="dispo btn-delete">
                    <button class="btn-delete" onClick={() => props.removeToy(key)}>DELETE</button>
                 </div>
            </div>
          </li>)
                  
        });

        return list

   }
 
   export default Toies;