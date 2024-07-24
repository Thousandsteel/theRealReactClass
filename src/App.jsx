import { useState } from "react";
import Product from "./page/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import ProductDetails from "./page/ProductDetails";
import Contact from "./components/pages/contact";
import Home from "./components/pages/Home";
import Register from "./components/Register";

function App() {
  return (
    <>
      {
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
