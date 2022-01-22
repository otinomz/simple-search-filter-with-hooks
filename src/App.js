import "./styles.css";
import React from "react";

export default function App({ items }) {
  const [filteredItems, setFilteredItems] = React.useState(items);

  return (
    <div className="App">
      <h1>React Simple Search filter using hooks</h1>
    </div>
  );
}
