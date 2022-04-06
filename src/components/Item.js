import React, { useState } from 'react';

function Item(props) {
  const [quantity, setQuantity] = useState(0);
  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <div className="item--preview">
      <img className="clothing--item" src={props.image} alt={props.title} />
      <p className="item--name">{props.title}</p>
      <p className="item--price">{props.price}</p>
      <p className="item--description">{props.description}</p>
      <div className="buying--container">
        <button className="purchase" onClick={props.cartFunc}>
          Add to Cart
        </button>
        <input
          type="number"
          min="0"
          max="99"
          value={quantity}
          onChange={changeQuantity}
        />
      </div>
    </div>
  );
}

export default Item;
