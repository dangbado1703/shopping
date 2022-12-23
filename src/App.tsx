import { CssBaseline } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./app.scss";
import ProductDetail from "./component/Products/ProductDetail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import path from "./router/path";
import Layout from "./utils/Layout";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000} />
        <Routes>
          <Route element={<Layout />}>
            <Route path={path.home} element={<Home />} />
            <Route path={path.products} element={<Products />} />
            <Route path={path.detailProduct} element={<ProductDetail />} />
          </Route>
          <Route path={path.login} element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
