import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/women" element={<Women></Women>}></Route>
          <Route path="/men" element={<Men></Men>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
