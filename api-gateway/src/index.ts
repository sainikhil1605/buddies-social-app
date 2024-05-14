import { NextFunction, Request, Response } from "express";

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const authMiddleware = require("./authMiddleware");
const config = require("config");
require("dotenv").config();
// Create an instance of Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(helmet()); // Add security headers
app.use(morgan("combined")); // Log HTTP requests
app.disable("x-powered-by"); // Hide Express server information

// Define routes and corresponding microservices
const services = [
  {
    route: "/chat",
    target: config.get("services").chat,
  },
  {
    route: "/auth",
    target: config.get("services").auth,
  },
  {
    route: '/post',
    target: config.get("services").post
  }
];

// Define rate limit constants
const rateLimit = 20; // Max requests per minute
const interval = 60 * 1000; // Time window in milliseconds (1 minute)

// Object to store request counts for each IP address
const requestCounts: {
  [key: string]: number;
} = {};

// Reset request count for each IP address every 'interval' milliseconds
setInterval(() => {
  Object.keys(requestCounts).forEach((ip) => {
    requestCounts[ip] = 0; // Reset request count for each IP address
  });
}, interval);

// Middleware function for rate limiting and timeout handling
function rateLimitAndTimeout(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip || 0; // Get client IP address

  // Update request count for the current IP
  requestCounts[ip] = (requestCounts[ip] || 0) + 1;

  // Check if request count exceeds the rate limit
  if (requestCounts[ip] > rateLimit) {
    // Respond with a 429 Too Many Requests status code
    return res.status(429).send({
      code: 429,
      status: "Error",
      message: "Rate limit exceeded.",
      data: null,
    });
  }

  // Set timeout for each request (example: 10 seconds)
  req.setTimeout(15000, () => {
    // Handle timeout error
    res.status(504).send({
      code: 504,
      status: "Error",
      message: "Gateway timeout.",
      data: null,
    });
    // Abort the request
  });

  next(); // Continue to the next middleware
}

// Apply the rate limit and timeout middleware to the proxy
app.use(rateLimitAndTimeout);

// Set up proxy middleware for each microservice
services.forEach(({ route, target }) => {
  // Proxy options
  const proxyOptions = {
    target,
    changeOrigin: true,
    pathRewrite: {
      [`^${route}`]: "",
    },
    on: {
      proxyReq: (proxyReq: any, req: any) => {
        if (req.user) {
          proxyReq.setHeader('X-User-ID', req.user.userId);
        }
      }
    }
  };

  // Apply rate limiting and timeout middleware before proxying
  app.use(route,rateLimitAndTimeout,authMiddleware,createProxyMiddleware(proxyOptions));
});
app.use(express.json())
// Handler for route-not-found
app.use((_req: Request, res: Response) => {
  res.status(404).send({
    code: 404,
    status: "Error",
    message: "Route not found.",
    data: null,
  });
});

// Define port for Express server
const PORT = process.env.PORT || 5000;

// Start Express server
app.listen(PORT, () => {
  console.log(`Gateway is running on port ${PORT}`);
});
