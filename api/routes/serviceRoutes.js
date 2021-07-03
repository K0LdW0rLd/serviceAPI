module.exports = function (app) {
  let service = require("../controllers/serviceController");
  // Routes
  app.route("/service").get(service.listServices).post(service.createService);
  app
    .route("/service/:serviceId")
    .get(service.readService)
    .put(service.updateService)
    .delete(service.deleteService);
};
