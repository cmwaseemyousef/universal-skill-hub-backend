const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); 

dotenv.config(); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route to test if server is working
app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

// Connect to MongoDB (Non-blocking)
connectDB().then(() => {
  console.log("✅ MongoDB Connected Successfully!");
}).catch(err => {
  console.error("❌ MongoDB Connection Error:", err);
});

// Import Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const courseRoutes = require("./routes/courseRoutes");
app.use("/api/courses", courseRoutes);

// Listen for Requests (Fix Timeout Issue)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
