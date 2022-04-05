import React from 'react';
import blueScarf from '../images/clothing/male/surreal-scarf-blue.png';
function Cart() {
  return (
    <div className="shopping--cart--container">
      <img src={blueScarf} alt="blue-scarf" />
      <div className="shopping--cart--info">
        <p className="shopping--cart--name">Blue Scarf</p>
        <p className="shopping--cart--price">$1200</p>
        <p className="shopping--cart--remove">Remove</p>
      </div>
      <input type="number" min="0" max="99" />
    </div>
  );
}

export default Cart;
