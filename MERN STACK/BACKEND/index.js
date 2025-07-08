const express = require("express");
const app = express();
const connectDB = require("./db");
const userRoutes = require("./routes/users");
const adminRoutes = require("./routes/admin");

const PORT = 3000;

//body parser
app.use(express.json());

// Connect to MongoDB
connectDB();

// app.use('/api', User), use the routers;
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});