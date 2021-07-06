require("dotenv").config();
var express = require("express"),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require("mongoose"),
  Service = require("./api/models/serviceModel"),
  bodyParser = require("body-parser");

const helmet = require("helmet");
const compression = require("compression");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Servicedb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(compression());

var routes = require("./api/routes/serviceRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("Service RESTful API server started on: " + port);
