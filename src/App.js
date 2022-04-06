import React, { useState } from 'react';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Cart from './components/Cart';
function App() {
  const [cartItems, setCartItems] = useState(() => {
    if (JSON.parse(localStorage.getItem('cart-inventory'))) {
      return JSON.parse(localStorage.getItem('cart-inventory'));
    } else {
      return [];
    }
  });
  localStorage.setItem('cart-inventory', JSON.stringify(cartItems));
  let storageCart = JSON.parse(localStorage.getItem('cart-inventory'));
  console.log(cartItems);
  console.log(storageCart);
  if (
    storageCart &&
    JSON.stringify(storageCart) !== JSON.stringify(cartItems)
  ) {
    setCartItems(storageCart);
  }

  const updateCart = (image, name, price, quantity) => {
    setCartItems(() => {
      return [...cartItems, { image, name, price, quantity }];
    });
  };
  const currentCart = cartItems.map((item, index) => {
    return (
      <Cart
        image={item.image}
        title={item.name}
        price={item.price}
        quantity={item.quantity}
        key={item + index}
      ></Cart>
    );
  });
  console.log(currentCart);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/women"
            element={<Women cartFunc={updateCart}></Women>}
          ></Route>
          <Route path="/men" element={<Men></Men>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/shopping-cart"
            element={<ShoppingCart cart={currentCart}></ShoppingCart>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
