import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.scss";
import ProductDetail from "./component/Products/ProductDetail";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import path from "./router/path";
import Layout from "./utils/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path={path.home} element={<Home />} />
          <Route path={path.products} element={<Products />} />
          <Route path={path.detailProduct} element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
