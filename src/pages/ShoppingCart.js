import React from 'react';
import Header from '../components/Header';

function ShoppingCart(props) {
  const displayCart = () => {
    const findTotal = () => {
      let subTotal = 0;
      props.cart.forEach((item) => {
        subTotal += Number(item.props.price) * item.props.quantity;
      });
      return Number(subTotal);
    };
    const subTotal = findTotal();
    const tax = subTotal * 0.0725;

    if (props.cart[0] === undefined) {
      return <div className="empty--cart">Uh-oh your cart is empty! </div>;
    } else {
      return (
        <div className="payment--container">
          <div className="pricing--container">
            <p className="sub-total">Sub-total</p>
            <p className="sub-total-price">
              ${subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
          <div className="pricing--container">
            <p className="shipping">Shipping</p>
            <p className="shipping-price">FREE</p>
          </div>
          <div className="pricing--container">
            <p className="taxes">Taxes (7.25%)</p>
            <p className="taxes--price">
              $
              {tax
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
          <div className="total--container">
            <p className="total">TOTAL</p>
            <p className="total--price">
              $
              {(subTotal + tax)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
          <button className="place--order">Place Order</button>
        </div>
      );
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
      {props.cart}
      {displayCart()}
    </div>
  );
}

export default ShoppingCart;
