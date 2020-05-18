const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    idMember: {
        type: String,
        require: true,
        unique: true,
        trim:true,
        minlength: 8,
        maxlength: 8
    },
    memberName: {
        type:String,
        required:true,
    },   
}, {
    timestamps: true, 
});

const Member = mongoose.model('Member', MemberSchema);

module.exports = Member ;