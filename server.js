// Grab envvars from dot env file
require('dotenv').config();

// Import the app and listen on a port
const app = require('./app');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
