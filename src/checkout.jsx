import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { clearCart } = useContext(CartContext);

  const handleBuy = () => {
    clearCart();
    alert("Compra realizada con éxito");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleBuy}>Confirmar compra</button>
    </div>
  );
};

export default Checkout;
