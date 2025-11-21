const Product = require("../models/product");
const shortid = require("shortid");
const slugify = require("slugify");


exports.createProduct =async (req, res) => {
  // res.status(200).json( { file: req.files, body: req.body ,message:"OM NAMA SHIVAYA"} );

  try{
    const {name,price,description,category,booked}=req.body;

    let productPicture = [];

    if (req.files.length > 0) {
      productPicture = req.files.map((file) => {
        return { img: file.filename };
      });
    }
  
    

    const data=await Product.create({name,slug: slugify(name),price,description,category,productPicture,booked})

    if(data){
    res.status(200).json(
        {
            success:true,
            message:"user registered successfully",
            data:data
        }
    )
  }

}catch(err){
  console.error(err)
  console.log(err);
  res.status(500)
  .json({
      success:false,
      data:"internal server error",
      message:err.message
  })
}

}


exports.getProducts = async (req, res) => {
  const products = await Product.find({ })
    .select("_id name price slug description productPicture category booked")
    .exec();

  res.status(200).json({ products });
};

exports.delete_vehical=async(req,res)=>{
  try{
    const { productid} = req.body
    
    
  
    const response=await Product.deleteOne({_id:productid})
  
    res.status(200).json(
      {
          success:true,
          message:" Vehical deleted successfully"
      }

  )
  
  
  
  
  }catch(err){
    console.error(err)
    console.log(err);
    res.status(500).json(
        {
            success:false,
            data:"internal server error",
            message:err.message
        })
  }

}


exports.updata_booked=async(req,res)=>{
  try{
    const {id, booked   } = req.body
    
    
  
    const response=await Product.updateOne({_id:id},{
      booked:booked
    })
  
    res.status(200).json(
      {
          success:true,
          data:response,
          // message:"Approved successfully"
      }
  )
  
  
  
  
  }catch(err){
    console.error(err)
    console.log(err);
    res.status(500).json(
        {
            success:false,
            data:"internal server error",
            message:err.message
        })
  }
  }