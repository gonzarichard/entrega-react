import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img
        src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
        alt="Carrito de compras"
        className="cart-icon"
        width="30"
      />
      <span className="cart-count">3</span>
    </div>
  );
};

export default CartWidget;
