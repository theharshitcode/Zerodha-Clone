const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Export app for server.js or testing suites
module.exports = app;
