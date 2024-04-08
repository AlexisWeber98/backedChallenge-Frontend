import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./views/ProductDetails/Details";
import "./App.css";
import Home from "./views/Home/Home";

function App() {

  return (
    <div className="bg-whitew-full h-screen bg-cover">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
