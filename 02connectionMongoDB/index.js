const express = require('express');
const app = express();
const PORT = 3000;

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
connectDB();

app.get  ('/', (req, res) => {
    res.send('Hello World!');
}
);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);