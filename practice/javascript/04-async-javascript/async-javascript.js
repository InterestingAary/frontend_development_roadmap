/**
 * Title: Async JavaScript Essentials
 * Learning objective: Understand callbacks, promises, async/await, fetch, JSON, and error handling.
 */

console.log("Loading state: start");

function fakeCallbackRequest(callback) {
  setTimeout(() => {
    callback(null, '{"message":"Hello from callback"}');
  }, 300);
}

fakeCallbackRequest((error, responseText) => {
  if (error) {
    console.log("Callback error state:", error.message);
    return;
  }

  const response = JSON.parse(responseText);
  console.log("Callback success:", response.message);
});

function fakePromiseRequest(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Promise request failed"));
        return;
      }
      resolve({ items: ["JavaScript", "React"] });
    }, 300);
  });
}

fakePromiseRequest()
  .then((data) => {
    console.log("Promise success:", data.items);
  })
  .catch((error) => {
    console.log("Promise error state:", error.message);
  });

async function loadTopics() {
  try {
    const data = await fakePromiseRequest();
    console.log("async/await success:", data.items);
  } catch (error) {
    console.log("async/await error state:", error.message);
  } finally {
    console.log("Loading state: end");
  }
}

loadTopics();

async function fetchUsersExample() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const users = await response.json();
    console.log("Fetched users count:", users.length);
  } catch (error) {
    console.log("Fetch error state:", error.message);
  }
}

// Optional network demo. Uncomment to run.
// fetchUsersExample();

// Exercises:
// 1) Call fakePromiseRequest(true) and inspect the error flow.
// 2) Add a loading boolean around fetchUsersExample.
// 3) Print only user names from fetched JSON data.
