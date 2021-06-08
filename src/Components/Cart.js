import React, { useContext, useState, useEffect } from "react";
import { ItemContext } from "../Context/ItemContext";

const Cart = () => {
  const { items } = useContext(ItemContext);

  const { deleteItem } = useContext(ItemContext);

  const [title, setTitle] = useState("Cart");

  useEffect(() => {
    if (items.length === 0) {
      setTitle("Cart is empty...");
    } else {
      setTitle("Cart");
    }
  }, [items.length]);

  return (
    <div className="cart-container">
      <p className="cart-title">{title}</p>
      {items.map((item) => (
        <div key={item.id} className="cart-items">
          <div className="cart-details">
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
          </div>
          <button onClick={() => deleteItem(item.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
