import React, { useState } from "react";
import "../registerStyle.css";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../actions";

const Signup = () => {
  const navigate = useNavigate();

  const [firstName,setFirstname]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [contactNumber,setContactNumber]=useState('');
  const [error,seterror]=useState('');
  const [pofilePicture, setimage] = useState('');

  
  const dispatch=useDispatch()
  
  function convertimage(e) {
    var render = new FileReader();
    render.readAsDataURL(e.target.files[0]);
    render.onload = () => {
      // console.log(render.result);
      setimage(render.result);
    };
    render.onerror = (error) => {
      console.log("error: ", error);
    };
  }

  const SubmitHandler=(e)=>{
    e.preventDefault();

    const user={
      firstName,lastName,email,contactNumber,password,pofilePicture
    }
    dispatch(signup(user))

    
  }
 
  function clickhandlerforlogin(){
    navigate('/login')
  }
  



  return (
    <>
      <div className="maincontainer">
        <div className="firstcontainer">
          <div className="titled">Registration</div>
          <div className="content">
            <form onSubmit={SubmitHandler} enctype="multipart/form-data">
              <div className="user-details">

                <div className="input-box">
                  <span className="details">First Name</span>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e)=>{setFirstname(e.target.value)}}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="details">Last Name</span>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e)=>{setLastName(e.target.value)}}
                    placeholder="Enter your lastname"
                    required
                  />

                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    value={email}
                    onChange={(e)=>{setemail(e.target.value)}}
                    placeholder="Enter your email"
                    required
                  />
                </div>


                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="text"
                    value={contactNumber}
                    onChange={(e)=>{setContactNumber(e.target.value)}}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e)=>{setpassword(e.target.value)}}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Adhar Image</span>
                  <input
                    type="file"
                    id="img"
                    onChange={convertimage}
                    
                  />
                </div>
               
              </div>

              <div className="button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  value="Sihn Up"
                />
              </div>
              <div className="button">
                <button onClick={clickhandlerforlogin}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
