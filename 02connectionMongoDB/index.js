const express = require('express');
const app = express();
const connectDB = require('./db');

const PORT = 3000;

//body parser
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get  ('/', (req, res) => {
    res.send('Hello World!');
}
);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);