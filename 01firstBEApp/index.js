//including express module and initializing express
const express = require('express');
const app = express();

//variable that will hold the port number
const PORT = 3000;

//creating a route
app.get('/', (req, res) => {
  res.send('Hello World! This is my first backend app.');
});

app.get('/admin', (req, res) => {
  res.send('Hello World! This is my first admin page.');
});

app.get('/student', (req, res) => {
  res.send('Hello World! This is my first student page.');
});

//starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

