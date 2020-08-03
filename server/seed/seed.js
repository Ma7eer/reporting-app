const mongoose = require("mongoose");
const reportSchema = require("../schemas/report").reportSchema;
const Report = mongoose.model("report", reportSchema);
const db = require("../db.config");

const seeDB = () => {
  for (let i = 0; i < 10; i++) {
    let report = new Report({
      reportId: `${i}`, // R-<first 4 letters of user ID>-<year>-sequence
      reportName: `road-${i}`,
      reportDate: Date.now(),
      preparedBy: `person-${i}`,
      defectList: [],
    });

    report.save();
  }
};

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("connected to db");

  seeDB();
});
