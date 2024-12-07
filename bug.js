```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      {/* This will cause an error if the user is not authenticated */}
      <p>Welcome, {user.name}!</p>
    </div>
  );
}
```