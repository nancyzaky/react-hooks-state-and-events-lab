import React, { useState } from "react";

function Item({ name, category }) {
  console.log({ name, category });
  const [added, setAdded] = useState(false);
  return (
    <li className={added ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={added ? "remove" : "add"}
        onClick={() => {
          setAdded(!added);
        }}
      >
        {added ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
