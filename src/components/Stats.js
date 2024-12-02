function Stats({items}) {
    const numItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentItems = packedItems > 0 ? (packedItems / numItems * 100) : 0;
    return (
      <footer className="stats">
        <h3>
          {percentItems === 100?
          "You got everything!" :
          `You have ${numItems} items in the list. 
          You already packed ${packedItems} (${percentItems.toFixed(0)}%).`
          }
        </h3>
      </footer>
    );
}

export default Stats;