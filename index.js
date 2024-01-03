require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mysql = require('mysql2');
const db = require('./models');

db.sequelize.sync({
    force: true
}).then(() => {
    console.log('Database connected');
    }).catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    db.User.findAll().then((users) => {
        res.json(users);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})