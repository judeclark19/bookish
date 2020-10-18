const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/api/club", (req, res) => {
  db.Club.create(req.body).then((newClub) => {
    res.json(newClub);
  });
});

module.exports = router;
