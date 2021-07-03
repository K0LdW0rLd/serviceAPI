const data = require("./data.json");
const Service = require("../models/serviceModel");

const serviceData = data.map((item) => {
  const service = {};
  service.id = item.id;
  service.name = item.name;
  service.price = item.price;
  service.description = item.description;
  return service;
});

console.log(serviceData);

Service.remove({}).then(() => {
  Service.create(serviceData)
    .then((serviceItem) => {
      console.log(serviceItem);
    })
    .catch((err) => {
      console.log(err);
    });
});
