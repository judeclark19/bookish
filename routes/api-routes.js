// Requiring our models and passport as we've configured it
var db = require("../models");
const axios = require("axios");
const bcrypt = require("bcryptjs");
// var passport = require("../config/passport");
require("dotenv").config();

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
    axios({
      method: "get",
      url: `https://v1.nocodeapi.com/icecicle04/gr/${process.env.GOODREADS_KEY}/searchAuthor`,
      params: { q: "<q>" },
    })
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });

  app.post("/api/searchByBook", function (req, res) {
    console.log(req.body);
    axios({
      method: "get",
      url: `https://v1.nocodeapi.com/icecicle04/gr/${process.env.GOODREADS_KEY}/search`,
      params: { q: "<q>" },
    })
      .then(function (response) {
        // handle success
        console.log(response.data);
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
    db.User.findOne({
      email: req.body.email
    }).then(function (foundUser) {
      console.log(foundUser);
      const hashedPassword = bcrypt.compare(
        req.body.password, foundUser.password);

      if (foundUser.email === req.body.email && hashedPassword) {
        // create a route for logged in users to be sent to (what happens next?)
        // think through which routes should be accessible for the users -- 'My account' page?
        res.redirect("/api/afterlogin");
        console.log("Succesfully logged in user!");
      } else {
        res.redirect("/api/login");
      }
    }).catch((err) =>{
      if(err) throw err;
    })

  });
  // practice route for POSTMAN 
  app.get("/api/afterlogin", function (req, res) {
    res.json({
      message: "You logged in!"
    })
  })

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
