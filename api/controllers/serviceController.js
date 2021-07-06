const Service = require("../models/serviceModel");

exports.listServices = function (req, res) {
  Service.find({}, (err, data) => {
    if (err) {
      return res.json({ Error: err });
    }
    return res.json(data);
  });
};

exports.getOne = function (req, res) {
  let name = req.params.name;
  Service.findOne({ name: name }, (err, data) => {
    if (err || !data) {
      return res.json({ message: "Service doesn't exist." });
    } else return res.json(data);
  });
};

exports.createService = function (req, res) {
  Service.findOne({ name: req.body.name }, (data) => {
    //if tea not in db, add it
    if (data === null) {
      //create a new tea object using the Tea model and req.body
      const newService = new Service({
        name: req.body.name,
        price: req.body.price, // placeholder for now
        description: req.body.description,
      });
      // save this object to database
      Service.save((err, data) => {
        if (err) return res.json({ Error: err });
        return res.json(data);
      });
      //if tea is in db, return a message to inform it exists
    } else {
      return res.json({ message: "Service already exists" });
    }
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
