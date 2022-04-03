import React, { useState } from 'react';

function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  let burgerContainer = document.querySelector('.burger--container');
  const toggleBurger = () => {
    if (burgerOpen) {
      burgerContainer.classList.remove('open');
      setBurgerOpen(false);
    } else {
      burgerContainer.classList.add('open');
      setBurgerOpen(true);
    }
  };
  return (
    <section className="header">
      <div className="empty"></div>
      <div className="middle">
        <div className="title">
          <h1>Narsiing</h1>
        </div>
        <ul className="links">
          <li>Home</li>
          <li>Women</li>
          <li>Men</li>
          <li>About</li>
        </ul>
      </div>
      <div className="empty">
        <div className="burger--container" onClick={toggleBurger}>
          <div className="burger--button"></div>
        </div>
      </div>
    </section>
  );
}

export default Header;
