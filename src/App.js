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
  const displayCartNotif = () => {
    if (JSON.stringify(cartItems) !== JSON.stringify([])) {
      return { display: 'block' };
    } else {
      return { display: 'none' };
    }
  };
  console.log(cartItems);
  console.log(displayCartNotif());
  const updateCart = (image, name, price, quantity) => {
    if (quantity > 0) {
      setCartItems(() => {
        return [...cartItems, { image, name, price, quantity }];
      });
    }
  };
  const deleteItem = (num) => {
    const cart = JSON.parse(localStorage.getItem('cart-inventory'));
    const a = cart.filter((item, index) => {
      return index !== num;
    });
    setCartItems(a);
  };
  const currentCart = cartItems.map((item, index) => {
    return (
      <Cart
        image={item.image}
        title={item.name}
        price={item.price}
        quantity={item.quantity}
        key={item + index}
        index={index}
        delete={deleteItem}
      ></Cart>
    );
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home cartNotif={displayCartNotif()}></Home>}
          ></Route>
          <Route
            path="/women"
            element={
              <Women
                cartFunc={updateCart}
                cartNotif={displayCartNotif()}
              ></Women>
            }
          ></Route>
          <Route
            path="/men"
            element={
              <Men cartFunc={updateCart} cartNotif={displayCartNotif()}></Men>
            }
          ></Route>
          <Route
            path="/about"
            element={<About cartNotif={displayCartNotif()}></About>}
          ></Route>
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                cart={currentCart}
                cartNotif={displayCartNotif()}
              ></ShoppingCart>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
