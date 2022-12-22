import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../pages/Home/home.reducer";
import productsReducer from "../pages/Products/products.reducer";
import loginReducer from "../pages/Login/login.reducer";

const rootReducer = combineReducers({
  homeReducer,
  productsReducer,
  loginReducer,
});
export default rootReducer;
