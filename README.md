# Dev Stack Builder

A simple and responsive web application where users can explore
different development technologies and build their own technology stack.

## Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## Features

- Explore different development technologies
- Add technologies to your own stack
- Remove technologies from your stack
- Toast notifications for stack actions
- Fully responsive design

## Live Site

[Live Website](https://comfy-sprinkles-ddcc46.netlify.app/)

## GitHub Repository

[GitHub Repository](https://github.com/sejansorker/DevStack)

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX allows us to write HTML-like code inside JavaScript.
It makes React components easier to write and understand.

## 2. What is the difference between props and state?

Props are used to pass data from parent to child.
State is used to store and manage data inside a component.

## 3. What does the `useState` hook do, and where did you use it?

`useState` stores and updates data in a React component.

I used it for technology data, selected stack, and loading state.

## 4. What does the `useEffect` hook do, and why did you need it?

`useEffect` is used for side effects.

I used it to fetch technology data from the JSON file
when the application loads.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list
and update the correct item efficiently.

## 6. What is conditional rendering?

Conditional rendering means showing something based on a condition.

For example:

```jsx
{selectedStack.length === 0 && (
  <p>Your stack is empty</p>
)}