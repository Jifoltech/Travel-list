import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  item,
  onDeleteItem,
  onToggleItem,
  onClearItem,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedBy;
  if (sortBy === "input") sortedBy = item;
  if (sortBy === "description")
    sortedBy = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedBy = item.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedBy.map((items) => (
          <Item
            item={items}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={items.id}
          />
        ))}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed items</option>
        </select>
        <button onClick={onClearItem}>CLEAR</button>
      </div>
    </div>
  );
}
