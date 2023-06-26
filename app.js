// Init the app and define route handlers, etc. here
const express = require('express');

const app = express();

// Define route handlers
// app.get takes two args: path and handler func
app.get('/', (request, response) => {
  response.status(200).json({ data: 'Service is running' });
});

module.exports = app;
