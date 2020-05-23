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

app.get("/reports/:id/defects", (req, res) => {
  if (globalDB) {
    globalDB.collection("defects").find({reportId: parseInt(req.params.id, 10)}).toArray((err, data) => {
      if (err) {
        res.err(err);
      }
      res.send({data});
    });
  }
});

app.get("/defects", (req, res) => {
  if (globalDB) {
    globalDB.collection("defects").find().toArray((err, data) => {
      if (err) {
        res.err(err);
      }
      res.send({data});
    });
  }
});

app.get("/defects/:id", (req, res) => {
  if (globalDB) {
    globalDB.collection("defects").findOne({id: parseInt(req.params.id, 10)}).then((data) => {
      res.send({data});
    }).catch((err) => res.err(err));
  }
});

app.listen(8000, () => console.log("Server running on port 8000..."));
