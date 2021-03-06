import React from 'react';
import Header from '../components/Header';
import Item from '../components/Item';
import { menClotheArray } from '../inventory/inventory';
function Men(props) {
  const Clothe = menClotheArray.map((item) => {
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
    <div className="men--page">
      <Header
        cartNotif={props.cartNotif}
        cartQuantity={props.cartQuantity}
      ></Header>
      <div className="men--container">
        <p>Men's</p>
      </div>
      <div className="item--preview--container">{Clothe}</div>
    </div>
  );
}

export default Men;
