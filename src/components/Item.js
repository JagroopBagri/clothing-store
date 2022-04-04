import React from 'react';
import zodiacShawl from '../images/clothing/female/zodiac-shawl.png';
function Item(props) {
  return (
    <div
      className="item--preview"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
    >
      <div className="item--box">
        <div className="item--detail--container">
          <p className="item--name">{props.title}</p>
          <p className="item--price">{props.price}</p>
          <p className="item--description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
