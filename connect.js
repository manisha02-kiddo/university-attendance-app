require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001; // Use port from .env or default to 3001

const mongoURI ="mongodb+srv:manisha_02:0729@cluster0.ifdzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB Atlas! 🎉");

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT} 🚀`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
