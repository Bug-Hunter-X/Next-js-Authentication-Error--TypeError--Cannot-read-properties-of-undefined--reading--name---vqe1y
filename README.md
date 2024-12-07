# Next.js Authentication Error: TypeError: Cannot read properties of undefined (reading 'name')

This repository demonstrates a common error in Next.js applications related to authentication and accessing user data before it's available.  The error, `TypeError: Cannot read properties of undefined (reading 'name')`, occurs when attempting to access user properties (like `user.name`) before the authentication process is complete or when the user is not authenticated.

The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a solution using conditional rendering and optional chaining.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.  (This project assumes you have a basic Next.js application set up.)
3. Run `npm run dev` to start the development server.
4. Observe the error in your browser's console.

## Solution

The solution involves checking if the `user` object and its `name` property exist before attempting to access them.  This is elegantly achieved using optional chaining (`?.`) and conditional rendering.