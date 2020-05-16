const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const SystemName = req.body.SystemName;
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
        Dateofrequest,
        CRF,
        Description,
        ExpectedDate,
        RequestBy,
        ApprovedBy,
        DateOfReceipt,
        DMMRemarks,
    });

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => req.status(400).json('Error: '+ err));
});

module.exports = router;