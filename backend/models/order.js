const mongoose = require("mongoose");
// A
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },

      date: {
        type: Date,
      },
      isCompleted: {
        type: Boolean,
        default: false,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
