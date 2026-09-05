import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadUsers() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Request failed. Try again.");
      }

      const data = await response.json();
      setUsers(data);
    } catch (caughtError) {
      setError(caughtError.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []); // Empty dependency array: run once after first render.

  return (
    <main>
      <h1>useEffect + Fetch</h1>
      <p>
        Effects run after render. Dependencies control when they run again.
      </p>

      <button onClick={loadUsers} disabled={loading}>
        {loading ? "Loading..." : "Reload users"}
      </button>

      {error && (
        <p role="alert" style={{ color: "#b00020" }}>
          Error: {error}
        </p>
      )}

      {!loading && !error && users.length === 0 && <p>No users found.</p>}

      {!loading && !error && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
