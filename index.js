const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const catagories = require("./data/catagories.json");
const news = require("./data/news.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Drongos is running ");
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  
});
app.get("/catagories/:id", (req, res) => {
  const id = parseInt(req.params.id);
 

  if (id == 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => parseInt(n.category_id) === id);
    res.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`Drongos Api is running:${port}`);
});
