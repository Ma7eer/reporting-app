const mongoose = require("mongoose");

//Set up default mongoose connection
const mongoDB = `mongodb://root:abcdefg123@ds155299.mlab.com:55299/report`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
//Get the default connection
const db = mongoose.connection;

module.exports = db;
