const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
const mongoose = require('mongoose');
const reportSchema = require('./schemas/report').reportSchema;
const defectSchema = require('./schemas/defect').defectSchema;

//Set up default mongoose connection
const mongoDB = `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0-vg4tj.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to db');

  // setup models
  const Report = mongoose.model('report', reportSchema);
  const Defect = mongoose.model('defect', defectSchema);

  app.use(bodyParser.urlencoded({ extended: true }));

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
    Report.find((err, reports) => {
      if (err) return console.error(err);
      console.log(reports);
      res.status(200).send({data: reports});
    });
  });

  app.get("/reports/:id", (req, res) => {
    Report.findOne({_id: req.params.id}, (err, report) => {
      if (err) return console.error(err);
      console.log(report);
      res.status(200).send({data: [report]});
    });
  });

  app.get("/reports/:id/defects", (req, res) => {
    Defect.find({ reportId: req.params.id}, (err, defects) => {
      if (err) return console.error(err);
      console.log(defects);
      res.status(200).send({data: defects});
    });
  });

  app.post("/reports", (req, res) => {
      const {reportName, reportDate, preparedBy} = req.body;
      const report = new Report({
        reportName,
        reportDate,
        preparedBy
      });

      report.save((err, value) => {
        if (err) {
          console.err('Error creating report ', err);
          res.status(500).err('Error creating report ', err);
        }
        console.log(value);
        res.status(200).send(value);
      });
  });

  app.delete("/reports/:id", (req, res) => {
    Report.findByIdAndDelete(req.params.id, (err, succ) => {
      if (err) {
        console.err('Error deleting report');
        res.status(500).send(err);
      } else {
        res.status(200).send(succ);
      }
    });
  });

  app.patch("/reports/:id", (req, res) => {
    Report.findOneAndUpdate({_id: req.params.id}, {...req.body}, (err, succ) => {
      if (err) {
        console.err('Error updating report');
        res.status(500).send(err);
      } else {
        res.status(200).send(succ);
      }
    });
  });

  app.get("/defects", (req, res) => {
    Defect.find((err, defects) => {
      if (err) return console.error(err);
      console.log(defects);
      res.status(200).send({data: defects});
    });
  });

  app.get("/defects/:id", (req, res) => {
    Defect.findOne({_id: req.params.id}, (err, report) => {
      if (err) return console.error(err);
      console.log(report);
      res.status(200).send({data: [report]});
    });
  });

  app.post("/defects", (req, res) => {
    const {
      reportId,
      latitude,
      longitude,
      chainage,
      defectType,
      imageUrl,
      length,
      lengthUnit,
      width,
      widthUnit,
      height,
      heightUnit,
      notes
    } = req.body;
    const defect = new Defect({
      reportId,
      latitude,
      longitude,
      chainage,
      defectType,
      imageUrl,
      length,
      lengthUnit,
      width,
      widthUnit,
      height,
      heightUnit,
      notes
    });

    defect.save((err, value) => {
      if (err) {
        console.err('Error creating defect ', err);
        res.status(500).err('Error creating defect ', err);
      }
      console.log(value);
      res.status(200).send(value);
    });
  });

  app.delete("/defects/:id", (req, res) => {
    Defect.findByIdAndDelete(req.params.id, (err, succ) => {
      if (err) {
        console.err('Error deleting defect');
        res.status(500).send(err);
      } else {
        res.status(200).send(succ);
      }
    });
  });

  app.patch("/defects/:id", (req, res) => {
    Defect.findOneAndUpdate({_id: req.params.id}, {...req.body}, (err, succ) => {
      if (err) {
        console.err('Error updating defect');
        res.status(500).send(err);
      } else {
        res.status(200).send(succ);
      }
    });
  });

  app.listen(8000, () => console.log("Server running on port 8000..."));
});
