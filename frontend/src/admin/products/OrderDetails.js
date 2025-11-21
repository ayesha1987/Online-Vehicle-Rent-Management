import { useState,useEffect } from "react";
import AdminNav from "../AdminNav";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function OrderDetails(){

  const product = useSelector((state) => state.product);
  // console.log("ppppppppprrrrrrrrrroooooooodddddduuuuct:",product);
  
    const [details, setdetails] = useState([]); 
    const navigate=useNavigate()
// console.log("YYYYYYYYYY:",details);

  const oderhandal = async () => {
    try{
      const fetchdata= await fetch('http://localhost:5000/api/v1/cart/getall')
      const res = await fetchdata.json()
      // console.log("resssss: ",res);

      
      setdetails(res.data)
      
    }

    catch (error) {
      console.log(error);
    }
  };



useEffect(() => {
    oderhandal();
  },[]);

  const approvehandlar= async (data)=>{
    const booked="Booked"
            const res =await fetch("http://localhost:5000/api/v1/cart/approve",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
              id:data._id,
              userid:data.userid,
              username:data.username,
              productid:data.productid,
              category :data.category,
              Pimage:data.Pimage,
              totalprice:data.totalprice,
              name:data.name,
              verify:"Success"
            })
        });

        let resjson=await res.json();
        if(res.status===200){
            // setmessage(resjson.message)
            Update_booked(data.productid,booked)
            console.log(resjson.success);
            // navigate('/allcar_details')
            toast.success(resjson.message)
            window.location.reload()

            
        }
        else{
            console.log("somthing went wrong");
            toast.error("Somthing went wrong")
            
        }
    
  }

  const rejecthandlar= async (data)=>{
    const res =await fetch("http://localhost:5000/api/v1/cart/reject",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
      id:data._id,
      userid:data.userid,
      username:data.username,
      productid:data.productid,
      category :data.category,
      Pimage:data.Pimage,
      totalprice:data.totalprice,
      name:data.name,
      verify:"Reject"
    })
});

let resjson=await res.json();
if(res.status===200){

    toast.success("Order rejected successfully")
    window.location.reload()


    
}
else{
    console.log("somthing went wrong");
    toast.error("Somthing went wrong")
    
}

}
let newdata=[]

  for (let i = 0; i < details.length; i++) {
    
    if(details[i].verify==="Notyet"){
      newdata.push(details[i])
    }
    if(details[i].verify==="Success"){
      newdata.push(details[i])

      
    }
    if(details[i].verify==="Reject"){
      newdata.push(details[i])
    }
    
  }


  const getuserdetails= async (userid)=>{
    const res =await fetch("http://localhost:5000/api/v1/getusertoad",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body:JSON.stringify({userid})
});

let resjson=await res.json();
if(res.status===200){
    
    const userdataad=JSON.stringify(resjson.data)
    window.localStorage.setItem('userdetailsad',userdataad)
    navigate('/userprofilead')
}
else{
    console.log("somthing went wrong");
    toast.error("Somthing went wrong")
    
}

}

const Update_booked= async(productid,booked)=>{
  const res =await fetch("http://localhost:5000/api/v1/bookedupdate",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
      id:productid,
      booked:booked
    })
});

let resjson=await res.json();
if(res.status===200){

    toast.success("updata success")
    window.location.reload()


    
}
else{
    console.log("somthing went wrong");
    toast.error("xxxxx")
    
}
}
  

const RemoveOrder= async (data)=>{
 const cartid=data._id
 const booked="Notbooked"
    
  try{
  const res = await fetch("http://localhost:5000/api/v1/cart/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({cartid}),
  });

  let resjson=await res.json();

  if(res.status===200){
    Update_booked(data.productid,booked)
    console.log("reeeeeeeeeeereere",resjson);
    toast.success(resjson.message)
    window.location.reload()
    
  }
  if(res.status===400){
  }
}catch(error){
  console.log(error);
  
}


}






    return(
        <div >
        <AdminNav/>
        <div  className="every" >
        <u> <h1>Order Details: </h1></u>
            
            <div className="mainproductcontaineruser">
              <div>
                <table>
                  <thead>
                    <tr>
                      <th className="orderdname" >User Name</th>
                      <th>User ID</th>
                      <th>Vehical Name</th>
                      <th>Vehical ID</th>
                      <th>category</th>
                      <th>Booked date</th>
                      <th>From date</th>
                      <th>Return date</th>
                      <th>Total Days</th>
                      <th>Total Price</th>
                      <th>Verification</th>
                      <th>Approve or Reject</th>
                      {/* <th>Remove Order </th> */}
                    
     
                    </tr>
                  </thead>
                  <tbody>
                    {newdata.length > 0
                      ? newdata.map((data) => (
                          <tr key={data._id}  >
                            <td>{data.username}</td>
                            <td onClick={()=>{getuserdetails(data.userid)}} >{data.userid.slice(0,10)}</td>
                            <td>{data.name}</td>
                            <td>{data.productid.slice(0,10)}</td>
                            {/* <td>{product.quantity}</td> */}
                            <td>{data.category}</td>
                            <td >{data.createdAt.slice(0,10)}</td>
                            <td>{data.fromdate.slice(0,10)}</td>
                            <td>{data.todate.slice(0,10)}</td>
                            <td>{data.days} </td>
                            <td>{data.totalprice}</td>
                            <td>{data.verify}</td>
                            <td className="approverejectbtn"><button className="approvebtn" onClick={()=>approvehandlar(data)}>Approve</button><button className="rejectbtn" onClick={()=>rejecthandlar(data)}>Reject</button></td>
                            {/* <td><button className="removebtn" onClick={()=>{RemoveOrder(data)}} >Remove</button></td> */}
                            

                            
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          
        </div>
        </div>
    )


}
export default OrderDetails;