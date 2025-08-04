const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./data.json");

app.use(cors());

app.get("/api/intern", (req, res) => {
  res.json(data);
});

app.get("/api/leaderboard", (req, res) => {
  res.json(data.leaderboard);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
