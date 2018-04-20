//https://github.com/NjaraFidimanana/react-toy-store.git

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import User from './components/User';
import Hobby from './components/Hobby';
import Toies from './components/Toies';
import ToyForm from './components/ToyForm';
import Cart from './components/Cart';
import base from './base';
import ToyModel from './models/ToyModel';
class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			toies : {
        
      },
      basket:{

      },
      toyModel:new ToyModel(),
      amount:0
      
		}
	}
	
  addToy() {
		  const toies = {...this.state.toies};
 
      // Ajouter le nouveau hobby
      var count = Object.keys(toies).length;
      const timestamp = Date.now();
     toies[`toy-${count+1}`] = {
        id:count+1,
        name: this.state.toyModel.name.value,
        description: '',
        price:this.state.toyModel.price.value,
        imageUrl:this.state.toyModel.imageUrl.value
      };
        
      
      this.setState({toies});
      console.log("Test Test ");
  }

  updateQuantity(key,plus){
    const basket ={...this.state.basket};
    var b=basket[key];
    if(plus){
      
      b.quantity=b.quantity+1;

      this.state.amount=this.state.amount+parseInt(basket[key].price);
    }
    else{
      if(b.quantity>0){
        b.quantity=b.quantity-1;
        this.state.amount=this.state.amount-parseInt(basket[key].price);
      }    
    }

    this.setState({basket});
  }


  addToBasket(key){

    const toies = {...this.state.toies};
    const basket ={...this.state.basket};
    var count = Object.keys(basket).length;
    if(basket[key]!=undefined){
      var b=basket[key];
      b.quantity=b.quantity+1;
    }
    else{
      toies[key].quantity=1;
      basket[key]=toies[key];
    }   
    this.state.amount=this.state.amount+parseInt(toies[key].price);
      
    console.log(basket);
    this.setState({basket});

  }

  order(){
    this.state.basket=null;
    const basket ={...this.state.basket};
    this.state.amount=0;
    this.setState({basket});
    console.log("test test" +this.state.amount);
  }
  removeToBasket(key){
    const basket ={...this.state.basket};
    this.state.amount=this.state.amount-(parseInt(basket[key].price)*basket[key].quantity);
    delete basket[key];
    this.setState({basket});
  }

  
  
  removeToy(key) {
    const toies = {...this.state.toies};
   
    toies[key] = null;
      
    
    this.setState({toies});
	}

  componentWillMount() {
    console.log("Component will mount");
    // on va chercher des donnees sur le Web avec fetch, comme
    // on a fait avec VueJS
    //this.getDataFromServer();

    this.ref = base.syncState("toies", {
      context: this,
      state: 'toies'
    });
    console.log(""+this.state.toies);

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  
  render() {
    console.log("render");
    return (
      <div className="App">      
        <ToyForm addToy={this.addToy.bind(this)} toyModel={this.state.toyModel}/>
        
        <div class="col-md-12">
              <h3 class="header">Favorites</h3>
            </div>
          <div class="container">
              <div class="bloc-product-content">
                <ul>
                  <Toies toies={this.state.toies}  removeToy={this.removeToy.bind(this)} addToBasket={this.addToBasket.bind(this)}/>
                </ul>
              </div>
              <div class="cart">

              <div class="shopping-cart">
                  <div class="title">
                    Shopping Bag
                  </div>
                  <div class="info-cart">
                      <div class="total">$ {this.state.amount}</div>
                      <div class="commande">
                          <button class="order-btn" onClick={()=>this.order()}>ORDER NOW</button>
                      </div>
                  </div>
                <Cart basket={this.state.basket} removeToBasket={this.removeToBasket.bind(this)} updateQuantity={this.updateQuantity.bind(this)}/>

                </div>
              </div>
        </div>
        
      </div>
    );
  }
}

export default App;
