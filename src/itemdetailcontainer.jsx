import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useContext, useState } from "react";
import ItemCount from "../components/ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const item = products.find((p) => p.id === itemId);

  const handleAdd = (qty) => {
    addItem(item, qty);
    setAdded(true);
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>${item.price}</p>

      {!added ? (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <Link to="/cart">Ir al carrito</Link>
      )}
    </div>
  );
};

export default ItemDetailContainer;
