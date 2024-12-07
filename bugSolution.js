```javascript
// pages/index.js
export default function Home({ user }) {
  return (
    <div>
      <h1>Hello, world!</h1>
      {/* Conditional rendering to prevent errors */}
      {user && user.name ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

// GetServerSideProps or getStaticProps (adapt to your authentication method)
export async function getServerSideProps(context) {
  // Your authentication logic here... (e.g., using cookies, session storage)
  const user = await getUser(context); //Replace with your authentication logic

  return {
    props: {
      user: user || null, // Pass null if the user is not authenticated
    },
  };
}

// Placeholder function; Replace with your actual authentication method
async function getUser(context) {
  // ...Your code to fetch user data...
  return {name: 'Test User'}; // Replace with actual user data fetching
}
```