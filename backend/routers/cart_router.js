const express = require("express");
const router = express.Router();
const {addItemToCart, getOrder, getVehicalDetails, updata_approve, updata_reject, deletcart,} = require("../controllers/cart");
const { requireSignin, userMiddleware } = require("../common-middleware");
const { feedback, getAllFeedBack } = require("../controllers/feedback");

// router.post("/cart",requireSignin,userMiddleware,addItemToCart);
router.post("/cart",addItemToCart);
router.post("/cart/get",getOrder);
router.get("/cart/getall",getVehicalDetails);
router.post("/cart/approve",updata_approve);
router.post("/cart/reject",updata_reject);
router.post("/feedback",feedback);
router.get("/getfeedback",getAllFeedBack);
router.post("/cart/delete",deletcart);


module.exports=router;