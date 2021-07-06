// Install Mongoose
const mongoose = require("mongoose");

// Reset promise
mongoose.Promise = Promise;

// let mongoURI = "";

// if (process.env.NODE_ENV === "production") {
//   mongoURI = process.env.DB_URL;
// } else {
//   mongoURI = "mongodb://localhost/service";
// }

// .connect takes two arguments, one is the path to the db
// second argument where you set your settings for the connection
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: {
      socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 },
    },
  },
  function (err) {
    if (err) return console.log("Error: ", err);
    console.log(
      "MongoDB Connection -- Ready state is:",
      mongoose.connection.readyState
    );
  }
);
module.exports = mongoose;
