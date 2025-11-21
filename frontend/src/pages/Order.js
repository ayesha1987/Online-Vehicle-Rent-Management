import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdFeedback } from "react-icons/md";


function Order() {
  const [details, setdetails] = useState({}); 
  const [feed, setfeed] = useState(""); 
 
  

console.log("fulldataa:",details);

const juser = localStorage.getItem("user");
const user = JSON.parse(juser);
let userid=user._id
// let name=user.name
// let productid=details.productid
// let productname=details.name


const getAllData= async ()=>{
  try{
  const res = await fetch("http://localhost:5000/api/v1/cart/get", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({userid}),
  });

  let resjson=await res.json();

  if(res.status===200){
    
    setdetails(resjson.data)
    
    
  }
  if(res.status===400){
  }
}catch(error){
  console.log(error);
  
}


}




  useEffect(()=>{
getAllData()
  },[])

  const feedbackhandlar=async()=>{
    let userid=user._id
    let uname=user.fullName
    let productid=details.productid
    let productname=details.name

    console.log(userid,uname,productid,productname,feed);
    
    try{
      const res = await fetch("http://localhost:5000/api/v1/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({userid,uname,productid,productname,feed}),
      });
    
      let resjson=await res.json();
    
      if(res.status===200){
        toast.success(resjson.message)        
        
      }
      if(res.status===400){
      }
    }catch(error){
      console.log(error);
      
    }
  }


  const deleteorder= async (cartid)=>{

    
    try{
    const res = await fetch("http://localhost:5000/api/v1/cart/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({cartid}),
    });
  
    let resjson=await res.json();
  
    if(res.status===200){
      // console.log("reeeeeeeeeeereere",resjson);
      // toast.success(resjson.message)
      window.location.reload()
      
    }
    if(res.status===400){
    }
  }catch(error){
    console.log(error);
    
  }
  
  
  }
  




if(details.verify===undefined){
  return (
    
    <div className="car_details_form" >
      <div className="h1andbutton">
        <h1 className="acd">Vehical book details</h1>
        <Link className="button-85" id="tabbnt" to="/user/userdashbord">Home</Link>
      </div>
      <div className="mainproductcontaineruser">
              <div>
                <table>
                  <thead>
                    <tr>
                      
                     
                      <th>Vehical Name</th>
                      <th>Vehical ID</th>
                      <th>category</th>
                      <th>Total Price</th>
                      <th>Booking process</th>
     
                    </tr>
                  </thead>
                  <tbody>
                
           
                  </tbody>
                </table>
                

              </div>
            </div>
      
    </div>
    
  );
}



if(details.verify==="Notyet"){
  
  return (
    
    <div className="car_details_form" >
      <div className="h1andbutton">
        <h1 className="acd">Vehical book details</h1>
        <Link className="button-85" id="tabbnt" to="/user/userdashbord"> Home</Link>
      </div>
      <div className="mainproductcontaineruser">
              <div>
                <table>
                  <thead>
                    <tr>
                      
                     
                      <th>Vehical Name</th>
                      <th>Vehical ID</th>
                      <th>category</th>
                      <th>Total Price</th>
                      <th>Booking process</th>
     
                    </tr>
                  </thead>
                  <tbody>
             
                          <tr key={details._id}  >
                            <td>{details.name}</td>
                            <td>{details.productid}</td>
                            {/* <tddetailsproduct.quantity}</td> */}
                            <td>{details.category}</td>
                            <td>{details.totalprice}</td>
                            <td back >Under Verification....</td>

                          </tr>
                          
          
                  </tbody>
                </table>

              </div>
            </div>

      
    </div>
    
  );
}if(details.verify==="Success"){
  return (
    
    <div className="car_details_form" >
      <div className="h1andbutton">
        <h1 className="acd">Vehicle book details</h1>
        <Link className="button-85" id="tabbnt" to="/user/userdashbord">Home</Link>
      </div>
      <div className="mainproductcontaineruser">
              <div>
                <table>
                  <thead>
                    <tr>
                      
                     
                      <th>Vehicle Name</th>
                      <th>Vehicle ID</th>
                      <th>category</th>
                      <th>Total Price</th>
                      <th>Return vehicle at</th>
                      <th>Booking process</th>
                      <th>Return</th>
                     
     
                    </tr>
                  </thead>
                  <tbody>
                
                          <tr key={details._id}  >
                            
                            
                            <td>{details.name}</td>
                            <td>{details.productid}</td>
                            {/* <tddetailsproduct.quantity}</td> */}
                            <td>{details.category}</td>
                            <td>{details.totalprice}</td>
                            <td>{details.fromdate.slice(0,10)}</td>
                            <td>Vehical booked successfully</td>
                            <td><button className="rejectbtn" onClick={()=>{deleteorder(details._id)}} >Return</button></td>
                            
                          </tr>
           
                  </tbody>
                </table>

                <div className="feedbackdiv" >
                <h1> Feed back : </h1>
                <input placeholder="Give feedback about car" type="text" className="inputfeedback" value={feed} onChange={(e)=>{setfeed(e.target.value)}}/>         
               <tr> <button  onClick={feedbackhandlar} >send feedback</button></tr>
                </div>
              </div>
            </div>
      
    </div>
    
  );
}

if(details.verify==="Reject"){
  return (
    
    <div className="car_details_form" >
      <div className="h1andbutton">
        <h1 className="acd">Vehicle book details</h1>
        <Link className="button-85" id="tabbnt" to="/user/userdashbord">Home</Link>
      </div>
      <div className="mainproductcontaineruser">
              <div>
                <table>
                  <thead>
                    <tr>
                      
                     
                      <th>Vehicle Name</th>
                      <th>Vehicle ID</th>
                      <th>category</th>
                      <th>Total Price</th>
                      <th>Booking process</th>
                      <th>Book again </th>
                     
     
                    </tr>
                  </thead>
                  <tbody>
                
                          <tr key={details._id}  >
                            
                            
                            <td>{details.name}</td>
                            <td>{details.productid}</td>
                            {/* <tddetailsproduct.quantity}</td> */}
                            <td>{details.category}</td>
                            <td>{details.totalprice}</td>
                            <td>Oredr rejected !</td>
                            <td><button className="rebook" onClick={()=>{deleteorder(details._id)}} >Book Again</button></td>
                            
                          </tr>
           
                  </tbody>
                </table>


              </div>
            </div>
      
    </div>
    
  );
}
}

export default Order;
