import React from 'react';
import Header from '../components/Header';
import Item from '../components/Item';

import { womenClotheArray } from '../inventory/inventory';
function Women(props) {
  const Clothe = womenClotheArray.map((item) => {
    return (
      <Item
        image={item.image}
        title={item.title}
        price={item.price}
        description={item.description}
        key={item.id}
        cartFunc={props.cartFunc}
      ></Item>
    );
  });
  return (
    <div className="women--page">
      <Header></Header>
      <div className="women--container">
        <p>Women's</p>
      </div>
      <div className="item--preview--container">{Clothe}</div>
    </div>
  );
}

export default Women;
