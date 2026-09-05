const learners = [
  { id: 1, name: "Aary", focus: "JavaScript" },
  { id: 2, name: "Sam", focus: "React" },
];

function LearnerCard({ name, focus, isActive }) {
  return (
    <article style={{ border: "1px solid #ddd", padding: "12px", marginBottom: "8px" }}>
      <h2>{name}</h2>
      <p>Current focus: {focus}</p>
      {/* Conditional rendering: UI changes based on props. */}
      <p>Status: {isActive ? "Active learner" : "Taking a break"}</p>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <h1>React Basics: Components, JSX, Props, Lists</h1>
      {/* Keys help React track each list item between renders. */}
      {learners.map((learner) => (
        <LearnerCard
          key={learner.id}
          name={learner.name}
          focus={learner.focus}
          isActive={learner.id === 1}
        />
      ))}
    </main>
  );
}
