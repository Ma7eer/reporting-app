const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
const testData = require('./mock-data');
const MongoClient = require('mongodb').MongoClient;

// TODO: Hacky way to pass connection around. Find something better.
let globalDB;
MongoClient.connect('mongodb://localhost/reporting_app', (err, client) => {
  if (err) throw err;
  globalDB = client.db("reporting_app");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "./images");
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}.jpeg`);
  },
});

const upload = multer({ storage: Storage });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", upload.array("photo", 3), (req, res) => {
  console.log("file", req.files);
  console.log("body", req.body);
  res.json({ message: "works" });
});

app.get("/reports", (req, res) => {
  if (globalDB) {
    globalDB.collection("reports").find().toArray((err, data) => {
      if (err) {
        res.err(err);
      }
      res.send({data});
    });
  }
});

app.get("/reports/:id", (req, res) => {
  if (globalDB) {
    globalDB.collection("reports").findOne({id: parseInt(req.params.id, 10)}).then((data) => {
      res.send({data});
    }).catch((err) => res.err(err));
  }
});

app.get("/defects", (req, res) => {
  res.json({ data: testData.MOCK_DEFECTS });
});

app.get("/defects/:report_id", (req, res) => {
  const defects = testData.MOCK_DEFECTS.filter((defect) => defect.reportId == req.params.report_id) || {};
  res.json({ data: defects });
});

app.listen(8000, () => console.log("Server running on port 8000..."));
