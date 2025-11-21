import React, { useEffect, useState } from "react";
import { Link, useLinkClickHandler } from "react-router-dom";

const Card=(props)=>{

    let date1=new Date('07-28-2024')
    const [allcartdetails,setallcartdetails]=useState([])
    console.log("aallcartdetails",allcartdetails);
    // let date2=Date(allcartdetails[0].fromdate)
    // console.log("dateobjectincard: ",date2);
    // let today=new Date()
    // console.log("todaydata: ",today);
    
    // console.log("newdata: : ",date1);
    
    

    const getallorderdata=async()=>{
        try{
          const fetchdata= await fetch('http://localhost:5000/api/v1/cart/getall')
          const res = await fetchdata.json()
          console.log("Main cartdata2: ",res.data);
          const cartdetails=res.data;
          setallcartdetails(cartdetails)

         
        }
        catch (error) {
          console.log(error);
        }
      }
    
      useEffect(()=>{
        getallorderdata()
      },[])


    let vehical=props.vehical;
    console.log("vehicalllllllsssss:",vehical);
    let setshowonecard=props.setshowonecard
    
    function clickcard(){
        setshowonecard(vehical)
    }
    
//     if(vehical.booked==="Notbooked"){
//     return(
        
//         <div className="onecard"  key={vehical._id} onClick={clickcard} >
//             <div className="imageandbuttoncontainer">
          
//                 <img className="image" src={require(`../../uploads/${vehical.productPicture[0].img}`)} alt="" />

//             </div>
         
            

//             <div className="titleandText"   >
//                 <p className="title">Vehical Name: {vehical.name}</p>
//                 <p className="text">Vehical Id: {vehical._id}</p>
//                 <p className="text">Price: {vehical.price}</p>
//                 <p className="text">category: {vehical.category}</p>
//                 <div className="twobtn">
//                 {/* <Link  to={"/userinfo"}  ><button  className="BOOKNOW">USER DETAILS</button></Link>         <Link  to={`/carbookdetails/${car.CAR_ID}`}  ><button  className="BOOKNOW">BOOK NOW</button></Link> */}
//                 </div>
                
//             </div>
//         </div>
//     )
// }

// if(allcartdetails.length>0){
// let today=new Date()



//     for (let i = 0; i < allcartdetails.length; i++) {
//         let date1 = new Date(allcartdetails[i].fromdate)
//         let date2 = new Date(allcartdetails[i].todate)
//         let ms1=date1.getTime()
//         let ms2=date2.getTime()
//         let ms3=today.getTime()
//         if(!(allcartdetails[i].productid===vehical._id && ms3>ms1 && ms3<ms2 && vehical.booked==="Booked")){
//         return(
//             <div className="onecard"  key={vehical._id} onClick={clickcard} >
//             <div className="imageandbuttoncontainer">
          
//                 <img className="image" src={require(`../../uploads/${vehical.productPicture[0].img}`)} alt="" />

//             </div>
         
            

//             <div className="titleandText"   >
//                 <p className="title">Vehical Name: {vehical.name}</p>
//                 <p className="text">Vehical Id: {vehical._id}</p>
//                 <p className="text">Price: {vehical.price}</p>
//                 <p className="text">category: {vehical.category}</p>
//                 <div className="twobtn">
//                 {/* <Link  to={"/userinfo"}  ><button  className="BOOKNOW">USER DETAILS</button></Link>         <Link  to={`/carbookdetails/${car.CAR_ID}`}  ><button  className="BOOKNOW">BOOK NOW</button></Link> */}
//                 </div>
                
//             </div>
//         </div>

//         )

//         }
        
        
//     }



// }



for (let i = 0; i < allcartdetails.length; i++) {
    if(vehical._id===allcartdetails[i].productid){
        vehical.fromdate=allcartdetails[i].fromdate.slice(0,10)
        vehical.todate=allcartdetails[i].todate.slice(0,10)
    }
    
}

        return(
        
        <div className="onecard"  key={vehical._id} onClick={clickcard} >
            <div className="imageandbuttoncontainer">
          
                <img className="image" src={require(`../../uploads/${vehical.productPicture[0].img}`)} alt="" />

            </div>
         
            

            <div className="titleandText"   >
                <p className="title">Vehicle Name: {vehical.name}</p>
                {/* <p className="text">Vehical Id: {vehical._id}</p> */}
                <p className="text">Price: {vehical.price}</p>
                <p className="text">category: {vehical.category}</p>
                <p className="text">Booked date: {vehical.fromdate}</p>
                <p className="text">Returned date: {vehical.todate}</p>
                <div className="twobtn">
                {/* <Link  to={"/userinfo"}  ><button  className="BOOKNOW">USER DETAILS</button></Link>         <Link  to={`/carbookdetails/${car.CAR_ID}`}  ><button  className="BOOKNOW">BOOK NOW</button></Link> */}
                </div>
                
            </div>
        </div>
    )

}
export default Card