import React from 'react';
import Header from '../components/Header';

function ShoppingCart(props) {
  const emptyCart = () => {
    if (props.cart[0] === undefined) {
      return <div className="empty--cart">Uh-oh your cart is empty! </div>;
    }
  };
  return (
    <div className="shopping--cart--page">
      <Header
        cartNotif={props.cartNotif}
        cartQuantity={props.cartQuantity}
      ></Header>
      <div className="shopping--cart--title--container">
        <p>Shopping Cart</p>
      </div>
      {emptyCart()}
      {props.cart}
    </div>
  );
}

export default ShoppingCart;
