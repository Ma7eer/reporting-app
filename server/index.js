const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
const testData = require('./mock-data');

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
  res.json({ data: testData.MOCK_REPORTS });
});

app.get("/reports/:id", (req, res) => {
  const report = testData.MOCK_REPORTS.find((report) => report.id == req.params.id) || {};
  res.json({ data: report });
});

app.get("/defects", (req, res) => {
  res.json({ data: testData.MOCK_DEFECTS });
});

app.get("/defects/:report_id", (req, res) => {
  const defects = testData.MOCK_DEFECTS.filter((defect) => defect.reportId == req.params.report_id) || {};
  res.json({ data: defects });
});

app.listen(8000, () => console.log("Server running on port 8000..."));
