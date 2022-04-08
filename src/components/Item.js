import React, { useState } from 'react';

function Item(props) {
  const [quantity, setQuantity] = useState(0);
  const changeQuantity = (e) => {
    let twoDigit;
    if (e.target.value < 100) {
      setQuantity(e.target.value);
    } else {
      let stringNum = String(e.target.value);
      if (stringNum[0] == 0) {
        twoDigit = stringNum[1] + stringNum[2];
      } else {
        twoDigit = stringNum[0] + stringNum[1];
      }
      setQuantity(Number(twoDigit));
    }
  };
  const makeEmpty = (e) => {
    if (Number(e.target.value) === 0) {
      setQuantity('');
    }
  };
  return (
    <div className="item--preview">
      <img className="clothing--item" src={props.image} alt={props.title} />
      <p className="item--name">{props.title}</p>
      <p className="item--price">${props.price}</p>
      <p className="item--description">{props.description}</p>
      <div className="buying--container">
        <button
          className="purchase"
          onClick={() => {
            props.cartFunc(props.image, props.title, props.price, quantity);
          }}
        >
          Add to Cart
        </button>
        <input
          type="number"
          min="0"
          max="99"
          value={quantity}
          onChange={changeQuantity}
          onClick={makeEmpty}
        />
      </div>
    </div>
  );
}

export default Item;
