import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();
dotenv.config({ path: "./config/config.env" });

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://event-management-mern-stack-gjahnavir.vercel.app',
    'https://event-management-mern-stack.vercel.app',
    'https://event-management-mern-stack-git-main-gjahnavir.vercel.app',
    'https://event-management-mern-stack-gjahnavir.vercel.app',
    'https://event-management-mern-stack-1.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to Event Management API',
    server_status: 'Running',
    endpoints: {
      messages: '/api/v1/message',
      health: '/health'
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use("/api/v1/message", messageRouter);

// Connect to database
dbConnection();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    availableRoutes: {
      root: '/',
      messages: '/api/v1/message',
      health: '/health'
    }
  });
});

export default app;
