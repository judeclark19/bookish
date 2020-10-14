// dependencies
const path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    res.render("index");
  });

<<<<<<< HEAD
  app.get("/login.handlebars", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/");
    }
    res.render(path.join(__dirname, "../views/login.handlebars"));
    // res.render("login");
=======
  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    res.render("login");
>>>>>>> e4e217c5dd2c6fdd8db7ac63cd19b9a37af7e608
    // if (req.user) {
    //   res.redirect("/members");
    // }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // // Here we've add our isAuthenticated middleware to this route.
  // // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });
};
