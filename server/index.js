const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
require("dotenv").config();


app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
  })
);

app.use(express.json());


app.get("/api/avatar/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`https://api.multiavatar.com/${username}`);

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching avatar:", error.message);
    res.status(500).json({ error: "Failed to fetch avatar" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
