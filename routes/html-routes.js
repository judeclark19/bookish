module.exports = function (app) {
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    res.render("index");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    res.render("login")
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
