import React from 'react';
import zodiacShawl from '../images/clothing/female/zodiac-shawl.png';
function Item() {
  return (
    <div className="item--preview--container">
      <div
        className="item--preview"
        style={{
          backgroundImage: `url(${zodiacShawl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
      >
        <div className="item--box">
          <div className="item--detail--container">
            <p className="item--name">Embroidered Zodiac Shawl</p>
            <p className="item--price">$5500</p>
            <p className="item--description">
              Shawl in cashmere and silk with hand-rolled edges and
              hand-embroidered with fine beads and multicolor glass rods (70%
              cashmere, 30% silk).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
