const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send(
    '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><input id="username" type="text" name="user"><button type="submit">Login</button></form>'
  );
});

router.post("/login", (req, res) => {
  const username = req.body.user;
  res.redirect("/");
});

module.exports = router;
