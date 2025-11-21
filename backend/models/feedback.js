


const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userid: { type: String, required: true },
    uname: { type: String, required: true },
    productid: { type: String, required: true },
    productname: { type: String, required: true },
    feedback:{type:String,required:true}
}, { timestamps: true });


module.exports = mongoose.model('Feedback', feedbackSchema);