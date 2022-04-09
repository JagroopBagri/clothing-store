import React, { useState } from 'react';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
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
      return { display: 'flex' };
    } else {
      return { display: 'none' };
    }
  };
  const getCartQuantity = () => {
    let totalQuantity = 0;
    cartItems.forEach((item) => {
      totalQuantity = totalQuantity + Number(item.quantity);
    });
    if (totalQuantity < 100) {
      return totalQuantity;
    } else {
      return '99+';
    }
  };
  const updateCart = (image, name, price, quantity) => {
    if (quantity > 0) {
      let cartCopy = JSON.parse(JSON.stringify(cartItems));
      let index = cartItems.findIndex((item) => {
        return item.name === name;
      });
      if (index === -1) {
        setCartItems(() => {
          return [...cartItems, { image, name, price, quantity }];
        });
      } else {
        cartCopy[index].quantity =
          Number(cartCopy[index].quantity) + Number(quantity);
        setCartItems(cartCopy);
      }
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
        cartFunc={setCartItems}
      ></Cart>
    );
  });

  return (
    <BrowserRouter basename='/clothing-store'>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartNotif={displayCartNotif()}
                cartQuantity={getCartQuantity()}
              ></Home>
            }
          ></Route>
          <Route
            path="/women"
            element={
              <Women
                cartFunc={updateCart}
                cartNotif={displayCartNotif()}
                cartQuantity={getCartQuantity()}
              ></Women>
            }
          ></Route>
          <Route
            path="/men"
            element={
              <Men
                cartFunc={updateCart}
                cartNotif={displayCartNotif()}
                cartQuantity={getCartQuantity()}
              ></Men>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <About
                cartNotif={displayCartNotif()}
                cartQuantity={getCartQuantity()}
              ></About>
            }
          ></Route>
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                cart={currentCart}
                cartNotif={displayCartNotif()}
                cartQuantity={getCartQuantity()}
              ></ShoppingCart>
            }
          ></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
