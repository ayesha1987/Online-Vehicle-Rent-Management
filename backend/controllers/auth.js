const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");
const user = require("../models/user");

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

exports.signup=async(req,res)=>{
  try{
      const{firstName,lastName,email,password,contactNumber,pofilePicture}=req.body;
    
      
      if(!firstName || !lastName || !email|| !password || !contactNumber || !pofilePicture){
        return res.status(292).json({ error: "Please filled the form properly"})
    }


      const userExist = await User.findOne({ email: email});

      if(userExist){
        return res.status(291).json({error: "User already exists"})
      }
      



    else{
      const data=await User.create({firstName,lastName,email,password,username:Math.random().toString(),contactNumber,pofilePicture})
// console.log("iiiiiiiiiiiiiiimmmmmmmmm:",data);

      res.status(200).json(
          {
              success:true,
              message:"user registered successfully"
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


exports.login=async(req,res)=>{
    
  try {
      
      const { email , password } = req.body;

      // if(!email || !password){
      //     return res.status(400).json({error: "invalid crededntials"})
      // }

      let user = await User.findOne({ email: email });

      

      if(user){

          const isPassword = await user.authenticate(req.body.password);
          if (isPassword && user.role === "user") {

            const token = generateJwtToken(user._id, user.role);
            const {_id,firstName,lastName,email,role,contactNumber,fullName,pofilePicture}=user;
            res.status(200).json({
              token,
              user:{_id,firstName,lastName,email,role,contactNumber,fullName,pofilePicture},
              message:"User login successfully"
            })
          }

          else{
            return res.status(250).json({
              message:"Invalid password"
            })
          }
        
      }  
        
      else{
        res.status(251).json({error: "User not found"})
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




exports.getuserdeailstoad=async(req,res)=>{
  try{
    const {userid} = req.body
    
    
  
    const response=await User.findById({_id:userid})
  
    if(response){
    res.status(200).json(
      {
          success:true,
          data:response,
          
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