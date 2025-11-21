const Feedback = require("../models/feedback");


exports.feedback = async(req, res) => {
  
try{
  const {userid}=req.body
  const {uname}=req.body
  const {productid}=req.body
  const {productname}=req.body
  const {feed}=req.body

  
  

  const response = await Feedback.create({
    userid:userid,
    uname:uname,
    productid:productid,
    productname:productname,
    feedback:feed
  })

  res.status(200).json(
    {
        success:true,
        message:"Feed back sent successfuflly"
    }
)

      
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

};


exports.getAllFeedBack=async(req,res)=>{


  try{
  // data base response
      const response = await Feedback.find()
      

      res.status(200).json(
          {
              success:true,
              data:response,
              
          }
      )

  }

  catch(err){
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