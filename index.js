const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;  // Ensure the port is set correctly

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://manisha_24:<0729>@cluster0.ifdzs.mongodb.net/university-attendence-app?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGO_URI) {
  console.error("❌ MongoDB URI is missing in .env file!");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit if connection fails
  });

// Route to test database connection
app.get("/test-db", async (req, res) => {
  try {
    if (!mongoose.connection.readyState) {
      return res.status(500).json({ message: "❌ Not connected to the database!" });
    }
    const databases = await mongoose.connection.db.admin().listDatabases();
    res.json({ message: "✅ Database connected", databases });
  } catch (error) {
    res.status(500).json({ message: "❌ Database connection failed", error });
  }
});

// Start Express server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
