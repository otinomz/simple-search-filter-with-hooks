// import "./styles.css";
// import React, { useState } from "react";

// export default function App({ items, ...props }) {
//   const [filteredItemss, setFilteredItems] = useState(items);

//   const filterItems = (e) => {
//     const searchValue = e.target.value;
//     const currentItems = [...items];
//     const matchingItems = currentItems.filter((item) =>
//       item.startsWith(searchValue)
//     );

//     setFilteredItems(matchingItems);
//   };

//   return (
//     <>
//       <h1>React Simple Search filter using hooks</h1>
//       <input placeholder="search word from the list" onChange={filterItems} />

//       {/* trying to map over dummy text data for sample case */}
//       <ul {...props}>
//         {filteredItemss.map((item) => {
//           return <li>{item}</li>;
//         })}
//       </ul>
//     </>
//   );
// }

// export const ApptContainer = () => (
//   <App items={["Learn React", "Learn Nextjs", "Learn Typescript"]} />
// );

import React from "react";

const List = ({ items }) => {
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
    <>
      <input onChange={filterItems} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

const ListContainer = () => (
  <List items={["Learn React", "Learn Next.js", "???", "Profit"]} />
);

export default ListContainer;
