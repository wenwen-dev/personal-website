This is a project to practice frontend skills, incl. HTML, CSS, JavaScript, ReactJS, TypeScript.

## How I worked on this project

## Learnings

1. On how to store data, make functions pure - [77b0d93] -> [61b9316]

- Issue: used props to pass data and handler functions from App.tsx to its children, but page did not re-render
- Cause: the data was stored in App.tsx, before the function App, as a global variable, which made the function not pure. And by design, React re-renders when state and props change, not when global variables change
- Solution: after identifying the causes, made data into a state variable, and when clicking on Vote, it executes a handler function which updates the data by providing a new array with new upvotes count.
- Reflection: deep understanding of React's core concepts is crucial. And the official docs are of excellent quality that I should use more, perhaps even over some of the courses I purchased.

2. On sorting arrays with TypeScript [43eb0fb] => [80174ad]

- Issue: compilation error occurred when trying to display cards of requests in a certain order according to the sort option selected - a type error saying the data's return does not match the Array.sort() function I provided
- Cause: by studying the long error message and reasoning possible causes, it's highly likely caused by comparing an undefined property of the request object to another one.
- Solution: even though I used a Switch to include scenarios when undefined is possible, the error persisted. Then tried taking the if...else... logic out of the Array.sort()'s function and put above it, as it's upper logic, therefore not interfering the sort function anymore which worked.
- Learning: a compilation error message of TypeScript can be long and scary, but they are actually helpful - "not assignable" is a big cue, and very often are caused by nullable values. Another learning is Array.sort() and methods alike have their internal implementation logic and if I want to add conditional logic to them, I need to do so before/outside of it, not inside.
