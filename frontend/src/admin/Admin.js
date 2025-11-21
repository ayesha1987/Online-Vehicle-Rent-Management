import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


function Admin(){

    const navigate=useNavigate()

    const [formdata,setformdata]=useState({
        name:" ",password:" "
    })

    const [message,setmessage]=useState()

    
    
    
    function changehandeler(event){
        setformdata(prevFormdata =>{
            return{
                ...prevFormdata,
                [event.target.name]:event.target.value
            }
        })
        
        
    }


    const onsubmithandler = async(event)=>{
    
        event.preventDefault();
        const allinputvalues={name:formdata.name,password:formdata.password}

        console.log("lllllllllll:",allinputvalues.name,allinputvalues.password);
        

        const ADNAME="RAM"
        const PASSWORD="1234"

        if(allinputvalues.name==ADNAME && allinputvalues.password==PASSWORD){

            navigate('/adminhome')
            toast.success("Admin Login successfully")
        }
        else{
            toast.error("Login Failed")
        }
        
    }


    
    return(
       
          



<>


        <div className="maincontainer" >
    <div className="firstcontainer" >
      <div className="titled" >Admin Login</div>
      <div  className="content" >
        <form onSubmit={onsubmithandler}>
          <div className="user-details">
  
            <div className="input-box">
              <span className="details">Email</span>
              <input required id="nam" type="text" onChange={changehandeler} placeholder="name" name="name" value={formdata.name} />
            </div>


            <div className="input-box">
              <span className="details">Password</span>
              <input required  id="pass" type="password" onChange={changehandeler} placeholder="password" name="password"  value={formdata.password}/>
            </div>

  
          </div>
         
          <div className="button">
            <input type="submit" name="signup" id="signup" value="Login"/>
          </div>
        </form>
      </div>
    </div>
  
    </div>
  
  </>

    );

}

export default Admin; 