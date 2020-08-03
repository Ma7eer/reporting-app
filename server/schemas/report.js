const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  reportId: {
    type: String,
    // unique: true
  }, // R-<first 4 letters of user ID>-<year>-sequence
  reportName: { type: String },
  reportDate: { type: Date },
  preparedBy: { type: String },
  defectList: [{ type: Schema.Types.ObjectId, ref: "defect" }],
});

exports.reportSchema = reportSchema;
