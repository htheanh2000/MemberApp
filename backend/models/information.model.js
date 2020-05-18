const mongoose = require('mongoose');

const Schema = mongoose.Schema ;

const informationSchema = new Schema({
    idMember: {type:String, required:true},
    major: {type: String, required:false},
    className: {type:String, required: false},
    phoneNumber: {type: String, required:false},
    email: {type: String, required: false },
    birthday: {type: Date, required:false},
    description: {type: String, required: false}
},{
    timestamps: true,
});

const Information = mongoose.model('Information',informationSchema);

module.exports = Information;