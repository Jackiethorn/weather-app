const { response } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/", cors(), async (req, res) => {
  try {
    const city = req.body.city;
    const response = await fetch(
      `https://goweather.herokuapp.com/weather/${city}`
    );
    const data = await response.json();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

app.listen("3000", () => {
  console.log("listening on port 3000");
});
