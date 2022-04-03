import Home from './pages/Home';
import Women from './pages/Women';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/women" element={<Women></Women>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
