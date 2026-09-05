function WelcomeCard({ name, role }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "12px", marginBottom: "8px" }}>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default function App() {
  const learners = [
    { id: 1, name: "Aary", role: "JavaScript Learner" },
    { id: 2, name: "Sam", role: "React Beginner" },
  ];

  return (
    <main>
      <h1>React Components + Props</h1>
      {learners.map((learner) => (
        <WelcomeCard key={learner.id} name={learner.name} role={learner.role} />
      ))}
    </main>
  );
}
