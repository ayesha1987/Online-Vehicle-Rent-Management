// const mongoose = require('mongoose');

// const cartSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     cartItems: [
//         {
//             product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//         }
//     ]
// }, { timestamps: true });


// module.exports = mongoose.model('Cart', cartSchema);


const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userid: { type: String, required: true },
    username: { type: String, required: true },
    productid: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    Pimage: { type: String, required: true },
    totalprice:{type:Number,require:true},
    days:{type:Number,require:true},
    fromdate:{type:Date},
    todate:{type:Date},
    verify:{
        type: String,
        enum: ["Notyet", "Success", "Reject"],
        default: "Notyet",
    }


}, { timestamps: true });


module.exports = mongoose.model('Cart', cartSchema);