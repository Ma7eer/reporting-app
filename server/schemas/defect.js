const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const defectSchema = new Schema({
  reportId: Schema.Types.ObjectId,
  latitude: String,
  longitude: String,
  chainage: String,
  defectType: String,
  imageUrl: String,
  length: Number,
  lengthUnit: String,
  width: Number,
  widthUnit: String,
  height: Number,
  heightUnit: String,
  notes: String
});

exports.defectSchema = defectSchema;
