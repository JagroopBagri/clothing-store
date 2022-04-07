import React from 'react';
import Header from '../components/Header';

function ShoppingCart(props) {
  return (
    <div className="shopping--cart--page">
      <Header cartNotif={props.cartNotif}></Header>
      <div className="shopping--cart--title--container">
        <p>Shopping Cart</p>
      </div>
      {props.cart}
    </div>
  );
}

export default ShoppingCart;
