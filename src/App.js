import "./styles.css";
import React, { useState } from "react";

export default function List({ items }) {
  const [filteredItems, setFilteredItems] = useState(items);

  const filterItems = (e) => {
    const searchValue = e.target.value;
    const currentItems = [...items];
    const matchingItems = currentItems.filter((item) =>
      item.startsWith(searchValue)
    );

    setFilteredItems(matchingItems);
  };

  return (
    <>
      <h1>React Simple Search filter using hooks</h1>

      <input placeholder="search word from the list" onChange={filterItems} />

      {/* trying to map over dummy text data for sample case */}
      {/* <ul>
        { filteredItems.((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul> */}
      <ul>
        {filteredItems.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}

export const ListContainer = () => (
  <List items={["Learn React", "Learn Nextjs", "Learn Typescript"]} />
);
