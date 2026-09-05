import { useState } from "react";

export default function TodoInput() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(event) {
    event.preventDefault();
    const cleanedText = text.trim();
    if (!cleanedText) return;

    setTasks((previousTasks) => [...previousTasks, { id: Date.now(), text: cleanedText }]);
    setText("");
  }

  return (
    <main>
      <h1>Controlled input + list rendering</h1>
      <p>
        Controlled inputs keep form values in React state, which makes validation and UI behavior easier to manage.
      </p>

      <form onSubmit={addTask}>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter task"
          aria-label="Task input"
        />
        <button type="submit" style={{ marginLeft: "8px" }}>
          Add
        </button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks yet. Add your first task.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
