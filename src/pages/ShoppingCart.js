import React from 'react';
import Header from '../components/Header';
import Cart from '../components/Cart';
function ShoppingCart() {
  return (
    <div className="shopping--cart--page">
      <Header></Header>
      <div className="shopping--cart--title--container">
        <p>Shopping Cart</p>
      </div>
      <Cart></Cart>
    </div>
  );
}

export default ShoppingCart;
