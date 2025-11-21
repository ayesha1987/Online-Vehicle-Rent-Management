import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Signup from "./pages/Signup";

import Login from "./pages/Login";
import UserHome from "./pages/UserHome";

import { useDispatch, useSelector } from "react-redux";
import { getInitialData, isUserLoggedIn } from "./actions";
import { useEffect, useState } from "react";
import Private from "./pages/Private";
import Admin from "./admin/Admin";
import AdminHome from "./admin/AdminHome";
import Product from "./admin/products/Product";
import AddVehicalForm from "./admin/products/AddVehicalForm";
import Order from "./pages/Order";
import OrderDetails from "./admin/products/OrderDetails";
import VehicalBook from "./pages/VehicalBook";
import UserProfile from "./pages/UserProfile";
import FeedbackAdmin from "./admin/products/FeedbackAdmin";
import UserProfilead from "./admin/products/UserProfilead";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {

  const [category,setCategory]=useState("all")

  const dispatch=useDispatch();
  const auth =useSelector(state=>state.auth)

  useEffect(()=>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
    dispatch(getInitialData())
    
  },[])

   

  //
  return (
    <div className="MAINWRAPERINAPP">

   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>

         <Route path="/signup" element={<Signup/>} /> 
        
        <Route path="/login" element={<Login />}  />
        <Route path="/order" element={<Order />}  />
        <Route path="/bookvehicle" element={<VehicalBook />}  />
        <Route path="/userprofile" element={<UserProfile />}  />

        <Route path="/user" element={<Private/>}  >
          <Route path="userdashbord" element={<UserHome/>} category={category} setCategory={setCategory}  />
        </Route>


        {/* Admin */}

        <Route path="/admin" element={<Admin/>}  />

        <Route path="/adminhome" element={<AdminHome/>}  />

        <Route path="/product" element={<Product/>}  />

        <Route path="/addvehical" element={<AddVehicalForm/>}  />
        
        <Route path="/orderdetails" element={<OrderDetails/>}  />
        
        <Route path="/adminfeedback" element={<FeedbackAdmin/>}  />

        <Route path="/userprofilead" element={<UserProfilead/>}  />



        
      </Routes>
    </div>
  );
}

export default App;
