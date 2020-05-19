const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();

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
  res.send("Get ALL reports");
});

app.get("/reports/:id", (req, res) => {
  res.send("Get report with id: "+ req.params.id);
});

app.listen(8000, () => console.log("Server running on port 8000..."));
