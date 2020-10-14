const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const db = require("./models");
const axios = require("axios");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
axios
  .get(
    "https://v1.nocodeapi.com/icecicle04/gr/LrsOCSqWhlpBqsfr/searchAuthor?q=J.%20K.%20Rowling"
  )
  .then((response) => console.log(response.data));
// .then((response) => console.log(response.data));

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.get("/", (req, res) => {
  res.render("index");
});

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
});
