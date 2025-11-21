import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function FormToFillVehicalDetails(){


    // const [errormess,seterrmsg]=useState(" ")
    const navigate=useNavigate()

    const [formData,setformdata]=useState({
        brandname:" ",modelname:" ",cimage:" ",noplate:" ",fueltype:"",price:"",catogory:""
    })

    // const [message,setmessage]=useState()

    const [fillimage,setimage]=useState("") 

    function convertimage(e){
        var render=new FileReader();
        render.readAsDataURL(e.target.files[0]);
        render.onload=()=>{
          // console.log(render.result);
          setimage(render.result)
        };
        render.onerror=error=>{
          console.log("error: ",error);
        }
      }
    
      formData.cimage=fillimage
    
    function onChangeHandler(event){
        setformdata(prevFormdata =>{
            return{
                ...prevFormdata,
                [event.target.name]:event.target.value
            }
        })
        
        
    }


    const SubmitHandler = async(event)=>{
    
        event.preventDefault();
        
            const res =await fetch("http://localhost:5000/api/v1/vehicaldetails",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(formData)
            });

        let resjson=await res.json();
        if(res.status===200){
            // setmessage(resjson.success)
            console.log(resjson.success);
            // navigate('/allcar_details')
            toast.success("vehical details added successfully")
            
        }
        else{
            console.log("somthing went wrong");
            toast.error("Somthing went wrong")
            
        }
            
    }

    return(

        
    
        <>


      
        <div className="maincontainer" >
    <div className="firstcontainer" >
      <div className="titled" >Registration</div>
      <div  className="content" >
        <form onSubmit={SubmitHandler} >
          <div className="user-details">
  
  
            <div className="input-box">
              <span className="details">Car Brand</span>
              <input type="text" name="brandname" id="name" value={formData.brandname} onChange={onChangeHandler} placeholder="Enter car brandname"  />
            </div>
  
            <div className="input-box">
              <span className="details">Car Model Name</span>
              <input type="text" name="modelname" id="email" value={formData.modelname} onChange={onChangeHandler} placeholder="Enter your email" />
            </div>
            <div className="input-box">
              <span className="details">Fule Type</span>
              <input type="text" name="fueltype" id="phone" value={formData.fueltype} onChange={onChangeHandler} placeholder="Enter your number" />
            </div>
  
            <div className="input-box">
              <span className="details">Car Image</span>
              <input type="file" id="img"  onChange={convertimage}  />
            </div>
  
            <div className="input-box">
              <span className="details">Catogory</span>
              <input type="text" name="catogory" id="password" value={formData.catogory} onChange={onChangeHandler} placeholder="Enter your password" />
            </div>

            <div className="input-box">
              <span className="details">Car Number Plate Number</span>
              <input type="text" name="noplate" id="cPassword" value={formData.noplate} onChange={onChangeHandler} placeholder="Confirm your password" />
            </div>


            <div className="input-box">
              <span className="details">Price</span>
              <input type="text" name="price" id="cPassword" value={formData.price} onChange={onChangeHandler} placeholder="Confirm car price per day" />
            </div>
            
  
          </div>
         
          <div className="button">
            <input type="submit" name="signup" id="signup" value="register"/>
          </div>
        </form>
      </div>
    </div>
  
    </div>
  
  </>
    );
}

export default FormToFillVehicalDetails;