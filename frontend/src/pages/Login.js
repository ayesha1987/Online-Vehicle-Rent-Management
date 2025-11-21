import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Form, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn, login } from "../actions";




function Login() {

  // useEffect(()=>{
  //   if(!auth.authenticate){
  //     dispatch(isUserLoggedIn())
  //   }
  // })

  const navigate=useNavigate()
const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [error,seterror]=useState('');
const auth=useSelector(state=>state.auth)

const dispatch=useDispatch()
const userlogin=(e)=>{
  e.preventDefault();

  const user={
    email,password
  }
  dispatch(login(user))


  
  

}

if(auth.authenticate){
  return navigate("/user/userdashbord")
}



  return(
<>

      <div className="maincontainer">
        <div className="firstcontainer">
          <div className="titled">Registration</div>
          <div className="content">
            <form onSubmit={userlogin} >
              <div className="user-details">
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
                  <span className="details">Password</span>
                  <input
                    type="text"
                    value={password}
                    onChange={(e)=>{setpassword(e.target.value)}}
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className="button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  value="Log in"
                />
              </div>

              {/* <div className="button">
                <input
                  type="button"
                  name="signup"
                  id="signup"
                  value="Login"
                  onClick={getdatahandlar}
                />
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login;