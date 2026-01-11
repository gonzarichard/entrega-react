import { useEffect, useState } from "react";
import { products } from "../data/products";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    if (catId) {
      setItems(products.filter((p) => p.category === catId));
    } else {
      setItems(products);
    }
  }, [catId]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
