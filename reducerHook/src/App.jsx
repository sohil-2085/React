import { useState } from "react";
import { useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
}

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState();
  const [id, setId] = useState();

  const addItem = (item) => {
    dispatch({ type: "add", payload: item });
  };

  const removeItem = (item) => {
    dispatch({ type: "remove", payload: item });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.itemName} - ${item.price}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={() => addItem({ id, itemName, price })}>Add Item</button>
    </div>
  );
}
