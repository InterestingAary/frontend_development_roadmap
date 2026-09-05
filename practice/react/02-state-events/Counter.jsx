import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Counter Example</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)} style={{ marginLeft: "8px" }}>
        Decrease
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "8px" }}>
        Reset
      </button>
    </main>
  );
}
