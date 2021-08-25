import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [items, setItems] = useState([]);
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);
  const filterData = (word) => {
    let newArr = [...itemData].filter((item) => {
      if (word === "All") {
        return true;
      } else {
        return item.category === word;
      }
    });
    setItems(newArr);
  };
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button
          onClick={() => {
            setDarkMode((darkMode) => !darkMode);
          }}
        >
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={items} filterData={filterData} />
    </div>
  );
}

export default App;
