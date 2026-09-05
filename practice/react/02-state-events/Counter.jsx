import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Counter: state + events</h1>
      <p>Count: {count}</p>
      <p>
        When state changes with <code>setCount</code>, React re-renders the component with the new value.
      </p>
      <button onClick={() => setCount((previous) => previous + 1)}>Increase</button>
      <button onClick={() => setCount((previous) => previous - 1)} style={{ marginLeft: "8px" }}>
        Decrease
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "8px" }}>
        Reset
      </button>
    </main>
  );
}
