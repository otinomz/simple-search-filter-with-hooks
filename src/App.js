import "./styles.css";
import React from "react";

export default function App({ items }) {
  const [filteredItems, setFilteredItems] = React.useState(items);

  const filterItems = (e) => {
    const searchValue = e.target.value;
    const currentItems = [...items];
    const matchingItems = currentItems.filter((item) =>
      item.startsWith(searchValue)
    );

    setFilteredItems(matchingItems);
  };

  return (
    <div className="App">
      <h1>React Simple Search filter using hooks</h1>

      <input onChange={filterItems} />

      {/* trying to map over dummy text data for sample case */}
      <ul>
        {filteredItems.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </div>
  );
}
