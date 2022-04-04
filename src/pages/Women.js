import React from 'react';
import Header from '../components/Header';
import Item from '../components/Item';

function Women() {
  return (
    <div className="women--page">
      <Header></Header>
      <div className="women--container">
        <p>Women's</p>
      </div>
      <Item></Item>
    </div>
  );
}

export default Women;
