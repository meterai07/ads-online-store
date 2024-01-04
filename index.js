require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mysql = require("mysql2");
const db = require("./models");
const router = require("./routes/index");
const cors = require("cors");

db.sequelize
  .sync({
    // force: true // uncomment this line to drop all tables and create new ones
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });


app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
