import Table from "react-bootstrap/Table";
import AdminNav from "../AdminNav";
import { useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaFastBackward } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { FaHome } from "react-icons/fa";



function Product() {
  const product = useSelector((state) => state.product);
 
    const [showmodel,setshowmodel]=useState(null)
    const [index,setindex]=useState(0)

const navigate=useNavigate()
    // const deleteHandlar=async()=>{
    //   const productid=showmodel._id
    //   try{
    //     const res = await fetch("http://localhost:5000/api/v1/product/delete", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({productid}),
    //     });
      
    //     let resjson=await res.json();
      
    //     if(res.status===200){

    //       toast.success(resjson.message)

    //     }
    //     if(res.status===400){
    //       toast.error(resjson.message)
    //       navigate('/adminhome')

    //     }
    //   }catch(error){
    //     console.log(error);
        
    //   }
    // }


console.log("ssssss: ",showmodel);


 if(showmodel===null){
    return (
        <>
          <AdminNav />
          <div className="every">
          <u><h1>All Vehicle Details:</h1></u>
            <div className="mainproductcontainer">
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Vehicle ID</th>
                      <th>Vehicle name</th>
                      <th>Price per day</th>
                      <th>Category</th>
     
                    </tr>
                  </thead>
                  <tbody>
                    {product.products.length > 0
                      ? product.products.map((product) => (
                          <tr key={product._id} onClick={()=>setshowmodel(product)} >
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            {/* <td>{product.quantity}</td> */}
                            <td>{product.category}</td>
                            

                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      );
    }
if(showmodel){

  function imgback(){
    if(index - 1 <0){
      setindex(showmodel.productPicture.length-1)
    }
    else{
      setindex(index-1)
    }
  }

  function imgfront(){
    if(index+1>=showmodel.productPicture.length){
      setindex(0)
    }
    else{
      setindex(index+1)
    }
  }
 
        return(
            <>
              <AdminNav />
              <div className="every, every2">
                {/* <div className="mainproductcontainer">
                  <div>
                    {showmodel.name}
                    <button onClick={()=>{setshowmodel(null)}} >Go Back</button>
                    <div>
                        {
                            showmodel.productPicture.map(picture=>
                                <div>
                                <img height={250} width={350} src={require(`../../uploads/${picture.img}`)} alt="" />
                                </div>
                            )
                        }
                    </div>

                  </div>
                </div> */}

<div className="mainonecarduser , productonename">
                
                <div className="imagediv">
                <div className="bfbuttonu" onClick={imgback} ><FaFastBackward size={20} /></div>



                  <div>
                      <img
                        height={300}
                        width={618}
                        src={require(`../../uploads/${showmodel.productPicture[index].img}`)}
                        alt=""
                      />
                    </div>
                  <div className="bfbuttonu"onClick={imgfront} ><FaFastForward size={20} /></div>
                </div>
                <div className="divdescription" >
                <div className="allcolorwhite"> <span className="carduserspan" > Vehicle ID</span> : {showmodel._id}</div>
                <div className="allcolorwhite"><span className="carduserspan" > Vehicle Name</span> : {showmodel.name}</div>
                <div className="allcolorwhite"><span className="carduserspan" > Price Per Day</span> : {showmodel.price}</div>
                <div className="allcolorwhite"><span className="carduserspan" > Description</span> : {showmodel.description}</div>
                <div className="conformbtnu productsbackbtn" onClick={()=>{setshowmodel(null)}}  >
                  Back to Vehicle
                </div>
                </div>

              </div>
              </div>
            </>
        )
      }


  
  
}
export default Product;
