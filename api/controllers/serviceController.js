const Service = require("../models/serviceModel");

exports.listServices = function (req, res) {
  Service.find({}, (err, data) => {
    if (err) {
      return res.json({ Error: err });
    }
    return res.json(data);
  });
};

exports.createService = function (req, res) {
  let newService = new Service(req.body);
  newService.save((item) => {
    res.json(item);
  });
};

exports.readService = function (req, res) {
  Service.findById(req.params.serviceId).then((item) => {
    res.json(item);
  });
};

exports.updateService = function (req, res) {
  Service.findOneAndUpdate(
    { _id: req.params.serviceId },
    req.body,
    { new: true },
    function (err, item) {
      if (err) res.send(err);
      res.json(item);
    }
  );
};

exports.deleteService = function (req, res) {
  Service.remove({ _id: req.params.serviceId }).then((item) => {
    res.json({ message: "Service successfully deleted" });
  });
};
