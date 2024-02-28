import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCartItems } from "../utils/cartSlice";

const CartItems = () => {
  const store = useSelector((store: any) => store.cart.items);
  console.log(store, "=============");

  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCartItems())
  }
  return (
    <div className="text-center m-4 p-4">
      <p className="text-2xl font-bold">cart items</p>
      <div className="w-6/12 m-auto">
        <button onClick={handleClearCart}>clear cart</button>
        <ItemCards cartItems={store} />
      </div>
    </div>
  );
};

export default CartItems;
