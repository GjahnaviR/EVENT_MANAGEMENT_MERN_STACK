const config = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? 'https://event-management-backend.onrender.com'  // Your Render backend URL
    : 'http://localhost:5000'
};

export default config; 