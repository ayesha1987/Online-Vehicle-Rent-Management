const express = require('express')
const multer  = require('multer')
const shortid = require("shortid");

const router=express.Router()

const {createProduct, getProducts, delete_vehical, updata_booked}=require('../controllers/product') 



const path = require("path");

const storage = multer.diskStorage({
  
  destination: "C:/Users/ganes/OneDrive/Desktop/NEW PROJECT/frontend/src/uploads",
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});



const upload = multer({ storage });

// router.post('/profile/create', upload.single('avatar'), function (req, res, next) {
//   res.status(200).json({file:req.file,body:req.body})
// })
router.post('/product/create', upload.array('productPicture'),createProduct )
router.post('/product/get', getProducts )
router.post('/product/delete', delete_vehical )
router.post('/bookedupdate', updata_booked )







module.exports = router;
