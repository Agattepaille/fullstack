const express = require("express");
const mongoose = require("mongoose");
const app = express();
const stuffRoutes = require("./routes/stuff");

mongoose
  .connect("mongodb://localhost:27017/", {
    // useNewUrlParser: true, // Remove this line
    // useUnifiedTopology: true // Remove this line
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.use("/api/stuff", stuffRoutes);

/* Agattepaille
 9dQgHq5zJGevzMnX
 mongodb+srv://Agattepaille:<password>@clusteropenclassrooms.kljbadl.mongodb.net/ */

module.exports = app;
