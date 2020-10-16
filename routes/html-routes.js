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
    res.render("signup");
  });

  app.get("/all-clubs", function (req, res) {
    res.render("all-clubs");
  });

  app.get("/active-clubs", function (req, res) {
    res.render("active-clubs");
  });

  app.get("/my-clubs", function (req, res) {
    res.render("my-clubs");
  });

  app.get("/create-new-club", function (req, res) {
    res.render("create-new-club");
  });

  app.get("/trending", function (req, res) {
    res.render("trending");
  });

  app.get("/my-account", function (req, res) {
    // console.log();
    res.render("my-account");
  });

  app.get("/search-results", function (req, res) {
    res.render("search-results");
  });

  // // Here we've add our isAuthenticated middleware to this route.
  // // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });
};
