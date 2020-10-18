const { response } = require("express");
var db = require("../models");

let clubArray = [];
let topArray = [];
module.exports = function (app) {
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    res.render("index");
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    res.render("login");
    // if (req.user) {
    //   res.redirect("/members");
    // }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function (req, res) {
    res.render("signup", {});
  });

  app.get("/all-clubs", function (req, res) {
    res.render("all-clubs");
  });

  app.get("/active-clubs", function (req, res) {
    db.Club.findAll()
      .then(function (result) {
        // console.log(result);

        clubArray = [];
        for (let i = 0; i < result.length; i++) {
          let newClubObj = {
            name: result[i].dataValues.club_name,
            book: result[i].dataValues.book_name,
            id: result[i].dataValues.id,
          };
          clubArray.push(newClubObj);
          topArray = clubArray.reverse();
        }
        console.log(topArray);

        // render the data onto the active-clubs handlebars page
        res.render("active-clubs", { topArray });
      })
      .catch((err) => {
        if (err) throw err;
      });
  });

  app.get("/my-club", function (req, res) {
    // db.User.findAll({
    //   where:
    // })
    res.render("my-club");
  });

  app.get("/create-new-club", function (req, res) {
    res.render("create-new-club");
  });

  app.get("/trending", function (req, res) {
    res.render("trending");
  });

  app.get("/my-account", function (req, res) {
    console.log(req.session);
    res.render("my-account", {
      email: req.session.username,
    });
  });

  app.get("/test", function (req, res) {
    res.render("test");
  });

  // app.get("/search-results", function (req, res) {
  //   // res.render("search-results", {
  //   //   books: response.data.results,
  //   //   testprop: "This is a test",
  //   // });
  //   res.render("search-results");
  // });

  // // Here we've add our isAuthenticated middleware to this route.
  // // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });
};
