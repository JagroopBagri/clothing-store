import React, { useState } from 'react';
import github from '../images/github-logo.png';
import shoppingCart from '../images/shopping-cart.png';
function Header(props) {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    let burgerContainer = document.querySelector('.burger--container');
    if (burgerOpen === true) {
      burgerContainer.classList.remove('open');
      setBurgerOpen(false);
    } else {
      burgerContainer.classList.add('open');
      setBurgerOpen(true);
    }
  };
  return (
    <section className="header">
      <div className="empty">
        <a
          className="name"
          href="https://github.com/JagroopBagri"
          target="_blank"
          rel="noreferrer"
        >
          <img className="github--logo" src={github} alt="github-logo" />
          <p>Jagroop Bagri</p>
        </a>
      </div>
      <div className="middle">
        <div className="title">
          <h1>Narsiing</h1>
        </div>
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/women">Women</a>
          </li>
          <li>
            <a href="/men">Men</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
      <div className="empty">
        <div className="cart--container">
          <a href="/shopping-cart">
            <img className="cart" src={shoppingCart} alt="cart-icon" />
          </a>
          <div className="cart--quantity" style={props.cartNotif}>
            {props.cartQuantity}
          </div>
        </div>
        <div className="burger--container" onClick={toggleBurger}>
          <div className="burger--button"></div>
        </div>
      </div>
    </section>
  );
}

export default Header;
