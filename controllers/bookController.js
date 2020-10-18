const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/api/book", (req, res) => {
  db.Book.create(req.body).then((newBook) => {
    res.json(newBook);
  });
});

module.exports = router;
