import React, { useState, useEffect } from "react";
import Item from "./Item";

function ShoppingList({ items, filterData }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  function handleSub(e) {
    setSelectedCategory(e.target.value);
  }
  useEffect(() => {
    filterData(selectedCategory);
  }, [selectedCategory]);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSub}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
