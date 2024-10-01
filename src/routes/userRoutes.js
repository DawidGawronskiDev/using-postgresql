const express = require("express");
const db = require("../db/queries");

const router = express.Router();

router.get("/", async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log(usernames);

  res.render("userIndex", { users: usernames.map((item) => item.username) });
});

router.get("/create", (req, res) => {
  res.render("userForm");
});

router.post("/create", async (req, res) => {
  const username = req.body.username;

  await db.insertUsername(username);
  res.redirect("/users");
});

module.exports = router;
