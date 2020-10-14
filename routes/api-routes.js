// Requiring our models and passport as we've configured it
var db = require("../models");
const axios = require("axios");
// var passport = require("../config/passport");

module.exports = function (app) {
  app.get("/api/config", (req, res) => {
    res.json({
      success: true,
    });
  });
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  // app.post("/api/login", passport.authenticate("local"), function (req, res) {
  //   res.json(req.user);
  // });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,

  app.post("/api/searchByAuthor", function (req, res) {
    console.log(req.body);
    axios
      .get(
        "https://v1.nocodeapi.com/icecicle04/gr/LrsOCSqWhlpBqsfr/searchAuthor?q=J.%20K.%20Rowling"
      )
      .then((response) => res.json(response.data));
  });

  app.post("/api/searchByBook", function (req, res) {
    console.log(req.body);
    axios
      .get(
        "https://v1.nocodeapi.com/icecicle04/gr/LrsOCSqWhlpBqsfr/search?q=Harry%20Potter"
      )
      .then((response) => res.json(response.data));
  });

  app.post("/api/signup", function (req, res) {
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then(function () {
        res.redirect("/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });
};
