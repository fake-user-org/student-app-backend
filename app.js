// Init the app and define route handlers, etc. here
const express = require('express');
const studentsData = require('./studentsData.json');

const app = express();

// Define route handlers
// app.get takes two args: path and handler func
app.get('/', (request, response) => {
  response.status(200).json({ data: 'Service is running' });
});

// GET /students
app.get('/students', (request, response) => {
  try {
    const { students } = studentsData;
    response.status(200).json({ data: students });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = app;
