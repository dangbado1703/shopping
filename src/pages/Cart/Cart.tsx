import React, { useEffect } from "react";
import CartTable from "../../component/Cart/CartTable";
import { useAppDispatch } from "../../store/hooks";
import { viewCart } from "../Home/home.reducer";

const Cart = () => {
  return (
    <div>
      <CartTable />
    </div>
  );
};

export default Cart;
