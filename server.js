const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.get("/", (req, res) => {
  res.render("index");
});

// db.sequelize.sync().then(function () {
app.listen(PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}`);
});
// });
