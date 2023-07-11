This is a project to practice frontend skills, incl. HTML, CSS, JavaScript, ReactJS, TypeScript.

## How I worked on this project

## Learnings

1. On how to store data, make functions pure - [77b0d93] -> [61b9316]

- Issue: used props to pass data and handler functions from App.tsx to its children, but page did not re-render
- Cause: the data was stored in App.tsx, before the function App, as a global variable, which made the function not pure. And by design, React re-renders when state and props change, not when global variables change
- Solution: after identifying the causes, made data into a state variable, and when clicking on Vote, it executes a handler function which updates the data by providing a new array with new upvotes count.
- Reflection: deep understanding of React's core concepts is crucial. And the official docs are of excellent quality that I should use more, perhaps even over some of the courses I purchased.
