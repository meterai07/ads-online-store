require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mysql = require('mysql2');
const db = require('./models');
const router = require('./routes/index');

db.sequelize.sync({
    force: true
}).then(() => {
    console.log('Database connected');
    }).catch((err) => {
    console.log(err);
});

app.use(express.json());

app.use(router)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})