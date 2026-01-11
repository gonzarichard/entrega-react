import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) return <h2>El carrito está vacío</h2>;

  return (
    <div>
      <h2>Carrito</h2>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} x {item.quantity} = ${item.quantity * item.price}
        </div>
      ))}

      <h3>Total: ${totalPrice()}</h3>

      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
