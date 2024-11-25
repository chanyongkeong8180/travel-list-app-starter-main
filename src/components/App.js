// Initial packing items
import { useState } from "react";
function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({AddItem}) {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (e) => {
    setQuantity(Number(e.target.value));
  }
  const [description, setDescription] = useState("");
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return (alert("Item must not be empty."));
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    AddItem(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select id="quantity" name="quantity" value={quantity} onChange={handleQuantity}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <input type="text" id="description" name="description" placeholder="Item..." value={description} onChange={handleDescription}></input>
      <button type="submit">Add</button>
    </form>
  );
}

function PackingList({items}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  );
}

function Item({item}) {
  return (
    <div style={item.packed ? { textDecoration: "line-through" } : {}}>
      <li>{item.description} ({item.quantity})</li>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <h3>You have X items in the list. You already packed Y (Z%).</h3>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState([]);
  function handleAddItem (item) {
    setItems((prevItems) => [...prevItems, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form AddItem={handleAddItem}/>
      <PackingList items={items}/>
      <Stats />
    </div>
  );
}

export default App;