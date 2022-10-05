const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
  fs.readFile("chat.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No chats exist";
    }
    res.send(`${data}
    <form action="/" method="POST" onsubmit ="document.getElementById('username').value = localStorage.getItem('username')">
    <input type="text" name="message" id="message" placeholder="message">
    <input type="hidden" name="username" id="username">
    <button type=submit>submit message</button>
    </form>`);
  });
});

router.post("/", (req, res) => {
  fs.writeFile("chat.txt",`${req.body.username} : ${req.body.message} `,{ flag: "a" },(err) => {
      err ? console.log(err) : res.redirect("/");
    }
  );
});
module.exports = router;
