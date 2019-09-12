<<<<<<< HEAD
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const config = require("./config/database");
=======
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
// const config = require('./config/database');
>>>>>>> 4bc0f770825997fb23c37b48388ccf1ed37635c7

// Connect To Database (NEW) But not working!!!!!!!!!! (because of secret in db.js!!!!!)
const db = 'mongodb+srv://samrem:3Gwurube.@cluster0-xjt13.mongodb.net/test?retryWrites=true&w=majority';
// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
<<<<<<< HEAD
//mongoose.connect(db.mongoURI, {
//useMongoClient: true
//})
//.then(() => console.log('MongoDB Connected...'))
//.catch(err => console.log(err));
=======
mongoose.connect(db, {
    useMongoClient: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));
>>>>>>> 4bc0f770825997fb23c37b48388ccf1ed37635c7

// Connect To Database (OLD CODE)
<<<<<<< HEAD

mongoose.connect(config.database, { useNewUrlParser: true });
// On Connection
mongoose.connection.on("connected", () => {
  console.log("Database Actively working...");
});
=======
// mongoose.connect(config.database, { useNewUrlParser: true });
// // On Connection
// mongoose.connection.on('connected', () => {
//   console.log('Database Actively working...');
// });
>>>>>>> 4bc0f770825997fb23c37b48388ccf1ed37635c7
// On Error
mongoose.connection.on("error", err => {
  console.log("Database error " + err);
});

const app = express();

const users = require("./routes/users");

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);

// Index Route
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Start Server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
