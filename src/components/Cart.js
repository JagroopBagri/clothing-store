import React from 'react';
import blueScarf from '../images/clothing/male/surreal-scarf-blue.png';
function Cart(props) {
  return (
    <div className="shopping--cart--container">
      <img src={props.image} alt={props.title} />
      <div className="shopping--cart--info">
        <p className="shopping--cart--name">{props.title}</p>
        <p className="shopping--cart--price">{props.price}</p>
        <p className="shopping--cart--remove">Remove</p>
      </div>
      <input type="number" min="0" max="99" />
    </div>
  );
}

export default Cart;
