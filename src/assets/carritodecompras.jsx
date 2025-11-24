import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p style={styles.empty}>Tu carrito está vacío 🛒</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={styles.item}>
            <h4>{item.title}</h4>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>

            <button
              style={styles.remove}
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <h3 style={styles.total}>Total: ${total.toFixed(2)}</h3>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    width: "90%",
    maxWidth: "500px",
    margin: "30px auto",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#fafafa",
  },
  title: {
    textAlign: "center",
  },
  empty: {
    textAlign: "center",
  },
  item: {
    padding: "10px",
    marginBottom: "10px",
    borderBottom: "1px solid #ccc",
  },
  remove: {
    background: "#e74c3c",
    color: "white",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  total: {
    marginTop: "20px",
    textAlign: "center",
  },
};

export default Cart;
