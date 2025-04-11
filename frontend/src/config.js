const config = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? 'https://your-render-backend-url.onrender.com'  // Replace with your Render URL
    : 'http://localhost:5000'
};

export default config; 