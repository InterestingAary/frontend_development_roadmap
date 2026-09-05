// Beginner example: modern JavaScript features
const profile = {
  name: "Aary",
  skills: ["JavaScript", "React"],
};

const { name, skills } = profile;
const allSkills = [...skills, "Git"];

const greetUser = (user = "Learner") => `Welcome, ${user}`;

console.log(name);
console.log(allSkills);
console.log(greetUser());
console.log(greetUser("Developer"));

const apiResponse = { data: { title: "Roadmap" } };
console.log(apiResponse?.data?.title ?? "No title");
