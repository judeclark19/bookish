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

  // app.post("/api/searchByAuthor", function (req, res) {
  //   console.log(req.body);
  //   axios({
  //     method: "get",
  //     url:
  //       "https://v1.nocodeapi.com/icecicle04/gr/LrsOCSqWhlpBqsfr/searchAuthor",
  //     params: { q: "<q>" },
  //   })
  //   .then(function (response) {
  //       res.redirect("search/results")
  // .then(function (response) {
  //   // handle success
  //   console.log(response.data);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // });
  // });

  // $(function () {
  //   // connect with the signup form to capture values on 'submit'
  //   $("#nav-search-btn").on("submit", function (event) {
  //     event.preventDefault();
  //     // create a newUser variable to store the information
  //     newSearch = {
  //       name: $("#nav-search-btn").val().trim(),
  //     };
  //   });
  // });
  app.post("/api/search-results", function (req, res) {
    console.log(req.body);
    axios({
      method: "get",
      url: "https://v1.nocodeapi.com/icecicle04/gr/LrsOCSqWhlpBqsfr/search",
      params: { q: req },
    })
      .then(function (response) {
        // handle success
        post(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });

  app.post("/api/signup", function (req, res) {
    db.User.create({
      // username: req.body.username,
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

  app.post("/api/login", function (req, res) {
    console.log(req.body);
    console.log(res.body);
    console.log(req.params);
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
