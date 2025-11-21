const Cart = require("../models/cart");


exports.addItemToCart = async(req, res) => {
  
try{
  const {userid}=req.body
  const {totalprice}=req.body
  const {user}=req.body
  const {showonecard}=req.body
  const {days}=req.body
  const {fromdate}=req.body
  const {todate}=req.body
  
  

  const productid=showonecard._id
  const name=showonecard.name
  const category=showonecard.category
  const Pimage=showonecard.productPicture[0].img
  const username=user.fullName
  
  
  

  

  const existscart = await Cart.findOne({userid})

  if(!existscart){
   
    

    const response= await Cart.create({userid,productid,totalprice,name,category,Pimage,username,days,fromdate,todate})
  
    if(response){
      res.status(200).json({data:response,message:"item added successfully"})
    }
    else{
      res.status(400).json({message:"item added fails"})
    }

  }else{
    res.status(400).json({message:"vehical is already ordered"})
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

};


exports.getOrder=async(req,res)=>{
  const {userid}=req.body
  const existscart = await Cart.findOne({userid})

  if(existscart){
res.status(200).json(
  {
      success:true,
      data:existscart,
      message:"Vehical added successfully"
  }
)
  }

}



exports.getVehicalDetails=async(req,res)=>{


  try{
  // data base response
      const response = await Cart.find()
      

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



exports.updata_approve=async(req,res)=>{
try{
  const {         
    id,     
    userid,
    username,
    productid,
    category ,
    Pimage,
    totalprice,
    name,
    verify} = req.body
  
  

  const response=await Cart.updateOne({_id:id},{
    userid:userid,
    username: username,
    productid:productid ,
    name:name,
    category:category ,
    Pimage:Pimage ,
    totalprice:totalprice,
    verify:verify
  })

  res.status(200).json(
    {
        success:true,
        data:response,
        message:"Approved successfully"
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

exports.updata_reject=async(req,res)=>{
  try{
    const {         
      id,     
      userid,
      username,
      productid,
      category ,
      Pimage,
      totalprice,
      name,
      verify} = req.body
    
    
  
    const response=await Cart.updateOne({_id:id},{
      userid:userid,
      username: username,
      productid:productid ,
      name:name,
      category:category ,
      Pimage:Pimage ,
      totalprice:totalprice,
      verify:verify
    })
  
    res.status(200).json(
      {
          success:true,
          data:response,
          message:"Approved successfully"
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


  

  exports.deletcart=async(req,res)=>{
    try{
      const {cartid} = req.body
      
      
    
      const response=await Cart.deleteOne({_id:cartid})
    
      if(response){
      res.status(200).json(
        {
            success:true,
            message:"Order deleted Successfully"
        }
    )
  }
    
    
    
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