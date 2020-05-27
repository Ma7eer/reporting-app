const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  reportName: String,
  reportDate: Date,
  preparedBy: String
});

exports.reportSchema = reportSchema;
