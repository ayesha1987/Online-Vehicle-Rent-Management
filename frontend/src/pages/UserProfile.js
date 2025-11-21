import { useNavigate } from "react-router-dom";
import './UserProfile.css'
import profilimag from '../assets/userimg.png'

function UserProfile(){
    const raw=window.localStorage.getItem('user')
    const userdata=JSON.parse(raw)
    
    const navigate=useNavigate() 
    function clickhandlar(){
      navigate("/user/userdashbord")
    }
    
        return(
          
            
            <div className="pro_container">
            <input type="checkbox" id="switch" checked />
           <div className="pro_outer">
             <div className="pro_content">
               <label for="switch">
                 <span className="pro_toggle">
                   <span className="circle"></span>
                 </span>
               </label>
               <div className="image-box">
                <img src={profilimag} alt=""/>
               </div>
               <div className="details">
                 <div className="name"> <span className="useepspanpro">User ID </span>: {userdata._id}</div>
                 <div className="name"> <span className="useepspanpro">Full Name </span> : {userdata.fullName}</div>
                 <div className="name"> <span className="useepspanpro">Email ID </span> : {userdata.email}</div>
                 <div className="name"> <span className="useepspanpro">Contact Number </span> : {userdata.contactNumber}</div>
                 <div className="buttons">
                   <button onClick={clickhandlar}>Go back to home</button>
                 </div>
               </div>
               <div className="media-icons">
                 <i className="fab fa-facebook-f"></i>
                 <i className="fab fa-twitter"></i>
                 <i className="fab fa-linkedin-in"></i>
               </div>
             </div>
           </div>
          </div>
        )
}
export default UserProfile