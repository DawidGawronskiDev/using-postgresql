require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listenning on port ${PORT}`);
});
