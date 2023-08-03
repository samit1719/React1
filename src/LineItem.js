import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

export const LineItem = ({ Item, handleClick, handleDelete }) => {
  return (
    <li className="item" >
      <input
        type="checkbox"
        checked={Item.checked}
        onChange={() => handleClick(Item.id)}
      />
      <label
        style={Item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleClick(Item.id)}
      >
        {Item.item}
      </label>

      <FaTrashAlt
        onClick={() => handleDelete(Item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${Item.item}`}
      />
    </li>
  );
};

export default LineItem;
