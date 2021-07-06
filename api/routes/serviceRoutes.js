const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.get("/service", serviceController.listServices);
router.post("/service", serviceController.createService);
router.get("/service/:serviceId", serviceController.readService);
router.put("/service/:serviceId", serviceController.updateService);
router.delete("/service/:serviceId", serviceController.deleteService);

// module.exports = function (app) {
//   let service = require("../controllers/serviceController");
//   // Routes
//   // add this below app.use("/", routes) to make index.html a static file
//     app.route('/')
//         .get(function (req, res) {
//             res.sendFile(process.cwd() + '/index.html');
//         });
//   app.route("/service").get(service.listServices).post(service.createService);
//   app
//     .route("/service/:serviceId")
//     .get(service.readService)
//     .put(service.updateService)
//     .delete(service.deleteService);
// };

module.exports = router;
