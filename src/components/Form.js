import { useState } from "react";

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
  
      if (!description) return (
        alert("Item must not be empty.")
      );
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

export default Form;