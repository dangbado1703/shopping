import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../pages/Home/home.reducer";
import productsReducer from "../pages/Products/products.reducer";

const rootReducer = combineReducers({ homeReducer, productsReducer });
export default rootReducer;
