import { useEffect, useState } from "react";
import AdminNav from "../AdminNav"

function FeedbackAdmin(){
    const [details, setdetails] = useState([]); 

    console.log("fffffffffffffeeeeeeeeeeeefBBBBBBB:",details);

  const oderhandal = async () => {
    try{
      const fetchdata= await fetch('http://localhost:5000/api/v1/getfeedback')
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




    return(
        <div >
        <AdminNav/>
        <div  className="every" >
        <div className="mainproductcontainer">
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>User ID</th>
                      <th>Vehical Name</th>
                      <th>Vehical ID</th>
                      <th>Feedback</th>
                      
                    
     
                    </tr>
                  </thead>
                  <tbody>
                    {details.length > 0
                      ? details.map((data) => (
                          <tr key={data._id}  >
                            <td>{data.uname}</td>
                            <td>{data.userid}</td>
                            <td>{data.productname}</td>
                            <td>{data.productid}</td>
                            {/* <td>{product.quantity}</td> */}
                            <td>{data.feedback}</td>
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
export default FeedbackAdmin