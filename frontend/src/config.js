const config = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? 'https://event-management-mern-stack-1.onrender.com'  // Your Render backend URL
    : 'http://localhost:4000'  // Local development URL
};

export default config; 