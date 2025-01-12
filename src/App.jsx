import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductProvider from "./Context/ProductContext";
import "./App.css";
import Search from "./Pages/Search/Search";
import Addtocard from "./Pages/Addtocard/Addtocard";

const App = () => {
  return (
    <ProductProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/addtocart" element={<Addtocard />} />  */}
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
