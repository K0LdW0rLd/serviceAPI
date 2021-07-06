require("dotenv").config();
const express = require("express");
const app = express();
const ServiceRoutes = require("./api/routes/serviceRoutes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/index.html");
});
app.use("/", ServiceRoutes);

// var routes = require("./api/routes/serviceRoutes"); //importing route
// routes(app); //register the route
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
