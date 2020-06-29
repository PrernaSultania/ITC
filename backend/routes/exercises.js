const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/search").get((req,res) => {
  res.render("search.ejs")
});

router.route("/add").post((req, res) => {
  //   console.log(req.body);

  const SystemName = req.body.SystemName;
  const ChangeType = req.body.ChangeType;
  const SeverityLevel = req.body.SeverityLevel;
  const Dateofrequest = Date.parse(req.body.Dateofrequest);
  const CRF = Number(req.body.CRF);
  const Description = req.body.Description;
  const ExpectedDate = Date.parse(req.body.ExpectedDate);
  const RequestBy = req.body.RequestBy;
  const ApprovedBy = req.body.ApprovedBy;
  const DateOfReceipt = Date.parse(req.body.DateOfReceipt);
  const DMMRemarks = req.body.DMMRemarks;

  const newExercise = new Exercise({
    SystemName,
    ChangeType,
    SeverityLevel,
    Dateofrequest,
    CRF,
    Description,
    ExpectedDate,
    RequestBy,
    ApprovedBy,
    DateOfReceipt,
    DMMRemarks,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/search").post((req, res) => {
  let SystemName = req.body.SystemName;
  if (!SystemName) {
    res.json({ message: "SystemName not provided" });
  }
  Exercise.find({ SystemName: SystemName }).then((data) => {
    if (data.length == 0) {
      res.json({ message: "No data found with given SystemName" });
    }
    res.json({ data: data, count: data.length });
  });
});

module.exports = router;
