const ex = require("express");
const fs = require("fs");
const exer = require("./exercises");
const cors = require("cors");

const app = ex();

app.use(ex.json());
app.use(cors());

const e = exer.exe;
// API
app.get("/api/exercises", (req, res) => {
  res.send(e);
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
