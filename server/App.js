const dotenv = require('dotenv');
var cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const app = express();
app.use(cookieParser())

// require("dotenv").config();
dotenv.config({ path: "./config.env" });
require('./db/Conn');


app.use(express.json());
app.use(cors())
// we link the routers file to make our route easy
app.use(require("./router/Auth"));



const port = process.env.PORT || 5000;

// Middleware

if (process.env.NODE_ENV == "production") {

  app.use(express.static("client/build"));
  const path = require("path");
}
// app.get('/about', (req, res) => {
//   res.cookie("test", 'hamza')
//   res.send('about!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})