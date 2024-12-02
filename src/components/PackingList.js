import Item from "./Item";

function PackingList({items, onDeleteItem, onUpdateItem}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem}/>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;