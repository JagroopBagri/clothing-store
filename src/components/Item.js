import React from 'react';
import zodiacShawl from '../images/clothing/female/zodiac-shawl.png';
function Item(props) {
  return (
    <div className="item--preview" onMouseEnter={props.func}>
      <img className="clothing--item" src={props.image} alt={props.title} />
      <p className="item--name">{props.title}</p>
      <p className="item--price">{props.price}</p>
      <p className="item--description">{props.description}</p>
      <div className="buying--container">
        <button className="purchase">Add to Cart</button>
        <input type="text" />
      </div>
    </div>
  );
}

export default Item;
