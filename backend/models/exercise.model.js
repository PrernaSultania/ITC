const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    SystemName: {type: String,required: true,},
    Dateofrequest: {type: Date,required: true},
    CRF: {type: Number,required: true},
    Description: {type: String,required: true},
    ExpectedDate: {type: Date,required: true},
    RequestBy: {type: String,required: true},
    ApprovedBy: {type: String,required: true},
    DateOfReceipt: {type: Date,required: true},
    DMMRemarks: {type: String,required: true},
}, {
    timestamps: true,
});

const User = mongoose.model('User',userSchema);
module.exports = User;