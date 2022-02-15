var express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser());

// app.use(bodyParser.json()); // <-- use body-parser

app.post("/locations", (req, res) => {
  console.log(
    "POST /locations: \n ================================= \n",
    JSON.stringify(req.body)
  );
  res.send(req.body);
});

app.listen(8080, "192.168.10.65", () => console.log("App started"));
