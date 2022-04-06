import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
function App() {
  const updateCart = (image, name, price, quantity) => {
    console.log(image);
    console.log(quantity);
    console.log(name);
    console.log(price);
  };
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
            element={<ShoppingCart></ShoppingCart>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
