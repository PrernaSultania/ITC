const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    SystemName: {type: String,required: true,},
    ChangeType: {type:String,required: true},
    SeverityLevel: {type:String,required:true},
    Dateofrequest: {type: String,required: true},
    CRF: {type: Number,required: true},
    Description: {type: String,required: true},
    ExpectedDate: {type: String,required: true},
    RequestBy: {type: String,required: true},
    ApprovedBy: {type: String,required: true},
    DateOfReceipt: {type: String,required: true},
    DMMRemarks: {type: String,required: true},
}, {
    timestamps: true,
});

const User = mongoose.model('User',userSchema);
module.exports = User;