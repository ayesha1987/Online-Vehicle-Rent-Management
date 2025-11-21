const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    slug: { 
        type: String, 
        required: true, 
        unique: true 
    },
    price: { 
        type: Number, 
        required: true 
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    booked:{
        type: String,
        enum: ["Notbooked", "Booked"],
        default: "Notbooked",
    },


    productPicture: [
        { img: { type: String } }
    ],
    reviews: [
        {
            userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
            review: String
        }
    ],
    category: { 
        type: String,
        required: true,
     },



}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);



