import { useState } from "react";

export default function TodoInput() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(event) {
    event.preventDefault();
    if (!text.trim()) return;

    setTasks((prevTasks) => [...prevTasks, text.trim()]);
    setText("");
  }

  return (
    <main>
      <h1>Simple Todo Input</h1>
      <form onSubmit={addTask}>
        <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter task" />
        <button type="submit" style={{ marginLeft: "8px" }}>
          Add
        </button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={`${task}-${index}`}>{task}</li>
        ))}
      </ul>
    </main>
  );
}
