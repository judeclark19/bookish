// Requiring our models and passport as we've configured it
var db = require("../models");
const axios = require("axios");
const bcrypt = require("bcryptjs");
const { post } = require("jquery");
require("dotenv").config();
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

  app.post("/search-results", function (req, res) {
    // console.log(req.body);
    axios({
      method: "get",
      url: `https://v1.nocodeapi.com/alikhan/gr/${process.env.GOODREADS_KEY}/searchAuthor?q=${req.body.name}`,
      params: { q: "<q>" },
    })
      .then(function (response) {
        // console.log(response.data);
        // handle success
        res.render("search-results", {
          books: response.data.results,
        });
        // res.render("search-results", {
        //   author: response.data.results.author.name,
        // });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });

  // app.post("/api/search-results", function (req, res) {
  //   console.log(req.body);
  //   res.json(req.body);
  //   axios({
  //     method: "get",
  //     url: `https://v1.nocodeapi.com/alikhan/gr/${process.env.GOODREADS_KEY}/search?q=${newSearchValue}`,
  //     params: { q: "<q>" },
  //   })
  //     .then(function (response) {
  //       // handle success
  //       post(response.data);
  //       console.log(res.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // });

  // POST rout to create clubs and store the data
  app.post("/api/club", function (req, res) {
    // console.log("User ID: " + req.session.userId);
    // console.log("Who's logged in?: " + req.session.username)
    // console.log("INFO TO PULL FROM:", req.body);
    // if (!req.body.club_name) {
    //   return;
    //   console.log("Please enter a name");
    // } else {
    db.Club.create({
      club_name: req.body.club_name,
      book_image: req.body.book_image,
      BookGoodReads: req.body.BookId,
      book_name: req.body.book_name,
      // userId: req.sessions.userId
      // add club members?
    })
      .then(function (result) {
        console.log(result);
        console.log("Successfully created new club!");
        res.json(result);
      })
      .catch(function (err) {
        res.json(err.message);
      });
    // }
  });

  // display clubs and all users
  app.get("/api/active-clubs", function (req, res) {
    db.Club.findAll()
      .then(function (result) {
        // console.log(result);
        // loop through the pulled club results and identify name, book and id
        for (let i = 0; i < result.length; i++) {
          // let clubNames = result[i].dataValues.club_name;
          // let clubBook = result[i].dataValues.book_name;
          // let clubIdNumbers = result[i].dataValues.id;
        }
      })
      .catch((err) => {
        if (err) throw err;
      });
  });

  // add users to clubs
  app.put("/api/join-club", function (req, res) {
    console.log(req.body);
    // console.log(res);
    console.log(req.session.userId);
    console.log("hit the PUT route for joining a club");

    db.User.update(req.body, {
      where: { id: req.session.userId },
    }).then(function (result) {
      console.log("SUCCESS IN UPDATING USER");
      console.log(result);
    });
  });

  // route to create new users and store data in the db
  app.post("/api/signup", function (req, res) {
    // console.log(req.body);
    db.User.create({
      // username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then(function () {
        // console.log(req.body);
        res.redirect("/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.post("/api/book", function (req, res) {
    // console.log(req.body);
    db.Book.create({
      // username: req.body.username,
      goodReads: req.body.goodReads,
      image: req.body.image,
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
    })
      .then(function (book) {
        res.json(book);
        // res.redirect("/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // route to log users in
  app.post("/api/login", function (req, res) {
    // console.log(req.body);
    db.User.findOne({
      where: { email: req.body.email },
    })
      .then(function (foundUser) {
        console.log(foundUser.id);
        console.log(foundUser.dataValues.email);
        // compare the saved/hashed password with the password put in on the page
        bcrypt
          .compare(req.body.password, foundUser.password)
          .then(function (result) {
            if (foundUser.email === req.body.email && result === true) {
              // create a route for logged in users to be sent to (what happens next?)
              // think through which routes should be accessible for the users -- 'My account' page?
              req.session.loggedin = true;
              req.session.username = foundUser.email;
              req.session.userId = foundUser.id;
              res.redirect("/my-account");
              console.log("Succesfully logged in user!");
              // console.log(req.session);
            } else {
              res.redirect("/api/login");
              console.log("Invalid email or password");
            }
          });
      })
      .catch((err) => {
        if (err) throw err;
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
