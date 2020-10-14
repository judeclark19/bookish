const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// db.sequelize.sync().then(function () {
app.listen(PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}`);
});
// });
