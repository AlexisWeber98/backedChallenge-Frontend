import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useStore } from "./store/products";
import "./App.css";
import Home from "./views/Home/Home";
import { useEffect } from "react";


function App() {
  const { addAllProducts } = useStore();
  useEffect(() => {
    addAllProducts();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
