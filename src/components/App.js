// Initial packing items
import { useState } from "react";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Form from "./Form";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItem (item) {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  }
  function handleDeleteItem (id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }
  function handleUpdateItem (id) {
    setItems((prevItems) => {
      return prevItems.map((item) => item.id === id ? {...item, packed: !item.packed} : item);
    });
  }
  return (
    <div className="app">
      <Logo />
      <Form AddItem={handleAddItem}/>
      <PackingList 
      items={items}
      onDeleteItem={handleDeleteItem}
      onUpdateItem={handleUpdateItem}/>
      <Stats 
      items={items}/>
    </div>
  );
}

export default App;