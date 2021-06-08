import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ItemContext } from "../Context/ItemContext";

const Form = () => {
  const { addItem } = useContext(ItemContext);

  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      name: name,
      price: price,
    };

    addItem(newItem);

    setName("");
    setPrice("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <p>Add Products</p>
          <div className="prod-name">
            <label>Product Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="prod-price">
            <label>Product Price: </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
