import React from 'react';

function Cart(props) {
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
      ></input>
    </div>
  );
}

export default Cart;
