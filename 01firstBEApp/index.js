//including express module and initializing express
const express = require('express');
const app = express();

//variable that will hold the port number
const PORT = 3000;

//creating a route
app.get('/', (req, res) => {
  res.send('Hello World! This is my first backend app.');
});

//starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

