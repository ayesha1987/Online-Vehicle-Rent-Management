import { useNavigate } from "react-router-dom";

function UserProfilead(){
    const data=window.localStorage.getItem('userdetailsad')
    const userdata=JSON.parse(data)
    const navigate =useNavigate()
    
    return(
        <div className="userprofileinad" >
            <h1>USER PROFILE DATA</h1>
            <img className="adminprofilesimg" width={500} height={300} src={userdata.pofilePicture} alt="" />
            <div className="usertextdata" ><span className="contstntuser" >User ID : </span> <span>{userdata._id}</span> </div>
            <div className="usertextdata" ><span className="contstntuser" >User Name : </span> <span>{userdata.firstName}  {userdata.lastName} </span> </div>
            <div className="usertextdata" ><span className="contstntuser" >Email ID : </span> <span>{userdata.email}</span> </div>
            <div className="usertextdata" ><span className="contstntuser" >Contact No : </span> <span>{userdata.contactNumber}</span> </div>
            <div onClick={()=>{navigate('/orderdetails')}} className="usertextdata usertextdatabtn  " ><span>Go Back</span></div>
        </div>
    )
}
export default UserProfilead