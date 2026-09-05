import { useState } from "react";

function SearchBox({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Filter tasks"
      aria-label="Filter tasks"
    />
  );
}

function TaskList({ items, filterText }) {
  const visibleItems = items.filter((item) =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  return visibleItems.length === 0 ? (
    <p>No matching tasks.</p>
  ) : (
    <ul>
      {visibleItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function LiftedStateExample() {
  const [filterText, setFilterText] = useState("");
  const tasks = ["Practice arrays", "Build todo app", "Read React docs"];

  return (
    <main>
      <h1>Lifting state up</h1>
      <p>
        State is stored in the parent and shared with children through props so both components stay in sync.
      </p>
      <SearchBox value={filterText} onChange={setFilterText} />
      <TaskList items={tasks} filterText={filterText} />
    </main>
  );
}
