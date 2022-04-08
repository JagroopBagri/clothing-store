import React from 'react';

function Cart(props) {
  const updateCartQuantity = (e) => {
    const cart = JSON.parse(localStorage.getItem('cart-inventory'));
    const a = cart.findIndex((item) => {
      return item.name === props.title;
    });
    cart[a].quantity = e.target.value;
    props.cartFunc(cart);
  };

  return (
    <div className="shopping--cart--container">
      <img src={props.image} alt={props.title} />
      <div className="shopping--cart--info">
        <p className="shopping--cart--name">{props.title}</p>
        <p className="shopping--cart--price">
          ${props.price * Number(props.quantity)}
        </p>
        <p
          className="shopping--cart--remove"
          onClick={() => {
            props.delete(props.index);
          }}
        >
          Remove
        </p>
      </div>
      <input
        className="shopping--cart--quantity"
        type="Number"
        value={props.quantity}
        min="0"
        onChange={(e) => {
          updateCartQuantity(e);
        }}
      ></input>
    </div>
  );
}

export default Cart;
