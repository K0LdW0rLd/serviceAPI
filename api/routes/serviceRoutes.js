module.exports = function (app) {
  let service = require("../controllers/serviceController");
  // Routes
  // add this below app.use("/", routes) to make index.html a static file
    app.route('/')
        .get(function (req, res) {
            res.sendFile(process.cwd() + '/index.html');
        });
  app.route("/service").get(service.listServices).post(service.createService);
  app
    .route("/service/:serviceId")
    .get(service.readService)
    .put(service.updateService)
    .delete(service.deleteService);
};
