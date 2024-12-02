function Item({item, onDeleteItem, onUpdateItem}) {
    return (
      <div style= {item.packed ? { textDecoration: "line-through" } : {}}>
        <li>
        <input 
        type="checkbox"
        value={item.packed}
        onChange={()=> onUpdateItem(item.id)}
        />
        {item.description}({item.quantity})
        </li>
        <button onClick={() => onDeleteItem(item.id)}>Delete</button>
      </div>
    );
}

export default Item;